import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    category: "Shipping",
    items: [
      { q: "How long does shipping take?", a: "Standard shipping takes 5-7 business days. Express shipping arrives in 2-3 business days. Free express shipping on orders over $75." },
      { q: "Do you ship internationally?", a: "Yes, we ship to over 40 countries worldwide. International shipping typically takes 7-14 business days." },
      { q: "How can I track my order?", a: "Once your order ships, you'll receive a tracking number via email. You can also track your order through your account dashboard." },
    ],
  },
  {
    category: "Returns & Exchanges",
    items: [
      { q: "What is your return policy?", a: "We offer a 30-day money-back guarantee. If you're not satisfied with your purchase, simply contact us for a full refund or exchange." },
      { q: "How do I initiate a return?", a: "Contact our customer service team at hello@veyra.com with your order number. We'll provide you with a prepaid return label." },
    ],
  },
  {
    category: "Products",
    items: [
      { q: "Are your products cruelty-free?", a: "Yes, all VEYRA products are 100% cruelty-free. We never test on animals and are certified by Leaping Bunny." },
      { q: "Are your products suitable for sensitive skin?", a: "Yes, all our products are dermatologist tested and formulated for all skin types, including sensitive skin. We avoid harsh chemicals and artificial fragrances." },
      { q: "What ingredients do you avoid?", a: "We never use parabens, sulfates, phthalates, mineral oil, synthetic fragrances, or artificial colors in any of our formulations." },
      { q: "How should I store my products?", a: "Store in a cool, dry place away from direct sunlight. Our face oils and serums can be refrigerated for an extra refreshing application." },
    ],
  },
];

const FAQPage = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header />
      <main className="pt-28 md:pt-32">
        <section className="section-padding">
          <div className="container-narrow mx-auto max-w-2xl">
            <div className="text-center mb-16">
              <p className="label-caps text-accent mb-4">Help Center</p>
              <h1 className="heading-section mb-4">Frequently Asked Questions</h1>
              <p className="body-base text-muted-foreground">
                Find answers to common questions about our products, shipping, and policies.
              </p>
            </div>

            <div className="space-y-12">
              {faqs.map((section) => (
                <div key={section.category}>
                  <h2 className="font-heading text-2xl font-light mb-6">{section.category}</h2>
                  <div className="space-y-1">
                    {section.items.map((item) => {
                      const key = `${section.category}-${item.q}`;
                      return (
                        <div key={key} className="border-b border-border">
                          <button
                            onClick={() => setOpenItem(openItem === key ? null : key)}
                            className="w-full flex items-center justify-between py-5 text-left"
                          >
                            <span className="font-medium text-sm pr-4">{item.q}</span>
                            <ChevronDown className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform ${openItem === key ? "rotate-180" : ""}`} />
                          </button>
                          {openItem === key && (
                            <p className="pb-5 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
