import { useParams, Link } from "react-router-dom";
import { products } from "@/lib/products";
import { Star, ShieldCheck, Truck, RotateCcw, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { useState } from "react";

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-section mb-4">Product Not Found</h1>
          <Link to="/" className="btn-primary inline-block">Back to Home</Link>
        </div>
      </div>
    );
  }

  const faqs = [
    { q: "How do I use this product?", a: "Apply a small amount to clean skin morning and evening. Gently massage in upward motions until fully absorbed." },
    { q: "Is this suitable for sensitive skin?", a: "Yes, all VEYRA products are dermatologist tested and formulated for all skin types, including sensitive skin." },
    { q: "How long until I see results?", a: "Most customers notice visible improvements within 2-4 weeks of consistent use." },
    { q: "Is this product cruelty-free?", a: "Absolutely. VEYRA is 100% cruelty-free and never tests on animals." },
  ];

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header />

      <main className="pt-28 md:pt-32">
        {/* Breadcrumb */}
        <div className="container-wide mx-auto px-4 md:px-8 mb-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>

        {/* Product Detail */}
        <section className="container-wide mx-auto px-4 md:px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image */}
            <div className="aspect-square overflow-hidden bg-card">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                width={800}
                height={800}
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              {product.badge && (
                <span className="label-caps text-accent mb-4">{product.badge}</span>
              )}
              <h1 className="heading-section mb-2">{product.name}</h1>
              <p className="body-large text-muted-foreground mb-6">{product.tagline}</p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4.9 (127 reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-heading font-light">${product.price}</span>
                <span className="text-lg text-muted-foreground line-through">${product.comparePrice}</span>
                <span className="bg-accent/10 text-accent label-caps px-3 py-1 text-[10px]">
                  Save {Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)}%
                </span>
              </div>

              <p className="body-base text-muted-foreground mb-8">{product.description}</p>

              {/* Benefits */}
              <ul className="space-y-3 mb-8">
                {product.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Size & Ingredients */}
              <div className="text-sm text-muted-foreground mb-8 space-y-1">
                <p><span className="font-medium text-foreground">Size:</span> {product.size}</p>
                <p><span className="font-medium text-foreground">Key Ingredients:</span> {product.ingredients}</p>
              </div>

              {/* Quantity + Add to Cart */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border border-border">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 text-sm hover:bg-muted transition-colors"
                  >
                    −
                  </button>
                  <span className="px-4 py-3 text-sm font-medium min-w-[3rem] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 text-sm hover:bg-muted transition-colors"
                  >
                    +
                  </button>
                </div>
                <button className="btn-accent flex-1">Add to Cart — ${product.price * quantity}</button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-border">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  Authentic
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Truck className="w-4 h-4 text-accent" />
                  Free Shipping
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <RotateCcw className="w-4 h-4 text-accent" />
                  30-Day Returns
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container-wide mx-auto px-4 md:px-8 mb-20">
          <h2 className="heading-subsection text-center mb-10">Frequently Asked</h2>
          <div className="max-w-2xl mx-auto space-y-1">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-border">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="font-medium text-sm">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <p className="pb-5 text-sm text-muted-foreground">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="container-wide mx-auto px-4 md:px-8 mb-20">
          <h2 className="heading-subsection text-center mb-10">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-square overflow-hidden bg-card mb-4">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={800} height={800} />
                </div>
                <h3 className="font-heading text-xl font-light mb-1 group-hover:text-accent transition-colors">{p.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="font-medium">${p.price}</span>
                  <span className="text-sm text-muted-foreground line-through">${p.comparePrice}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
