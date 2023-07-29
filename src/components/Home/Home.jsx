import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <main className="container-slider">
      <section className="home-slider">
        <div className="home-slider__item">
          <img
            src="https://i.imgur.com/D8WncRW.png"
            alt="Slide 1"
            className="home-slider__item--desktop"
          />
          <img
            src="https://i.imgur.com/pGhTUPF.png"
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
            INFLUENCED BY MUSIC AND
            <span>URBAN ART</span>
          </h2>
        </div>
      </div>

      <section className="cards-container">
        <div className="card-box">
          <div className="card-item">
            <div className="box-up">
              <img
                className="img"
                height="250px"
                src="http://code.slicecrowd.com/labs/4/images/t-shirt.png"
                alt=""
              />
              <div className="img-info">
                <div className="info-inner">
                  <span className="p-name">POLERA TEE</span>
                  <span className="p-company">PURPLE</span>
                </div>
                <div className="a-size">
                  AVAILABLE SIZES: <span className="size">S , M , L , XL</span>
                </div>
              </div>
            </div>

            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner"></div>
              </div>

              <a className="cart" href="#">
                <span className="price">$120</span>
                <span className="add-to-cart">
                  <span className="txt">Add in cart</span>
                </span>
              </a>
            </div>
          </div>

          <div className="card-item">
            <div className="box-up">
              <img
                className="img"
                height="250px"
                src="http://code.slicecrowd.com/labs/4/images/t-shirt.png"
                alt=""
              />
              <div className="img-info">
                <div className="info-inner">
                  <span className="p-name">POLERA TEE</span>
                  <span className="p-company">PURPLE</span>
                </div>
                <div className="a-size">
                  AVAILABLE SIZES: <span className="size">S , M , L , XL</span>
                </div>
              </div>
            </div>

            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner"></div>
              </div>

              <a className="cart" href="#">
                <span className="price">$120</span>
                <span className="add-to-cart">
                  <span className="txt">Add in cart</span>
                </span>
              </a>
            </div>
          </div>
          <div className="card-item">
            <div className="box-up">
              <img
                className="img"
                height="250px"
                src="http://code.slicecrowd.com/labs/4/images/t-shirt.png"
                alt=""
              />
              <div className="img-info">
                <div className="info-inner">
                  <span className="p-name">POLERA TEE</span>
                  <span className="p-company">PURPLE</span>
                </div>
                <div className="a-size">
                  AVAILABLE SIZES: <span className="size">S , M , L , XL</span>
                </div>
              </div>
            </div>

            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner"></div>
              </div>

              <a className="cart" href="#">
                <span className="price">$120</span>
                <span className="add-to-cart">
                  <span className="txt">Add in cart</span>
                </span>
              </a>
            </div>
          </div>
          <div className="card-item">
            <div className="box-up">
              <img
                className="img"
                height="250px"
                src="http://code.slicecrowd.com/labs/4/images/t-shirt.png"
                alt=""
              />
              <div className="img-info">
                <div className="info-inner">
                  <span className="p-name">POLERA TEE</span>
                  <span className="p-company">PURPLE</span>
                </div>
                <div className="a-size">
                  AVAILABLE SIZES: <span className="size">S , M , L , XL</span>
                </div>
              </div>
            </div>

            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner"></div>
              </div>

              <a className="cart" href="#">
                <span className="price">$120</span>
                <span className="add-to-cart">
                  <span className="txt">Add in cart</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export { Home };
