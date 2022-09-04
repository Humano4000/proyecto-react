import Aboutus from "../components/about/Aboutus";
import Carousel from "../components/carousel/Carousel";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";


const Home = () => {
  return (
    <div className="container">
      {/* logo, navbar y carrito de compras */}
      <header className="header">
        <Navbar />
      </header>
      <main className="main">
        {/* Hero */}
        <section className="hero"></section>
        {/* Cards */}
        <section className="cards"></section>
        
        <section className="about"><Aboutus /></section>
        {/* carousel */}
        <section className="carousel">
          <Carousel />
        </section>
      </main>
      {/* footer */}
      <footer className="footer">
        
        
      </footer>
    </div>
  );
};

export default Home;
