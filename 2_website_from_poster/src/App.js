import "./App.css";
import logo from "./assets/brand-logo.png";
import EquipmentsSection from "./components/EquipmentsSection.js";
import Footer from "./components/Footer";
import AboutAndRewardSection from "./components/AboutAndRewardSection";
import SegmentationSection from "./components/SegmentationSection";

function App() {
  return (
    <>
      <img src={logo} alt="brand-logo" id="logo" />
      <AboutAndRewardSection />
      <EquipmentsSection />
      <hr />
      <SegmentationSection />
      <Footer />
    </>
  );
}

export default App;
