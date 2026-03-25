import { Leaf, Shield, Truck, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Every ingredient is ethically sourced and sustainably harvested from nature's finest botanicals.",
  },
  {
    icon: Shield,
    title: "Dermatologist Tested",
    description: "Clinically proven formulas tested and approved by board-certified dermatologists.",
  },
  {
    icon: Truck,
    title: "Free Express Shipping",
    description: "Complimentary express delivery on all orders over $75. Arrives in 2-3 business days.",
  },
  {
    icon: RefreshCw,
    title: "30-Day Guarantee",
    description: "Not seeing results? We offer hassle-free returns within 30 days of purchase.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding">
      <div className="container-wide mx-auto">
        <div className="text-center mb-16">
          <p className="label-caps text-accent mb-4">The VEYRA Difference</p>
          <h2 className="heading-section">Why Choose Us</h2>
          <div className="divider mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {features.map((feature) => (
            <div key={feature.title} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-border rounded-full group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-medium mb-3">{feature.title}</h3>
              <p className="body-base text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
