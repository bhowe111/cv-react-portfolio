import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/Portfolio";
import Publications from "./components/Publications";
import ContactUs from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Publications />
      <ContactUs />
      <Footer />
    </div>
  );
}
export default App;
