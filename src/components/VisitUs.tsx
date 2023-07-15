import useFetch from "../hooks/fetch";
import { API_URL } from "../assets/data";

import TicketOption from "./TicketOption";

import { IVisitUsData } from "../assets/types";

import "./VisitUs.scss";
import Grid from "./Grid";

const SECTION_TITLES = [
  "Plan Your Day with Us",
  "Facilities, Services and Accessibility",
];

const VisitUs = () => {
  const { isLoading, error, data } = useFetch(API_URL);

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>An error has occured. {error}</h1>;

  if (data) {
    console.log(data);
    return (
      <>
        <div className="visitUs__headScreen">
          <h1>VISIT US!</h1>
          <h4>
            We offer two exciting variations of tickets to make your visit a
            memorable experience!{" "}
          </h4>

          <h3>General Entry: a single-day adventure</h3>
          <h3> Annual Pass: All year round</h3>
        </div>
        <div className="visitUs__ticketOptions">
          <TicketOption
            title="Ticket Prices"
            items={Object.values((data as IVisitUsData).tickets).sort(
              (a, b) => a.price - b.price
            )}
            buttonText="BUY A TICKET"
          ></TicketOption>
          <TicketOption
            title="Annual Membership Prices"
            items={Object.values((data as IVisitUsData).membershipsY).sort(
              (a, b) => a.price - b.price
            )}
            buttonText="BUY A MEMBERSHIP"
          ></TicketOption>
        </div>
        <div className="visitUs__zooMap">
          <h2>Interactive Zoo Map</h2>
          <img src="/assets/visitUs/map.png"></img>
          <h4>
            Discover the essence of our Zoo through our interactive map!
            Navigate through our vast and captivating grounds, showcasing a
            diverse range of animal habitats and exciting exhibits. The map
            provides a convenient guide to help you plan your visit, ensuring
            you don't miss any of our must-see attractions. Explore the
            pathways, locate feeding times, and find yourself captivated by the
            beauty of our animal residents.
          </h4>
        </div>
        {Object.values((data as IVisitUsData).content)
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
  }
};

export default VisitUs;
