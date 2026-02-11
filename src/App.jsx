import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Community from "./components/Community/Community";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="site">
      <Header />
      <Hero />
      <About />
      <HowItWorks />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
