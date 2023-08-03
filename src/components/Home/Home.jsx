import React from "react";
import {
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiFacebookBoxLine,
  RiGithubLine,
} from "react-icons/ri";
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
            src="https://i.imgur.com/JErqxd4.png"
            alt="Slide 1"
            className="home-slider__item--mobile"
          />
          <img
            src="https://i.imgur.com/pGhTUPF.png"
            alt="Slide 2"
            className="home-slider__item--desktop"
          />
          <img
            src="https://i.imgur.com/dRfd3bQ.png"
            alt="Slide 1"
            className="home-slider__item--mobile"
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
        </div>
      </section>

      <div className="divisor"></div>

      <section className="hero-container">
        <div className="hero">
          <div className="hero-image">
            <img
              className="hero-img"
              src="https://i.imgur.com/uETianM.png"
              alt=""
            />
          </div>
          <div className="hero-description">
            <h3>
              Inspired by the vibrant cultures of the concrete jungle, our{" "}
              <span>streetwear collection</span> is a canvas for
              self-expression. Dare to stand out, dare to redefine what it means
              to be <span>stylish.</span>
            </h3>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-container">
          <div className="footer-box-up">
            <div className="column">
              <img src="https://i.imgur.com/4snADKo.jpg" alt="" />
            </div>
            <div className="column">
              Products
              <ul>
                <li>T-Shirts</li>
                <li>Hoodies</li>
                <li>Pants</li>
                <li>Jewelry</li>
                <li>Shoes</li>
              </ul>
            </div>
            <div className="column">
              Gallery
              <ul>
                <li>January</li>
                <li>March</li>
                <li>May</li>
                <li>July</li>
              </ul>
            </div>
            <div className="column">
              Company
              <ul>
                <li>DRJTools</li>
                <li>DRJFit</li>
                <li>DRJSupps</li>
              </ul>
            </div>
            <div className="column">
              Resources
              <ul>
                <li>Resources 1</li>
                <li>Resources 2</li>
                <li>Resources 3</li>
              </ul>
            </div>
          </div>
          <div className="footer-box-down">
            <div className="section-a">David Rodriguez Jave</div>
            <div className="section-b">
              <RiInstagramLine />
              <RiLinkedinBoxLine />
              <RiFacebookBoxLine />
              <RiGithubLine />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export { Home };
