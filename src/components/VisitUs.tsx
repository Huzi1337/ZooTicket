import useFetch from "../hooks/fetch";
import { API_URL } from "../assets/data";

import TicketOption from "./TicketOption";

import { TicketOptionsData } from "../assets/types";

import "./VisitUs.scss";

const VisitUs = () => {
  const { isLoading, error, data } = useFetch(API_URL);

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>An error has occured. {error}</h1>;

  if (data)
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
        <div>
          <TicketOption
            title="Ticket Prices"
            items={Object.values((data as TicketOptionsData).tickets)}
          ></TicketOption>
          <TicketOption
            title="Annual Membership Prices"
            items={Object.values((data as TicketOptionsData).membershipsY)}
          ></TicketOption>
        </div>
        <div>Zoomap</div>
        <div>Uselessgrid</div>
      </>
    );
};

export default VisitUs;
