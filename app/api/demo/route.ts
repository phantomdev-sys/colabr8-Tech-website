import { NextRequest, NextResponse } from "next/server";

interface DemoPayload {
  name: string;
  business: string;
  email: string;
  phone?: string;
  plan?: string;
  message?: string;
}

export async function POST(req: NextRequest) {
  let body: DemoPayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, business, email } = body;

  if (!name?.trim() || !business?.trim() || !email?.trim()) {
    return NextResponse.json(
      { error: "Name, business name, and email are required" },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const webhookUrl = process.env.CRM_WEBHOOK_URL;
  const webhookToken = process.env.CRM_WEBHOOK_TOKEN;

  if (webhookUrl) {
    try {
      const webhookRes = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(webhookToken ? { Authorization: `Bearer ${webhookToken}` } : {}),
        },
        body: JSON.stringify({
          source: "colabr8.tech/contact",
          name: name.trim(),
          business: business.trim(),
          email: email.trim().toLowerCase(),
          phone: body.phone?.trim() || null,
          plan_interest: body.plan || null,
          message: body.message?.trim() || null,
          submitted_at: new Date().toISOString(),
        }),
      });

      if (!webhookRes.ok) {
        console.error("CRM webhook returned non-OK:", webhookRes.status);
      }
    } catch (err) {
      console.error("CRM webhook request failed:", err);
    }
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
