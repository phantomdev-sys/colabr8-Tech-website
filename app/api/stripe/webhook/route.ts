import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-04-22.dahlia",
  });

  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing stripe-signature header" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Webhook signature verification failed";
    console.error("[stripe/webhook] Signature verification failed:", message);
    return NextResponse.json({ error: message }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      console.log("[stripe/webhook] checkout.session.completed", {
        sessionId: session.id,
        customerId: session.customer,
        subscriptionId: session.subscription,
        planName: session.metadata?.planName,
      });
      // TODO: trigger tenant provisioning via Supabase edge function
      break;
    }

    case "customer.subscription.created": {
      const sub = event.data.object as Stripe.Subscription;
      console.log("[stripe/webhook] customer.subscription.created", {
        subscriptionId: sub.id,
        customerId: sub.customer,
        status: sub.status,
      });
      break;
    }

    case "customer.subscription.updated": {
      const sub = event.data.object as Stripe.Subscription;
      console.log("[stripe/webhook] customer.subscription.updated", {
        subscriptionId: sub.id,
        customerId: sub.customer,
        status: sub.status,
      });
      break;
    }

    case "customer.subscription.deleted": {
      const sub = event.data.object as Stripe.Subscription;
      console.log("[stripe/webhook] customer.subscription.deleted", {
        subscriptionId: sub.id,
        customerId: sub.customer,
      });
      // TODO: flag account for suspension
      break;
    }

    case "invoice.payment_succeeded": {
      const invoice = event.data.object as Stripe.Invoice;
      console.log("[stripe/webhook] invoice.payment_succeeded", {
        invoiceId: invoice.id,
        customerId: invoice.customer,
        amount: invoice.amount_paid,
      });
      break;
    }

    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice;
      console.log("[stripe/webhook] invoice.payment_failed", {
        invoiceId: invoice.id,
        customerId: invoice.customer,
        amount: invoice.amount_due,
      });
      // TODO: send payment failure notification
      break;
    }

    default:
      console.log("[stripe/webhook] Unhandled event type:", event.type);
  }

  return NextResponse.json({ received: true });
}
