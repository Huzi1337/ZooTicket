import { ITicketPurchaseFormData, ItemData } from "../../assets/types";
import ListItem from "../ListItem";
import { NumberInput } from "@mantine/core";

import "./PickTicketType.scss";
import { UseFormReturnType } from "@mantine/form";
import dayjs from "dayjs";

type PickTicketProps = {
  items: [string, ItemData][];
  form: UseFormReturnType<ITicketPurchaseFormData>;
};

const PickTicketType = ({
  items,
  form,
  form: {
    values: { date },
  },
}: PickTicketProps) => {
  return (
    <>
      <h6>{dayjs(date).format("D MMMM YYYY")}</h6>
      {items.map((ticket, key) => (
        <div key={key} className="purchaseForm__ticketInputContainer">
          <ListItem
            item={ticket[1].type}
            price={ticket[1].price}
            isDark={key % 2 === 0}
            key={key}
          ></ListItem>
          <NumberInput
            {...form.getInputProps(`tickets.${ticket[0]}`)}
            placeholder="0"
            min={0}
            max={9}
          ></NumberInput>
        </div>
      ))}
    </>
  );
};

export default PickTicketType;
