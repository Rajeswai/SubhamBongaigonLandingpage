// App.jsx
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import AboutProject from "./components/AboutProject";
import Amenities from "./components/Amenities";
import Walkthrough from "./components/Walkthrough";
import Gallery from "./components/Gallery";
import LocationAdvantage from "./components/LocationAdvantage";
import FloorPlans from "./components/FloorPlans"; 
import AboutBuilder from "./components/AboutBuilder";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Hero />
      <Highlights />

      <main className="page-shell">
        <AboutProject />
        <Amenities />
        <Walkthrough />
        <Gallery />
        <LocationAdvantage />
        <FloorPlans /> 
        <AboutBuilder />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;