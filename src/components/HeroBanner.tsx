import heroBanner from "@/assets/hero-banner.jpg";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="VEYRA premium botanical skincare collection"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide mx-auto px-4 md:px-8">
        <div className="max-w-xl">
          <p className="label-caps text-gold mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Botanical Skincare
          </p>
          <h1
            className="heading-display text-primary-foreground mb-6 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Nature's Most
            <br />
            <span className="italic">Powerful</span> Ingredients
          </h1>
          <p
            className="body-large text-primary-foreground/80 mb-10 max-w-md animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            Handcrafted formulas that harness the transformative power of botanicals
            for visibly radiant, healthy skin.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <Link to="/shop" className="btn-accent inline-block text-center">
              Shop Collection
            </Link>
            <Link to="/about" className="btn-outline-light inline-block text-center">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
