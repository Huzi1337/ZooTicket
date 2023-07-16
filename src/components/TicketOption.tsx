import Card from "./Card";
import ListItem from "./ListItem";
import { Button } from "@mantine/core";

import { ItemData } from "../assets/types";

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
      <Button
        styles={() => ({
          root: {
            backgroundColor: "#179e76",
            boxShadow: "0px 0px 12px 0px rgba(49, 49, 49, 0.30)",
            borderRadius: "16px",
            padding: "10px 38px",
            marginTop: "auto",
          },
        })}
        onClick={onClick}
      >
        {buttonText}
      </Button>
    </Card>
  );
};

export default TicketOption;
