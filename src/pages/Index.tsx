import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import FeaturedCollection from "@/components/FeaturedCollection";
import BestSellers from "@/components/BestSellers";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProductHighlights from "@/components/ProductHighlights";
import Testimonials from "@/components/Testimonials";
import TrustBadges from "@/components/TrustBadges";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header />
      <main>
        <HeroBanner />
        <TrustBadges />
        <FeaturedCollection />
        <BestSellers />
        <WhyChooseUs />
        <ProductHighlights />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
