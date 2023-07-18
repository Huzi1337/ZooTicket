import { UseFormReturnType } from "@mantine/form";
import { ITicketPurchaseFormData, ItemData } from "../../assets/types";
import "./PurchaseComplete.scss";
import dayjs from "dayjs";
import calculateTotalCost from "../../utils/calculateTotalPrice";

type Props = {
  form: UseFormReturnType<ITicketPurchaseFormData>;
  data: ItemData[];
};

const PurchaseComplete = ({
  form: {
    values: { tickets, date },
  },
  data,
}: Props) => {
  const totalCost = calculateTotalCost(data, tickets);
  return (
    <div className="purchaseComplete__container">
      <h3>Purchase Completed</h3>
      <img src="/assets/ticketPurchase/complete.svg"></img>
      <h4>
        Tickets (
        {Object.values(tickets).reduce(
          (sum, currentValue) => sum + currentValue
        )}
        ) - {dayjs(date).format("D MMMM YYYY")}
      </h4>
      {Object.values(tickets).map((numberOfTickets, key) =>
        numberOfTickets > 0 ? (
          <h6>
            {numberOfTickets +
              "x " +
              data[key].type +
              `(${data[key].price}PLN)`}{" "}
          </h6>
        ) : null
      )}

      <div className="purchaseComplete__totalCost">
        <h4>Total</h4>
        <h4>{totalCost} PLN</h4>
      </div>
    </div>
  );
};
export default PurchaseComplete;
