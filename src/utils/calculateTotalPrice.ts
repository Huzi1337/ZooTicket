import { ItemData } from "../assets/types";

const calculateTotalCost = (
  data: ItemData[],
  tickets: { [key: string]: number }
) =>
  Object.values(tickets).reduce(
    (totalCost, numberOfTickets, index) =>
      (totalCost += numberOfTickets * data[index].price)
  );

export default calculateTotalCost;
