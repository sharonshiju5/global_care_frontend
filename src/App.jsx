import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage/HomePage";
import SolutionsPage from "./pages/SolutionsPage/SolutionsPage";
import PanelsPage from "./pages/PanelsPage/PanelsPage";
import RubberPage from "./pages/RubberPage/RubberPage";
import SealingPage from "./pages/SealingPage/SealingPage";
import InquiryPage from "./pages/InquiryPage/InquiryPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import EnquiryPage from "./pages/EnquiryPage/EnquiryPage";
import AcousticPvcDoorsPage from "./pages/AcousticPvcDoorsPage/AcousticPvcDoorsPage";
import FlutedWallSystemsPage from "./pages/FlutedWallSystemsPage/FlutedWallSystemsPage";
import WpcDeckingPage from "./pages/WpcDeckingPage/WpcDeckingPage";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<SolutionsPage />} />
        <Route path="/industrial-pvc" element={<HomePage />} />
        <Route path="/fluted-panels" element={<PanelsPage />} />
        <Route path="/rubber-systems" element={<RubberPage />} />
        <Route path="/sealing-sheets" element={<SealingPage />} />
        <Route path="/inquiry" element={<InquiryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/enquiry" element={<EnquiryPage />} />
        <Route path="/acoustic-pvc-doors" element={<AcousticPvcDoorsPage />} />
        <Route path="/fluted-wall-systems" element={<FlutedWallSystemsPage />} />
        <Route path="/wpc-exterior-decking" element={<WpcDeckingPage />} />
      </Routes>
    </Router>
  );
}

