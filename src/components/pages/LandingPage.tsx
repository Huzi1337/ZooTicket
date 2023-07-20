import "./LandingPage.scss";
import { Button } from "@mantine/core";
import Sponsors from "../LandingPage/Sponsors";
import Newsletter from "../LandingPage/Newsletter";
import AboutUs from "../LandingPage/AboutUs";
import Section from "../LandingPage/Section";
import HeroSlider from "../LandingPage/HeroSlider";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

const INFO_BUTTONS_CONTENT = [
  { title: "Open Today", subTitle: "8:00am - 7:00pm" },
  { title: "Location", subTitle: "Bus and Parking" },
  { title: "What is available?", subTitle: "Facilities" },
  { title: "BUY A TICKET", subTitle: "visit info" },
];

const SECTIONS = [
  { title: "VISIT US", subTitle: "All the info is here!", img: "eagle" },
  { title: "LEARN FROM US!", subTitle: "Educate yourself!", img: "owl" },
  { title: "ANIMALS IN OUR ZOO", subTitle: "See them all!", img: "crab" },
  { title: "MORE?", subTitle: "Other attractions!", img: "leopard" },
];

const LandingPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  const buyTicketClickHandler = () => {
    navigate("/visitUs");
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Navbar>
        {innerWidth <= 768 && (
          <Button onClick={buyTicketClickHandler}>BUY A TICKET</Button>
        )}
      </Navbar>
      <HeroSlider></HeroSlider>
      <div className="landingPage__infoButtonContainer">
        {INFO_BUTTONS_CONTENT.map((info, key) =>
          !(windowWidth <= 768 && key >= 2) ? (
            <Button
              onClick={
                key === INFO_BUTTONS_CONTENT.length - 1
                  ? buyTicketClickHandler
                  : () => {}
              }
              key={key}
            >
              <h4>{info.title}</h4>
              <h4>{info.subTitle}</h4>
            </Button>
          ) : null
        )}
      </div>
      <div className="landingPage__body">
        {SECTIONS.map((section, key) => (
          <Section
            title={section.title}
            subTitle={section.subTitle}
            img={section.img}
            key={key}
          ></Section>
        ))}
      </div>
      <AboutUs></AboutUs>
      <Newsletter></Newsletter>
      <Sponsors></Sponsors>
    </>
  );
};

export default LandingPage;
