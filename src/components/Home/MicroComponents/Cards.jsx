import React from "react";

const Cards = (props) => {
  return (
    <div class="posi">
      <div class="container page-wrapper">
        <div class="page-inner">
          <div class="row">
            <div class="el-wrapper">
              <div class="box-up">
                <img
                  class="img"
                  height="250px"
                  src="https://secureservercdn.net/72.167.241.46/r5t.b88.myftpupload.com/wp-content/uploads/2021/09/CORTAVIENTO-MORADO-SIN-PITA-AFUERA-450x338.jpg"
                  alt=""
                />
                <div class="img-info">
                  <div class="info-inner">
                    <span class="p-name">POLERA TEE</span>
                    <span class="p-company">PURPLE</span>
                  </div>
                  <div class="a-size">
                    AVAILABLE SIZES: <span class="size">S , M , L , XL</span>
                  </div>
                </div>
              </div>

              <div class="box-down">
                <div class="h-bg">
                  <div class="h-bg-inner"></div>
                </div>

                <a class="cart" href="#">
                  <span class="price">$120</span>
                  <span class="add-to-cart">
                    <span class="txt">Add in cart</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Cards };
