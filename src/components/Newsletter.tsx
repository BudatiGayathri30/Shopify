import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="section-padding bg-primary">
      <div className="container-narrow mx-auto text-center">
        <p className="label-caps text-gold-light mb-4">Stay Connected</p>
        <h2 className="heading-section text-primary-foreground mb-4">
          Join the VEYRA Community
        </h2>
        <p className="body-base text-primary-foreground/60 mb-10 max-w-md mx-auto">
          Subscribe for exclusive offers, skincare tips, and early access to new collections.
        </p>

        {submitted ? (
          <p className="text-gold-light label-caps">Welcome to the community ✓</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 px-5 py-3.5 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button type="submit" className="btn-accent whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
