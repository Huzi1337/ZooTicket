import { GridItemContent } from "../assets/types";
import GridItem from "./GridItem";

import "./Grid.scss";
import SectionTitle from "./SectionTitle";

type Props = {
  title: string;
  items: GridItemContent[];
};

const Grid = ({ title, items }: Props) => {
  return (
    <div className="grid__container">
      <SectionTitle title={title}></SectionTitle>
      <div className="grid__itemsContainer">
        {items.map((item, key) => {
          return <GridItem content={item} key={key}></GridItem>;
        })}
      </div>
    </div>
  );
};
export default Grid;
