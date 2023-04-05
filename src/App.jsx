import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
// import Message from "./components/Message";
import GetInTouch from "./components/GetInTouch";
import Marquee from "./components/Marquee";

function App() {
  return (
    <div className="App bg-light-black w-full ">
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      {/* <Message /> */}
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
