import heroImage from "@/assets/hero-patent-model.jpg";
import archiveImage from "@/assets/archive-story.jpg";
import merchandiseImage from "@/assets/merchandise-collection.jpg";
import telegraphImage from "@/assets/telegraph-model.jpg";

export { heroImage, archiveImage, merchandiseImage, telegraphImage };

export const collectibles = [
  { name: "Electromagnetic Telegraph", inventor: "Samuel F. B. Morse", year: "1840", category: "Communications", image: telegraphImage, position: "center" },
  { name: "Rotary Steam Engine", inventor: "Charles E. Emery", year: "1872", category: "Energy", image: heroImage, position: "70% center" },
  { name: "Incandescent Lamp", inventor: "Thomas A. Edison", year: "1880", category: "Household", image: archiveImage, position: "68% 70%" },
  { name: "Mechanical Flying Machine", inventor: "W. F. Quinby", year: "1867", category: "Transportation", image: merchandiseImage, position: "75% center" },
  { name: "Railway Signal Apparatus", inventor: "George Westinghouse", year: "1869", category: "Transportation", image: heroImage, position: "80% center" },
  { name: "Electric Circuit Breaker", inventor: "Granville T. Woods", year: "1889", category: "Energy", image: telegraphImage, position: "30% center" },
];

export const products = [
  { name: "Flying Machine Patent Tee", price: "$42.00", collection: "Early Flight Collection", image: merchandiseImage, position: "22% center" },
  { name: "Telegraph Study Mug", price: "$28.00", collection: "Signals & Systems", image: merchandiseImage, position: "5% 62%" },
  { name: "Brass Flight Ornament", price: "$34.00", collection: "Early Flight Collection", image: merchandiseImage, position: "88% 78%" },
  { name: "Flying Machine Art Print", price: "$56.00", collection: "Patent Drawing Series", image: merchandiseImage, position: "60% 22%" },
  { name: "Telegraph Model Miniature", price: "$118.00", collection: "Model Archive", image: archiveImage, position: "55% 28%" },
  { name: "Innovation Collector Plaque", price: "$145.00", collection: "Founders Edition", image: merchandiseImage, position: "83% 56%" },
  { name: "Patent Archive Gift Set", price: "$185.00", collection: "Curator's Selection", image: merchandiseImage, position: "72% 52%" },
  { name: "Steam Engine Desk Model", price: "$235.00", collection: "Premium Replicas", image: heroImage, position: "72% 54%" },
];

export const categories = ["Apparel", "Prints & Posters", "Mugs & Drinkware", "Ornaments", "Collectible Models", "Stationery", "Gift Sets", "Premium Replicas"];
export const historyCategories = ["Transportation", "Energy", "Communications", "Manufacturing", "Music", "Medical Innovation", "Sports", "Household Innovation"];