import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/70 pt-16 pb-8 px-4 md:px-8">
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="font-heading text-2xl text-primary-foreground tracking-[0.15em] font-light">
              VEYRA
            </Link>
            <p className="text-sm mt-4 leading-relaxed text-primary-foreground/50">
              Premium botanical skincare crafted from nature's most powerful ingredients.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="label-caps text-primary-foreground mb-4">Shop</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/shop" className="hover:text-primary-foreground transition-colors">All Products</Link></li>
              <li><Link to="/shop" className="hover:text-primary-foreground transition-colors">Best Sellers</Link></li>
              <li><Link to="/shop" className="hover:text-primary-foreground transition-colors">New Arrivals</Link></li>
              <li><Link to="/shop" className="hover:text-primary-foreground transition-colors">Gift Sets</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="label-caps text-primary-foreground mb-4">Help</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/faq" className="hover:text-primary-foreground transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-primary-foreground transition-colors">Shipping Policy</Link></li>
              <li><Link to="/faq" className="hover:text-primary-foreground transition-colors">Returns & Exchanges</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="label-caps text-primary-foreground mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="hover:text-primary-foreground transition-colors">Our Story</Link></li>
              <li><Link to="/about" className="hover:text-primary-foreground transition-colors">Sustainability</Link></li>
              <li><Link to="/about" className="hover:text-primary-foreground transition-colors">Press</Link></li>
              <li><Link to="/about" className="hover:text-primary-foreground transition-colors">Careers</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © 2026 VEYRA. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-primary-foreground/40">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
