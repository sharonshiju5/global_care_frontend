import ProductPage from "../../components/ProductPage";
import heroImg from "../../assets/images/wpc-exterior-decking.jpg";
import galleryImg1 from "../../assets/images/material-samples.jpg";
import galleryImg2 from "../../assets/images/stretch-film-application.jpg";

const product = {
  navKey: "solutions",
  title: "WPC Exterior Decking",
  subtitle: "Weather-resistant composite surfaces built to endure. Premium wood-plastic composite decking for outdoor architectural excellence.",
  heroImage: heroImg,
  features: [
    { icon: "thunderstorm", title: "Weather Resistant", description: "Engineered to withstand rain, sun, and humidity without warping, cracking, or fading." },
    { icon: "forest", title: "Natural Aesthetics", description: "Authentic wood-grain texture and warm tones without the maintenance of real timber." },
    { icon: "do_not_step", title: "Anti-Slip Surface", description: "Textured surface providing excellent grip even in wet conditions for safety." },
    { icon: "pest_control", title: "Termite Proof", description: "Composite material immune to termites, rot, and fungal decay." },
    { icon: "recycling", title: "Sustainable", description: "Made from recycled wood fibers and polymers, reducing environmental impact." },
    { icon: "architecture", title: "Versatile Use", description: "Ideal for balconies, pool decks, terraces, walkways, and garden paths." },
  ],
  gallery: [
    { src: galleryImg1, alt: "WPC decking material samples" },
    { src: galleryImg2, alt: "Decking application detail" },
  ],
  specs: [
    { label: "Material", value: "Wood-Plastic Composite (WPC)" },
    { label: "Dimensions", value: "140mm x 25mm x 2200mm" },
    { label: "Weight", value: "3.2 kg/m" },
    { label: "UV Resistance", value: "High (10+ years fade-free)" },
    { label: "Load Capacity", value: "500 kg/m²" },
    { label: "Warranty", value: "20 Years" },
  ],
};

export default function WpcDeckingPage() {
  return <ProductPage product={product} />;
}
