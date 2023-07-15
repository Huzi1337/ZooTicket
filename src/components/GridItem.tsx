import { GridItemContent } from "../assets/types";

import "./GridItem.scss";

type Props = {
  content: GridItemContent;
};

const GridItem = ({ content: { title, imgURL, description } }: Props) => {
  return (
    <div className="gridItem__container">
      <img src={imgURL}></img>
      <h3>{title}</h3>
      <h4>{description}</h4>
    </div>
  );
};
export default GridItem;
