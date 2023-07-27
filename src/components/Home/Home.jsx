import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <main className="container-slider">
      <section className="home-slider">
        <div className="home-slider__item">
          <img
            src="https://i.imgur.com/NbldCD9.jpg"
            alt="Slide 1"
            className="home-slider__item--desktop"
          />
          <img
            src="https://i.imgur.com/9zTE8wf.jpg"
            alt="Slide 2"
            className="home-slider__item--desktop" 
          />
        </div>
        <button className="prev-btn">Anterior</button>
        <button className="next-btn">Siguiente</button>
      </section>
      <div className="container-title">
        <div className="first-title">
          <h2>
            LA MEJOR ROPA DE TRUX
            <span>EN DRJ STORE</span>
          </h2>
        </div>
      </div>
    </main>
  );
};

export { Home };
