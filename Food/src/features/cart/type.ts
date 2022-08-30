export type CartItems = {
  id: number;
  name: string;
  order: {item: string; amount: number}[];
};
export type MyOrder = {item: string; amount: number};
