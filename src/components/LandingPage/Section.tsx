import { useInView } from "react-intersection-observer";
import { ANIMATIONS } from "../../assets/data";
import "./Section.scss";
import { useEffect, useState } from "react";

type Props = {
  title: string;
  subTitle: string;
  img: string;
};

const Section = ({ title, subTitle, img }: Props) => {
  const sectionSlidesRight = img === "eagle" || img === "crab";
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    const image = new Image();
    image.src = `/assets/landingPage/${img}.png`;
    image.onload = () => {
      console.log("loaded");
      setIsImgLoaded(true);
    };
  }, []);
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
      <div
        className="imgWrapper"
        style={
          isImgLoaded
            ? {}
            : {
                filter: "blur(5px)",
                backgroundImage: `url(/assets/landingPage/small/${img}.png)`,
              }
        }
      >
        <img
          className={img + (isImgLoaded ? " visible" : " hidden")}
          src={`/assets/landingPage/${img}.png`}
        ></img>
      </div>
    </div>
  );
};

export default Section;
