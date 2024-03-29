import React from "react";
import Fade from "react-reveal/Fade";

import ImageHero from "assets/images/img-hero.jpg";
import ImageHero_ from "assets/images/img-hero-frame.jpg";

import Button from "elements/Button";

import numberFormat from "utils/formatNumber";
export default function Hero(props) {
  //otomatis scroll ke bawah. sertakan refMostPicked dari LandingPage
  function showMostPicked() {
    window.scrollTo({
      // function auto scroll. - 30 berarti sisakan -30 px dari bagian atas ref
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <Fade bottom>
      <section className="container pt-4">
        <div className="row align-items-center">
          {/* membagi 2 antara hero dan hero image */}
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="font-weight-bold line-height-1 mb-3">
              Forget Busy Work,
              <br />
              Start Next Vacation
            </h1>
            <p
              className="mb-4 font-weight-light text-gray-500 w-75"
              style={{ lineHeight: "170%" }}
            >
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <Button
              // x berarti left and right di boostrap
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>

            <div className="row " style={{ marginTop: 80 }}>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  src="images/icon-traveler.svg"
                  alt={`${props.data.travelers}`}
                  width="36"
                  height="36"
                />
                <h6 className="mt-3">
                  {numberFormat(props.data.travelers)}
                  <span className="text-gray-500 font-weight-light">
                    travelers
                  </span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  src="images/icon-traveler.svg"
                  alt={`${props.data.treasures}`}
                  width="36"
                  height="36"
                />
                <h6 className="mt-3">
                  {numberFormat(props.data.treasures)}
                  <span className="text-gray-500 font-weight-light">
                    cities
                  </span>
                </h6>
              </div>
              <div className="col-auto">
                <img
                  src="images/icon-cities.svg"
                  alt={`${props.data.cities}`}
                  width="36"
                  height="36"
                />
                <h6 className="mt-3">
                  {numberFormat(props.data.cities)}
                  <span className="text-gray-500 font-weight-light">
                    cities
                  </span>
                </h6>
              </div>
            </div>
          </div>
          {/* hero image */}
          <div className="col-6 pl-5">
            <div style={{ width: 520, height: 410 }}>
              <img
                src={ImageHero}
                alt="room with couches"
                className="img-fluid position-absolute"
                style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
              />
              <img
                src={ImageHero_}
                alt="room with couches frame"
                className="img-fluid position-absolute"
                style={{ margin: "0 -15px -15px 0" }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
