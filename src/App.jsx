import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Portfolio from "./sections/Portfolio";
import Featured from "./sections/Featured";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-brand-bg min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Featured />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
