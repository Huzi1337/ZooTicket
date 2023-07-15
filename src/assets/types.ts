export type ItemData = {
  price: number;
  type: string;
};

export type TicketOptionsData = {
  membershipsY: { [key: string]: ItemData };
  tickets: { [key: string]: ItemData };
};
