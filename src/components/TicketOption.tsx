import Card from "./Card";
import ListItem from "./ListItem";
import { Button } from "@mantine/core";

import { ItemData } from "../assets/types";

import "./TicketOption.scss";

interface Props {
  title: string;
  items: ItemData[];
  buttonText: string;
  onClick: () => void;
}

const TicketOption = ({ title, items, buttonText, onClick }: Props) => {
  return (
    <Card>
      <h2>{title}</h2>
      {items.map((item, key) => {
        return (
          <ListItem
            item={item.type}
            price={item.price}
            isDark={key % 2 === 0 ? true : false}
            key={key}
          ></ListItem>
        );
      })}
      <Button className="ticketOption__button" onClick={onClick}>
        {buttonText}
      </Button>
    </Card>
  );
};

export default TicketOption;
