import {CartItems, MyOrder} from '../type';

export const cartData: CartItems[] = [
  {
    id: 2,
    name: 'Kate',
    order: [
      {
        item: 'Sausages',
        amount: 7.15,
      },
      {
        item: 'Chief Burger',
        amount: 3.99,
      },
    ],
  },
  {
    id: 3,
    name: 'Igor',
    order: [
      {
        item: 'Sausages',
        amount: 7.15,
      },
      {
        item: 'Chief Burger',
        amount: 2.8,
      },
    ],
  },
];

export const myOrder: MyOrder[] = [
  {
    item: 'Vegetarian \nCheese',
    amount: 5.2,
  },
];
