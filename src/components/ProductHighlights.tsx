import { products } from "@/lib/products";
import { Link } from "react-router-dom";

const ProductHighlights = () => {
  const highlight = products[0]; // Botanical Face Serum

  return (
    <section className="section-padding bg-card">
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="aspect-square overflow-hidden">
            <img
              src={highlight.image}
              alt={highlight.name}
              className="w-full h-full object-cover"
              loading="lazy"
              width={800}
              height={800}
            />
          </div>

          {/* Content */}
          <div>
            <p className="label-caps text-accent mb-4">Product Spotlight</p>
            <h2 className="heading-section mb-4">{highlight.name}</h2>
            <p className="body-large text-muted-foreground mb-8">{highlight.description}</p>

            <ul className="space-y-4 mb-10">
              {highlight.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <span className="body-base">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl font-heading font-light">${highlight.price}</span>
              <span className="text-lg text-muted-foreground line-through">${highlight.comparePrice}</span>
              <span className="label-caps text-accent">
                Save ${highlight.comparePrice - highlight.price}
              </span>
            </div>

            <Link to={`/product/${highlight.id}`} className="btn-accent inline-block">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
