import React from "react";
import "../css/Home.css";
import img from "../assets/images/hero18.jpeg";
import img1 from "../assets/images/asset 9.jpeg";
import img2 from "../assets/images/asset 10.jpeg";
import img3 from "../assets/images/asset 11.jpeg";
import img4 from "../assets/images/asset 12.jpeg";
import bg01 from "../assets/images/bg-01.jpg";
import bg02 from "../assets/images/bg-02.jpg";
import img14 from "../assets/images/asset 14.png";
function Home() {
  return (
    <div className="main">
      <div className="img">
        <img src={img} alt="img" className="w-100" />
        <div class="text">
          <h5>New collection</h5>
          <div className="thering mt-4">
            <h1>THE NEW</h1>
            <h1>RING</h1>
            <h1>SENSATION</h1>
          </div>
          <p className="lorem mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut
            <br />
            elit tellus,luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="button"
            aria-pressed="false"
            autocomplete="off"
          >
            SHOP NOW
          </button>
        </div>
      </div>
      <div className="popular-products text-center mt-5 h5">
        <span>Popular Products</span>
      </div>
      <div className="popular-products text-center mt-4 h1">
        <span>TRENDING NOW</span>
      </div>
      <hr />
      <div class="card-pro">
        <div class="card ms-4 mt-5">
          <img src={img1} alt="img1" />
          <div class="card-body">
            <h1 class="card-text">
              Product <br />
              Name 1
            </h1>
            <div class="pro">
              <del className="h5">$600.00</del>
              <h5>$495.00</h5>
            </div>
          </div>
        </div>

        <div class="card ms-4 mt-5">
          <img src={img2} alt="img2" />
          <div class="card-body">
            <h1 class="card-text">Product Name 2</h1>
            <div class="pro">
              <del className="h5">$600.00</del>
              <h5>$495.00</h5>
            </div>
          </div>
        </div>

        <div class="card ms-4 mt-5">
          <img src={img3} alt="img3" />
          <div class="card-body">
            <h1 class="card-text">Product Name 3</h1>
            <div class="pro">
              <del className="h5">$600.00</del>
              <h5>$495.00</h5>
            </div>
          </div>
        </div>

        <div class="card ms-4 mt-5">
          <img src={img4} alt="img4" />
          <div class="card-body">
            <h1 class="card-text">Product Name 4</h1>
            <div class="pro">
              <del className="h5">$600.00</del>
              <h5>$495.00</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="popular-products text-center mt-5 h5 ">
        <span>Shop</span>
      </div>
      <div className="popular-products text-center mt-4 h1">
        <span>BEST SELLING</span>
      </div>
      <hr />
      <div class="card-pro">
        <div class="card ms-4 mt-5">
          <img src={img1} alt="img1" />
          <div class="card-body">
            <h1 class="card-text">
              Product <br />
              Name 1
            </h1>
            <div class="pro">
              <del className="h5">$600.00</del>
              <h5>$495.00</h5>
            </div>
          </div>
        </div>

        <div class="card ms-4 mt-5">
          <img src={img2} alt="img2" />
          <div class="card-body">
            <h1 class="card-text">Product Name 2</h1>
            <div class="pro">
              <del className="h5">$600.00</del>
              <h5>$495.00</h5>
            </div>
          </div>
        </div>

        <div class="card ms-4 mt-5">
          <img src={img3} alt="img3" />
          <div class="card-body">
            <h1 class="card-text">Product Name 3</h1>
            <div class="pro">
              <del className="h5">$600.00</del>
              <h5>$495.00</h5>
            </div>
          </div>
        </div>

        <div class="card ms-4 mt-5">
          <img src={img4} alt="img4" />
          <div class="card-body">
            <h1 class="card-text">Product Name 4</h1>
            <div class="pro">
              <del className="h5">$600.00</del>
              <h5>$495.00</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="main-pieces">
        <div className="unique_pieces">
          <span className="h6">Unique pieces</span>
          <h1 className="mt-4">
            BE <br />
            ALWAYS
            <br />
            ON
            <br />
            TREND
          </h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit.
            <br /> Ut elit tellus, luctus nec <br /> ullamcorper mattis,
            pulvinar dapibus leo.
          </p>
          <button
            type="button"
            className="btn btn-primary"
            data-toggle="button"
            aria-pressed="false"
            autocomplete="off"
          >
            SHOP NOW
          </button>
        </div>
        <div className="image_gold">
          <div class="bg2">
            <img src={bg02} alt="bg02"></img>
          </div>
          <div class="bg1">
            <img src={bg01} alt="bg01" />
          </div>
        </div>
      </div>
      <div class="best-in-business">
        <span>best in business</span>
        <h1 className="mt-3">Why choose us</h1>
        <h5 className="mt-3">
          Cras malesuada dolor sit amet est egestas ullamcorper. Nullam in
          tortor mi. Maecenas vulputate libero
        </h5>
      </div>
      <hr />
      <div class="doom">
        <div class="big-discounts">
          <img src={img14} alt="img14" />
          <h3>Big Discounts</h3>
          <p>
            Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci
            viverra, cursus justo.
          </p>
        </div>

        <div class="big-discounts">
          <img src={img14} alt="img14" />
          <h3>Big Discounts</h3>
          <p>
            Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci
            viverra, cursus justo.
          </p>
        </div>

        <div class="big-discounts">
          <img src={img14} alt="img14" />
          <h3>Big Discounts</h3>
          <p>
            Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci
            viverra, cursus justo.
          </p>
        </div>

        <div class="big-discounts">
          <img src={img14} alt="img14" />
          <h3>Big Discounts</h3>
          <p>
            Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci
            viverra, cursus justo.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Home;
