import { Link } from "react-router-dom";
import { products } from "@/lib/products";

const FeaturedCollection = () => {
  const featured = products.slice(0, 4);

  return (
    <section className="section-padding">
      <div className="container-wide mx-auto">
        <div className="text-center mb-16">
          <p className="label-caps text-accent mb-4">Curated For You</p>
          <h2 className="heading-section text-foreground">Featured Collection</h2>
          <div className="divider mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featured.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden bg-card mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={800}
                  height={800}
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-accent text-foreground label-caps px-3 py-1.5 text-[10px]">
                    {product.badge}
                  </span>
                )}
              </div>
              <p className="label-caps text-muted-foreground mb-1">{product.category}</p>
              <h3 className="font-heading text-xl font-light mb-1 group-hover:text-accent transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">{product.tagline}</p>
              <div className="flex items-center gap-2">
                <span className="font-medium">${product.price}</span>
                <span className="text-sm text-muted-foreground line-through">
                  ${product.comparePrice}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop" className="btn-primary inline-block">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
