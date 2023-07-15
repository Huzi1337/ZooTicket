export type ItemData = {
  price: number;
  type: string;
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

export interface IVisitUsData extends ITicketOptionsData, IGridItemData {}
