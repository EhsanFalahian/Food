export type CartItems = {
  id: number;
  name: string;
  order: {item: string; amount: number}[];
};
export type MyOrder = {item: string; amount: number};

export type CheckOutType = {
  id: number;
  name: string;
  total: number;
  accept: boolean;
};

export type AddressType = {
  id: number;
  title: string;
  address: string;
};
export type PayingType = {
  id: number;
  title: string;
  address: string;
};
