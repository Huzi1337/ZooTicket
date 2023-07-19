import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.scss";
import "slick-carousel/slick/slick.scss";
import "./LandingPage.scss";
import { Button, TextInput } from "@mantine/core";

const INFO_BUTTONS_CONTENT = [
  { title: "Open Today", subTitle: "8:00am - 7:00pm" },
  { title: "Location", subTitle: "Bus and Parking" },
  { title: "What is available?", subTitle: "Facilities" },
  { title: "BUY A TICKET", subTitle: "visit info" },
];

const SECTIONS = [
  { title: "VISIT US", subTitle: "All the info is here!", img: "eagle" },
  { title: "LEARN FROM US!", subTitle: "Education... wait, what?", img: "owl" },
  { title: "ANIMALS IN OUR ZOO", subTitle: "See them all!", img: "crab" },
  { title: "MORE?", subTitle: "Other attractions!", img: "leopard" },
];

const SPONSORS = [
  "apple",
  "britishAirlines",
  "man",
  "snapchat",
  "hulu",
  "redux",
];

const LandingPage = () => {
  return (
    <>
      <Slider>
        <div>
          <div className="landingPage__header__container">
            <div className="bear"></div>
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
            <div className="bear"></div>
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
      <div className="landingPage__infoButtonContainer">
        {INFO_BUTTONS_CONTENT.map((info, key) => (
          <Button key={key}>
            <h4>{info.title}</h4>
            <h4>{info.subTitle}</h4>
          </Button>
        ))}
      </div>
      <div className="landingPage__body">
        {SECTIONS.map((section, key) => (
          <div key={key} className="landingPage__section">
            <div className="landingPage__title">
              <h1>{section.title}</h1>
              <div className="row">
                <h3>{section.subTitle}</h3>
                <div className="arrowRight"></div>
              </div>
            </div>
            <div className={section.img}></div>
          </div>
        ))}
      </div>
      <div className="landingPage__aboutUs">
        <div className="landingPage__title">
          <h1>About Us</h1>
          <div className="row">
            <h3>What we can do you can too!</h3>
            <div className="arrowRight"></div>
          </div>
        </div>
      </div>
      <div className="landingPage__newsletter">
        <div className="lion"></div>
        <div className="landingPage__newsletter__info">
          <h2>Join our newsletter!</h2>
          <div className="landingPage__newsletter__row">
            <TextInput></TextInput>
            <Button>Sign up</Button>
          </div>
        </div>
      </div>
      <div className="landingPage__sponsors">
        {SPONSORS.map((sponsor, key) => (
          <div className={sponsor} key={key}></div>
        ))}
      </div>
    </>
  );
};

export default LandingPage;
