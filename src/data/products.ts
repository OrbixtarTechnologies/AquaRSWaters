export interface Product {
  id: number;
  name: string;
  nameUrdu?: string;
  category: string;
  price: number;
  originalPrice?: number;
  unit: string;
  image: string;
  description: string;
  features: string[];
  inStock: boolean;
  badge?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "19 Litre Mineral Water Gallon",
    nameUrdu: "19 لیٹر منرل واٹر گیلن",
    category: "Water Bottles",
    price: 80,
    unit: "per bottle",
    image: "https://images.unsplash.com/photo-1536939459926-301728717817?w=500&h=500&fit=crop&auto=format",
    description: "Premium 19-litre mineral water gallon, perfect for home and office use with water dispensers. Sourced from natural springs and treated with multi-stage filtration.",
    features: ["Multi-stage filtered", "BPA-free gallon", "Mineral enriched", "Home & office delivery"],
    inStock: true,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "1.5 Litre Mineral Water Bottle",
    nameUrdu: "1.5 لیٹر منرل واٹر بوتل",
    category: "Water Bottles",
    price: 30,
    unit: "per bottle",
    image: "https://images.unsplash.com/photo-1561041695-d2fadf9f318c?w=500&h=500&fit=crop&auto=format",
    description: "Refreshing 1.5-litre mineral water bottle ideal for on-the-go hydration, picnics, and daily use.",
    features: ["Recyclable PET bottle", "Mineral balanced", "Tamper-proof cap", "Bulk packs available"],
    inStock: true,
  },
  {
    id: 3,
    name: "500ml Mineral Water Bottle",
    nameUrdu: "500 ملی لیٹر منرل واٹر بوتل",
    category: "Water Bottles",
    price: 20,
    unit: "per bottle",
    image: "https://images.unsplash.com/photo-1616118132534-381148898bb4?w=500&h=500&fit=crop&auto=format",
    description: "Compact 500ml mineral water bottle — perfect for school, gym, and travel. Available in carton packs.",
    features: ["Lightweight design", "Easy grip", "Recyclable", "School & gym friendly"],
    inStock: true,
  },
  {
    id: 4,
    name: "Water Dispenser (Hot & Cold)",
    nameUrdu: "واٹر ڈسپینسر (گرم و ٹھنڈا)",
    category: "Dispensers",
    price: 18500,
    originalPrice: 22000,
    unit: "per unit",
    image: "https://images.unsplash.com/photo-1780590107766-28714e165924?w=500&h=500&fit=crop&auto=format",
    description: "Top-loading water dispenser with hot & cold functionality. Compatible with 19L gallons. Sleek design for home and office environments.",
    features: ["Hot & cold water", "Top-loading 19L gallon", "Energy saving", "Child safety lock", "Stainless steel tank"],
    inStock: true,
    badge: "Sale",
  },
  {
    id: 5,
    name: "RO Water Filtration System",
    nameUrdu: "آر او واٹر فلٹریشن سسٹم",
    category: "Filtration",
    price: 24500,
    unit: "per unit",
    image: "https://images.unsplash.com/photo-1669211659202-722981df44f8?w=500&h=500&fit=crop&auto=format",
    description: "Professional 6-stage Reverse Osmosis filtration system. Removes 99.9% of contaminants, bacteria, and heavy metals. Ideal for homes, offices, and small businesses.",
    features: ["6-stage RO filtration", "50 GPD capacity", "TDS meter included", "Easy installation", "1-year warranty"],
    inStock: true,
    badge: "Premium",
  },
  {
    id: 6,
    name: "UV Water Purifier",
    nameUrdu: "یو وی واٹر پیوریفائر",
    category: "Filtration",
    price: 12000,
    unit: "per unit",
    image: "https://images.unsplash.com/photo-1662460149582-b7d687013ada?w=500&h=500&fit=crop&auto=format",
    description: "Compact UV water purifier that eliminates 99.99% of bacteria and viruses without chemicals. Instant purification at the point of use.",
    features: ["UV-C technology", "Chemical free", "Compact design", "LED indicator", "Low power consumption"],
    inStock: true,
  },
  {
    id: 7,
    name: "Filter Cartridge Set (5-stage)",
    nameUrdu: "فلٹر کارٹریج سیٹ (5 مرحلے)",
    category: "Accessories",
    price: 3500,
    unit: "per set",
    image: "https://images.unsplash.com/photo-1662647344062-b0cdb1ed7227?w=500&h=500&fit=crop&auto=format",
    description: "Complete 5-stage replacement filter cartridge set. Compatible with most RO and water purifier brands. Recommended replacement every 6-12 months.",
    features: ["5-stage filtration", "Universal fit", "6-12 months lifespan", "Includes sediment, carbon & RO membrane"],
    inStock: true,
  },
  {
    id: 8,
    name: "19L Water Bottle — Case of 6",
    nameUrdu: "19 لیٹر واٹر بوتل — 6 کا سیٹ",
    category: "Water Bottles",
    price: 450,
    originalPrice: 480,
    unit: "per case",
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=500&h=500&fit=crop&auto=format",
    description: "Bulk pack of 6 × 19L mineral water gallons. Ideal for offices, factories, and large families. Free delivery on 3+ cases.",
    features: ["6 × 19L gallons", "Free delivery 3+ cases", "Priority refill", "Corporate pricing available"],
    inStock: true,
    badge: "Value Pack",
  },
];

export const categories = ["All", "Water Bottles", "Dispensers", "Filtration", "Accessories"];
