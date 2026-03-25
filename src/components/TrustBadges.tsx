import { ShieldCheck, Truck, RotateCcw, Lock } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "100% Authentic" },
  { icon: Truck, label: "Free Shipping 75+" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Lock, label: "Secure Checkout" },
];

const TrustBadges = () => {
  return (
    <section className="py-12 border-y border-border">
      <div className="container-wide mx-auto px-4 md:px-8">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {badges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-3 text-muted-foreground">
              <badge.icon className="w-5 h-5 text-accent" />
              <span className="label-caps text-[11px]">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
