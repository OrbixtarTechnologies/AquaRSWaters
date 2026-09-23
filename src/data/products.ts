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
    description: "19-litre drinking-water gallon for home and office dispenser use.",
    features: ["19L size", "Home & office use", "Delivery enquiry available"],
    inStock: true,
    badge: "Popular",
  },
  {
    id: 2,
    name: "1.5 Litre Mineral Water Bottle",
    nameUrdu: "1.5 لیٹر منرل واٹر بوتل",
    category: "Water Bottles",
    price: 30,
    unit: "per bottle",
    image: "https://images.unsplash.com/photo-1561041695-d2fadf9f318c?w=500&h=500&fit=crop&auto=format",
    description: "1.5-litre bottled water option for everyday use, travel, and larger household needs.",
    features: ["1.5L size", "Everyday use", "Bulk enquiry available"],
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
    description: "Compact 500ml bottled water option for personal, school, gym, or travel use.",
    features: ["500ml size", "Portable format", "Carton enquiry available"],
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
    description: "Top-loading hot and cold water dispenser designed for 19L gallon use in homes and offices.",
    features: ["Hot & cold dispensing", "Top-loading design", "19L gallon compatible"],
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
    description: "Reverse Osmosis filtration system for domestic, office, and small-business applications.",
    features: ["Multi-stage RO setup", "Domestic & office use", "Installation enquiry available"],
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
    description: "Compact UV-based water purification unit for point-of-use applications.",
    features: ["UV-based purification", "Compact format", "Low-power design"],
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
    description: "Replacement cartridge set for compatible multi-stage filtration systems.",
    features: ["5-stage set", "Replacement filters", "Compatibility confirmation recommended"],
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
    description: "Case of six 19L water gallons for offices, larger households, and recurring requirements.",
    features: ["6 × 19L gallons", "Bulk format", "Business enquiry available"],
    inStock: true,
    badge: "Value Pack",
  },
];

export const categories = ["All", "Water Bottles", "Dispensers", "Filtration", "Accessories"];
