import { ItemData } from "../../assets/types";
import ListItem from "../ListItem";
import { NumberInput } from "@mantine/core";

import "./PickTicketType.scss";

type PickTicketProps = {
  items: ItemData[];
};

const PickTicketType = ({ items }: PickTicketProps) => {
  return (
    <>
      <h6>9 June 2023</h6>
      {items.map((ticket, key) => (
        <div key={key} className="purchaseForm__ticketInputContainer">
          <ListItem
            item={ticket.type}
            price={ticket.price}
            isDark={key % 2 === 0}
            key={key}
          ></ListItem>
          <NumberInput min={0} max={9}></NumberInput>
        </div>
      ))}
    </>
  );
};

export default PickTicketType;
