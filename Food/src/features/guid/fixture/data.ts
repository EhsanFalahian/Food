import {GuideData, UseOne, UseThree, UseTwo} from '../type';

export const GuideItem: GuideData[] = [
  {
    id: 1,
    title: 'guid:firstOfAll',
    description: 'guid:youCanAdd',
  },
  {
    id: 2,
    title: 'guid:switchFriends',
    description: 'guid:youCanSwitch',
  },
  {
    id: 3,
    title: 'guid:cartEditing',
    description: 'guid:ifYouNeed',
  },
];

export const useOneData: UseOne[] = [
  {
    id: 1,
    name: 'guid:kudrat',
    active: false,
  },
  {
    id: 2,
    name: 'guid:jelenMalisheva',
    active: false,
  },
  {
    id: 3,
    name: 'guid:ivanGermanov',
    active: true,
  },
  {
    id: 4,
    name: 'guid:annaGettax',
    active: true,
  },
  {
    id: 5,
    name: 'guid:anedrtes',
    active: false,
  },
  {
    id: 6,
    name: 'guid:vick',
    active: false,
  },
];

export const useTwoData: UseTwo[] = [
  {
    id: 1,
    name: 'guid:igor',
    amount: 7.82,
  },
  {
    id: 2,
    name: 'guid:anna',
    amount: 18.91,
  },
];
export const useThreeData: UseThree[] = [
  {
    id: 1,
    name: 'guid:myOrder',
    amount: 5.2,
    order: 'guid:vegetarianCheese',
  },
  {
    id: 2,
    name: 'guid:kate',
    amount: 7.15,
    order: 'guid:sausages',
  },
];
