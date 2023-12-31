import { useNavigate } from "react-router-dom";

import TicketOption from "../TicketOption";

import { IVisitUsData } from "../../assets/types";

import { useInView } from "react-intersection-observer";

import "./VisitUs.scss";
import Grid from "../Grid";
import { useEffect, useState } from "react";

const SECTION_TITLES = [
  "Plan Your Day with Us",
  "Facilities, Services and Accessibility",
];

type Props = {
  data: IVisitUsData;
};

const VisitUs = ({ data: { tickets, membershipsY, content } }: Props) => {
  const navigate = useNavigate();
  const { ref, inView } = useInView();
  const [isBgLoaded, setIsBgLoaded] = useState(false);

  useEffect(() => {
    const headerImg = new Image();
    headerImg.src = "/assets/visitUs/bg.png";
    headerImg.onload = () => setIsBgLoaded(true);
  }, []);

  const ticketClickHandler = () => {
    navigate("/ticket");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="visitUs__headScreen">
        <h1 className="slide-in-header">VISIT US!</h1>
        <h4 className="slide-in-header">
          We offer two exciting variations of tickets to make your visit a
          memorable experience!{" "}
        </h4>

        <h3 className="slide-in-header">
          General Entry: a single-day adventure
        </h3>
        <h3 className="slide-in-header"> Annual Pass: All year round</h3>
        <div className={"placeholder" + (isBgLoaded ? " hide" : "")}></div>
      </div>
      <div className="visitUs__ticketOptions">
        <TicketOption
          animation="slideRight"
          title="Ticket Prices"
          items={Object.values(tickets).sort((a, b) => a.price - b.price)}
          buttonText="BUY A TICKET"
          onClick={ticketClickHandler}
        ></TicketOption>
        <TicketOption
          animation="slideLeft"
          title="Annual Membership Prices"
          items={Object.values(membershipsY).sort((a, b) => a.price - b.price)}
          buttonText="BUY A MEMBERSHIP"
          onClick={() => {}}
        ></TicketOption>
      </div>
      <div
        ref={ref}
        className={`visitUs__zooMap ${
          inView ? "animation__fadeShow" : "animation__fadeHidden"
        }`}
      >
        <h2>Interactive Zoo Map</h2>
        <img src="/assets/visitUs/map.png"></img>
        <h4>
          Discover the essence of our Zoo through our interactive map! Navigate
          through our vast and captivating grounds, showcasing a diverse range
          of animal habitats and exciting exhibits. The map provides a
          convenient guide to help you plan your visit, ensuring you don't miss
          any of our must-see attractions. Explore the pathways, locate feeding
          times, and find yourself captivated by the beauty of our animal
          residents.
        </h4>
      </div>
      {Object.values(content)
        .reverse()
        .map((section, key) => {
          return (
            <Grid
              title={SECTION_TITLES[key]}
              items={Object.values(section)}
              key={key}
            ></Grid>
          );
        })}
    </>
  );
};

export default VisitUs;
