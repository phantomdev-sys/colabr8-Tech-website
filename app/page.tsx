import Nav from "@/components/nav";
import Hero from "@/components/hero";
import SocialProof from "@/components/social-proof";
import StatsBar from "@/components/stats-bar";
import FeaturesGrid from "@/components/features-grid";
import FeatureTabs from "@/components/feature-tabs";
import WhiteLabel from "@/components/white-label";
import HowItWorks from "@/components/how-it-works";
import ComparisonTable from "@/components/comparison-table";
import PricingCards from "@/components/pricing-cards";
import Testimonials from "@/components/testimonials";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <SocialProof />
      <StatsBar />
      <FeaturesGrid />
      <FeatureTabs />
      <WhiteLabel />
      <HowItWorks />
      <ComparisonTable />
      <PricingCards />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
