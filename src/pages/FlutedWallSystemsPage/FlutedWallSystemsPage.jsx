import ProductPage from "../../components/ProductPage";
import heroImg from "../../assets/images/fluted-wall-panels.jpg";
import galleryImg1 from "../../assets/images/architectural-panels-hero.jpg";
import galleryImg2 from "../../assets/images/louver-panels-detail.jpg";

const product = {
  navKey: "solutions",
  title: "Fluted Wall Systems",
  subtitle: "Textured cladding for dynamic interiors. Precision-engineered fluted panels that transform walls into architectural statements.",
  heroImage: heroImg,
  features: [
    { icon: "texture", title: "Fluted Texture", description: "Precision-milled vertical grooves creating depth, shadow play, and visual rhythm on any wall surface." },
    { icon: "straighten", title: "Modular Design", description: "Interlocking panel system for seamless installation across any wall dimension." },
    { icon: "local_fire_department", title: "Fire Retardant", description: "Class A fire-rated materials ensuring safety without compromising aesthetics." },
    { icon: "brush", title: "Premium Finishes", description: "Natural wood-grain, matte, and metallic finishes for versatile design applications." },
    { icon: "noise_aware", title: "Acoustic Benefits", description: "Fluted profile naturally diffuses sound, improving room acoustics." },
    { icon: "cleaning_services", title: "Low Maintenance", description: "Wipe-clean surface resistant to stains, scratches, and UV fading." },
  ],
  gallery: [
    { src: galleryImg1, alt: "Architectural fluted panels in a modern space" },
    { src: galleryImg2, alt: "Louver panel detail showing texture" },
  ],
  specs: [
    { label: "Material", value: "WPC / PVC Composite" },
    { label: "Panel Width", value: "150mm / 195mm / 300mm" },
    { label: "Thickness", value: "12mm / 15mm / 18mm" },
    { label: "Fire Rating", value: "Class A (Non-combustible)" },
    { label: "Installation", value: "Click-lock / Adhesive" },
    { label: "Warranty", value: "15 Years" },
  ],
};

export default function FlutedWallSystemsPage() {
  return <ProductPage product={product} />;
}
