export type ItemData = {
  price: number;
  type: string;
};

export type PriceData = {
  [key: string]: ItemData;
};

export interface ITicketOptionsData {
  membershipsY: { [key: string]: ItemData };
  tickets: { [key: string]: ItemData };
}

export type GridItemContent = {
  imgURL: string;
  title: string;
  description: string;
};

export interface IGridItemData {
  content: {
    planUrDay: { [key: string]: GridItemContent };
    accessibility: { [key: string]: GridItemContent };
  };
}

export interface IPaymentInfo {
  cardProvider: string;
  name: string;
  cardNumber: string;
  validThru: string;
  cvv: string;
}

export interface ITicketPurchaseFormData extends IPaymentInfo {
  date: Date;
  tickets: { [key: string]: number };
}

export interface IVisitUsData extends ITicketOptionsData, IGridItemData {}
