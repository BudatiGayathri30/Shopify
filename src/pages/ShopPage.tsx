import { products } from "@/lib/products";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";

const ShopPage = () => {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header />
      <main className="pt-28 md:pt-32">
        <section className="container-wide mx-auto px-4 md:px-8 mb-20">
          <div className="text-center mb-16">
            <p className="label-caps text-accent mb-4">Our Collection</p>
            <h1 className="heading-section">Shop All Products</h1>
            <div className="divider mt-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group">
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
                <h3 className="font-heading text-xl font-light mb-1 group-hover:text-accent transition-colors">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{product.tagline}</p>
                <div className="flex items-center gap-2">
                  <span className="font-medium">${product.price}</span>
                  <span className="text-sm text-muted-foreground line-through">${product.comparePrice}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ShopPage;
