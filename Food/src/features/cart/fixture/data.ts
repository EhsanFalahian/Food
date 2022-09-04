import {
  AddressType,
  CartItems,
  CheckOutType,
  MyOrder,
  PayingType,
} from '../type';

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

export const checkOutData: CheckOutType[] = [
  {
    id: 1,
    name: 'Kate',
    total: 11.14,
    accept: true,
  },
  {
    id: 2,
    name: 'Igor',
    total: 5.2,
    accept: false,
  },
];
export const addressData: AddressType[] = [
  {
    id: 1,
    title: 'Work',
    address: 'Moscow, Perekhodnaya st. 1, b. 1...',
  },
  {
    id: 2,
    title: 'Home',
    address: 'Moscow, Verkhnuaya st. 14 - 421',
  },
];
export const payingData: PayingType[] = [
  {
    id: 1,
    title: 'Visa',
    address: '**** **** **** 6152',
  },
  {
    id: 2,
    title: 'Apple Pay',
    address: '**** **** **** 1867',
  },
];
