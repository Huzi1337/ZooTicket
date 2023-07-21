import { useInView } from "react-intersection-observer";
import { ANIMATIONS } from "../../assets/data";
import "./Section.scss";

type Props = {
  title: string;
  subTitle: string;
  img: string;
};

const Section = ({ title, subTitle, img }: Props) => {
  const sectionSlidesRight = img === "eagle" || img === "crab";
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`landingPage__section ${
        inView
          ? ANIMATIONS.slideShow
          : sectionSlidesRight
          ? ANIMATIONS.slideRight
          : ANIMATIONS.slideLeft
      }`}
    >
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
