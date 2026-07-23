import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Presentation from "./components/Presentation";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import BlogPreview from "./components/BlogPreview";
import Footer from "./components/Footer";
import StructuredData from "./components/SEO/StructuredData";


{/* <Footer /> */}
function App() {
  return (
    <>
     <StructuredData />
  

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENU */}
      <div >

        {/* HERO */}
        <Hero />

        {/* PRESENTATION */}
        <Presentation />

        {/* SERVICES */}
        <Services />

        {/* BENEFITS / IMPACT */}
        <Benefits />
         
         <CTA />
         <FAQ />
<BlogPreview />
<Footer />
        

      </div>
    </>
  );
}

export default App;