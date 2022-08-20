import React from "react";
import { About } from "../components/about/About";
import Carousel from "./../components/carousel/Carousel";
import "./Layout.css";

function Layout() {
  return (
    <div className="container">
      {/* logo, navbar y carrito de compras */}
      <header className="header">header</header>
      <main className="main">
        {/* Hero */}
        <section className="hero">Hero</section>
        {/* Cards */}
        <section className="cards">Cards</section>
        {/* About */}
        <section className="about"><About/></section>
        {/* carousel */}
        <section className="carousel">
          <Carousel />
        </section>
      </main>
      {/* footer */}
      <footer className="footer">
        {/* redes sociales */}
        <section className="social-network">redes sociales</section>
        {/* logo + menú desplegado */}
        <section className="complete-menu">menu desplegado</section>
      </footer>
    </div>
  );
}

export default Layout;
