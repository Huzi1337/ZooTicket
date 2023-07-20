import "./Sponsors.scss";

const SPONSORS = [
  "apple",
  "britishAirlines",
  "man",
  "snapchat",
  "hulu",
  "redux",
];

const Sponsors = () => {
  return (
    <div className="landingPage__sponsors">
      {SPONSORS.map((sponsor, key) => (
        <div className={`sponsor ${sponsor}`} key={key} />
      ))}
    </div>
  );
};

export default Sponsors;
