import "./Section.scss";

type Props = {
  title: string;
  subTitle: string;
  img: string;
};

const Section = ({ title, subTitle, img }: Props) => {
  return (
    <div className="landingPage__section">
      <div className="landingPage__title">
        <h1>{title}</h1>
        <div className="row">
          <h3 className="row">
            {subTitle}
            <div className="arrowRight"></div>
          </h3>
        </div>
      </div>
      <img className={img} src={`/assets/landingPage/${img}.png`}></img>
    </div>
  );
};

export default Section;
