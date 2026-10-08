import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import References from "./components/references/References";
import Services from "./components/services/Services";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <References />
      </main>
      <Footer />
    </>
  );
}

export default App;
