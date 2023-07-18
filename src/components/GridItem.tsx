import { GridItemContent } from "../assets/types";

import "./GridItem.scss";

type Props = {
  content: GridItemContent;
  isVisible: boolean;
};

const GridItem = ({
  content: { title, imgURL, description },
  isVisible,
}: Props) => {
  return (
    <div
      className={`gridItem__container ${
        isVisible ? "animation__slideShow" : "animation__slideRightHidden"
      }`}
    >
      <img src={imgURL}></img>
      <h3>{title}</h3>
      <h4>{description}</h4>
    </div>
  );
};
export default GridItem;
