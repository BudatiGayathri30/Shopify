import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Verified Buyer",
    rating: 5,
    text: "The Botanical Face Serum has completely transformed my skin. After just two weeks, my complexion is brighter and more even-toned than it's been in years.",
  },
  {
    name: "Emily R.",
    role: "Verified Buyer",
    rating: 5,
    text: "I've tried countless luxury brands and nothing compares to VEYRA. The quality of ingredients is outstanding and you can feel the difference immediately.",
  },
  {
    name: "Jessica L.",
    role: "Verified Buyer",
    rating: 5,
    text: "The Nourishing Face Oil is my holy grail product. I wake up every morning with the softest, most radiant skin. Worth every penny.",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="container-wide mx-auto">
        <div className="text-center mb-16">
          <p className="label-caps text-accent mb-4">Real Results</p>
          <h2 className="heading-section">What Our Customers Say</h2>
          <div className="divider mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card p-8 md:p-10 text-center"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="body-base text-foreground/80 mb-8 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-heading text-lg font-medium">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
