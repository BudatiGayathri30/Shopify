import serumImg from "@/assets/product-serum.jpg";
import moisturizerImg from "@/assets/product-moisturizer.jpg";
import cleanserImg from "@/assets/product-cleanser.jpg";
import eyecreamImg from "@/assets/product-eyecream.jpg";
import faceoilImg from "@/assets/product-faceoil.jpg";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  comparePrice: number;
  image: string;
  category: string;
  badge?: string;
  description: string;
  benefits: string[];
  ingredients: string;
  size: string;
}

export const products: Product[] = [
  {
    id: "botanical-face-serum",
    name: "Botanical Face Serum",
    tagline: "Radiance-boosting hydration complex",
    price: 68,
    comparePrice: 85,
    image: serumImg,
    category: "Serums",
    badge: "Best Seller",
    description: "A lightweight, fast-absorbing serum infused with hyaluronic acid and botanical extracts. Delivers deep hydration while visibly reducing fine lines and enhancing your natural glow.",
    benefits: [
      "Deeply hydrates for up to 72 hours",
      "Visibly reduces fine lines in 4 weeks",
      "Brightens dull, tired-looking skin",
      "Non-comedogenic & suitable for all skin types",
    ],
    ingredients: "Hyaluronic Acid, Vitamin C, Niacinamide, Rosehip Extract, Jojoba Oil",
    size: "30ml / 1.0 fl oz",
  },
  {
    id: "restorative-moisturizer",
    name: "Restorative Moisturizer",
    tagline: "Rich barrier-repair cream",
    price: 54,
    comparePrice: 72,
    image: moisturizerImg,
    category: "Moisturizers",
    badge: "New",
    description: "A luxuriously rich yet non-greasy moisturizer that strengthens your skin barrier while delivering lasting hydration. Formulated with ceramides and shea butter for visibly plumper skin.",
    benefits: [
      "Restores and strengthens skin barrier",
      "24-hour moisture lock technology",
      "Reduces redness and irritation",
      "Dermatologist tested & approved",
    ],
    ingredients: "Ceramide Complex, Shea Butter, Squalane, Aloe Vera, Green Tea Extract",
    size: "50ml / 1.7 fl oz",
  },
  {
    id: "gentle-botanical-cleanser",
    name: "Gentle Botanical Cleanser",
    tagline: "pH-balanced purifying wash",
    price: 38,
    comparePrice: 48,
    image: cleanserImg,
    category: "Cleansers",
    description: "A gentle yet effective gel cleanser that removes impurities without stripping natural oils. Leaves skin feeling refreshed, balanced, and perfectly prepped for your routine.",
    benefits: [
      "Removes 99% of impurities",
      "Maintains optimal pH balance",
      "Won't strip natural moisture",
      "Suitable for sensitive skin",
    ],
    ingredients: "Chamomile Extract, Glycerin, Salicylic Acid, Cucumber Extract, Vitamin E",
    size: "150ml / 5.0 fl oz",
  },
  {
    id: "revitalizing-eye-cream",
    name: "Revitalizing Eye Cream",
    tagline: "Targeted dark circle treatment",
    price: 48,
    comparePrice: 62,
    image: eyecreamImg,
    category: "Eye Care",
    description: "A concentrated eye treatment that targets dark circles, puffiness, and crow's feet. The cooling formula instantly refreshes tired eyes while delivering long-term anti-aging benefits.",
    benefits: [
      "Reduces dark circles by 60%",
      "Firms and tightens delicate eye area",
      "Cooling effect reduces puffiness instantly",
      "Clinically proven results in 2 weeks",
    ],
    ingredients: "Retinol, Caffeine, Peptide Complex, Vitamin K, Argan Oil",
    size: "15ml / 0.5 fl oz",
  },
  {
    id: "nourishing-face-oil",
    name: "Nourishing Face Oil",
    tagline: "Overnight renewal elixir",
    price: 72,
    comparePrice: 90,
    image: faceoilImg,
    category: "Oils",
    badge: "Limited Edition",
    description: "A luxurious blend of cold-pressed botanical oils that work overnight to nourish, repair, and rejuvenate. Wake up to visibly softer, more radiant skin every morning.",
    benefits: [
      "Deeply nourishes overnight",
      "Boosts cell renewal while you sleep",
      "Locks in moisture for 12+ hours",
      "100% natural, cold-pressed ingredients",
    ],
    ingredients: "Rosehip Oil, Marula Oil, Sea Buckthorn, Lavender Essential Oil, Vitamin A",
    size: "30ml / 1.0 fl oz",
  },
];
