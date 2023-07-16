import { transformLabel } from "../utils/transformLabel";

import "./Footer.scss";

const SITES = {
  visitUs: ["ticketsInfo", "buyTickets", "map", "planYourDay", "facilities"],
  education: ["freelessons", "forSchool", "materials", "onlineLessons"],
  animals: ["meetTheAnimals", "animalGenerator", "reproductiveProgram"],
  attraction: ["restaurants", "train", "playgrounds", "forParents"],
  aboutUs: ["aboutOurZoo", "history", "values", "news", "people", "careers"],
  contact: ["location", "office", "phone", "mail"],
  supportUs: ["partnerWithUs", "donate", "leaveAndLegacy"],
  socialMedia: ["twitter", "facebook", "instagram"],
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__sectionRow">
        {Object.entries(SITES).map((section, key) => (
          <div key={key} className="footer__sectionCol">
            <h4 key={key}>{transformLabel(section[0])}</h4>
            {section[1].map((subSection, key) => (
              <h6 key={key}>{transformLabel(subSection)}</h6>
            ))}
          </div>
        ))}
      </div>
      <hr></hr>
    </div>
  );
};
export default Footer;
