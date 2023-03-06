import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App bg-gradient-to-tr from-pink to-dim-gray">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
