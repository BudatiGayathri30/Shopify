import { Link } from "react-router-dom";
import { products } from "@/lib/products";

const BestSellers = () => {
  const bestSellers = products.filter((p) => p.badge === "Best Seller" || p.badge === "Limited Edition");
  const allBest = bestSellers.length >= 3 ? bestSellers : products.slice(0, 3);

  return (
    <section className="section-padding bg-primary">
      <div className="container-wide mx-auto">
        <div className="text-center mb-16">
          <p className="label-caps text-gold-light mb-4">Most Loved</p>
          <h2 className="heading-section text-primary-foreground">Best Sellers</h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {allBest.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group text-center"
            >
              <div className="relative aspect-square overflow-hidden bg-primary-foreground/10 mb-6 mx-auto max-w-xs">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={800}
                />
              </div>
              <h3 className="font-heading text-2xl font-light text-primary-foreground mb-2 group-hover:text-gold-light transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-primary-foreground/60 mb-3">{product.tagline}</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-primary-foreground font-medium">${product.price}</span>
                <span className="text-sm text-primary-foreground/40 line-through">${product.comparePrice}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
