import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Publications";
import ContactUs from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}
export default App;
