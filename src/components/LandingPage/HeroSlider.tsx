import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.scss";
import "slick-carousel/slick/slick.scss";
import "./HeroSlider.scss";

const HeroSlider = () => {
  return (
    <Slider dots={true} arrows={true}>
      <div>
        <div className="landingPage__header__container">
          <img src="/assets/landingPage/bear.png" className="bear" />
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
