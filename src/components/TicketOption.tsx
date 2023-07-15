import Card from "./Card";
import ListItem from "./ListItem";

import { ItemData } from "../assets/types";

import "./TicketOption.scss";

interface Props {
  title: string;
  items: ItemData[];
}

const TicketOption = ({ title, items }: Props) => {
  return (
    <Card>
      <h2>{title}</h2>
      {items.map((item, key) => {
        return (
          <ListItem
            item={item.type}
            price={item.price}
            isDark={key % 2 === 0 ? true : false}
          ></ListItem>
        );
      })}
    </Card>
  );
};

export default TicketOption;
