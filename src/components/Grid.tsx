import { GridItemContent } from "../assets/types";
import GridItem from "./GridItem";

import "./Grid.scss";
import SectionTitle from "./SectionTitle";
import { useInView } from "react-intersection-observer";

type Props = {
  title: string;
  items: GridItemContent[];
};

const Grid = ({ title, items }: Props) => {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className="grid__container">
      <SectionTitle title={title}></SectionTitle>
      <div className="grid__itemsContainer">
        {items.map((item, key) => {
          return (
            <GridItem isVisible={inView} content={item} key={key}></GridItem>
          );
        })}
      </div>
    </div>
  );
};
export default Grid;
