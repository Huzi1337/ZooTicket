import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.scss";
import "slick-carousel/slick/slick.scss";
import "./HeroSlider.scss";
import { useEffect, useState } from "react";

const HeroSlider = () => {
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = "/assets/landingPage/bear.png";
    image.onload = () => setIsImgLoaded(true);
  });

  return (
    <Slider dots={true} arrows={true}>
      <div>
        <div className="landingPage__header__container">
          <div className={"imgWrapper" + (isImgLoaded ? " loaded" : "")}>
            <img src="/assets/landingPage/bear.png" className="bear" />
          </div>
          <div className="landingPage__title head">
            <h1>IS THAT A GRIZZLY?</h1>
            <div className="row">
              <h3>See them first!</h3>
              <div className="arrowRight"></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="landingPage__header__container">
          <img src="/assets/landingPage/bear.png" className="bear" />
          <div className="landingPage__title">
            <h1>IS THAT A GRIZZLY?</h1>
            <div className="row">
              <h3>See them first!</h3>
              <div className="arrowRight"></div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default HeroSlider;
