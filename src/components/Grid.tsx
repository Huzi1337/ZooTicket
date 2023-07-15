import { GridItemContent } from "../assets/types";
import GridItem from "./GridItem";

import "./Grid.scss";

type Props = {
  title: string;
  items: GridItemContent[];
};

const Grid = ({ title, items }: Props) => {
  return (
    <div className="grid__container">
      <h2>{title}</h2>
      <hr></hr>
      <div className="grid__itemsContainer">
        {items.map((item, key) => {
          return <GridItem content={item} key={key}></GridItem>;
        })}
      </div>
    </div>
  );
};
export default Grid;
