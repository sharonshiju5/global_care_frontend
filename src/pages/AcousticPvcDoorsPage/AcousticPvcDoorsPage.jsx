import ProductPage from "../../components/ProductPage";
import heroImg from "../../assets/images/acoustic-pvc-doors.jpg";
import galleryImg1 from "../../assets/images/pvc-doors-hallway.jpg";
import galleryImg2 from "../../assets/images/hero-pvc-door.jpg";

const product = {
  navKey: "solutions",
  title: "Acoustic PVC Doors",
  subtitle: "Sound-dampening architectural entryways engineered for modern spaces. Premium polymer construction with superior acoustic insulation.",
  heroImage: heroImg,
  features: [
    { icon: "volume_off", title: "Sound Dampening", description: "Advanced acoustic insulation reducing noise transmission by up to 35dB for peaceful interiors." },
    { icon: "water_drop", title: "Moisture Resistant", description: "Fully waterproof PVC construction ideal for bathrooms, kitchens, and humid environments." },
    { icon: "shield", title: "Durable Build", description: "Engineered polymer core with scratch-resistant surface for long-lasting performance." },
    { icon: "palette", title: "Custom Finishes", description: "Available in wood-grain, solid colors, and textured finishes to match any interior." },
    { icon: "eco", title: "Eco-Friendly", description: "100% recyclable materials with zero formaldehyde emissions for healthier spaces." },
    { icon: "build", title: "Easy Installation", description: "Lightweight design with standard frame compatibility for quick, hassle-free fitting." },
  ],
  gallery: [
    { src: galleryImg1, alt: "PVC doors in a modern hallway" },
    { src: galleryImg2, alt: "Premium PVC door detail" },
  ],
  specs: [
    { label: "Material", value: "High-density PVC Polymer" },
    { label: "Thickness", value: "30mm / 35mm / 40mm" },
    { label: "Sound Reduction", value: "Up to 35dB" },
    { label: "Water Resistance", value: "100% Waterproof" },
    { label: "Fire Rating", value: "Class B1 (Self-extinguishing)" },
    { label: "Available Sizes", value: "Custom & Standard" },
  ],
};

export default function AcousticPvcDoorsPage() {
  return <ProductPage product={product} />;
}
