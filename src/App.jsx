// App.jsx
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutProject from "./components/AboutProject";
import Highlights from "./components/Highlights";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import LocationAdvantage from "./components/LocationAdvantage";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutBuilder from "./components/AboutBuilder";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Hero />

      <main className="page-shell">
        <AboutProject />
        <Highlights />
        <Amenities />
        <Gallery />
        <LocationAdvantage />
        <WhyChooseUs />
        <AboutBuilder />
        <Testimonials />
        <ContactForm />
      </main>

      <Footer />

    </div>
  );
}

export default App;