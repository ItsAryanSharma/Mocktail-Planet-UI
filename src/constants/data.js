import images from './images';

const wines = [
  {
    title: 'Virgin mojito',
    price: 'Rs.120',
    tags: '750 ml',
  },
  {
    title: 'Negroni mocktail',
    price: 'Rs.122',
    tags: '750 ml',
  },
  {
    title: 'Spiced pina colada mocktail',
    price: 'Rs.210',
    tags: '750 ml',
  },
  {
    title: 'Sidecar mocktail',
    price: 'Rs.110',
    tags: '750 ml',
  },
  {
    title: 'Summer cup mocktail',
    price: 'Rs.220',
    tags: '750 ml',
  },
];

const cocktails = [
  {
    title: 'Faux fizz',
    price: 'Rs.220',
    tags: '520 ml',
  },
  {
    title: "Dark mocktail",
    price: 'Rs.210',
    tags: '520 ml',
  },
  {
    title: 'Mint sparkle',
    price: 'Rs.110',
    tags: '520 ml',
  },
  {
    title: 'Fruit beer',
    price: 'Rs.120',
    tags: '520 ml',
  },
  {
    title: 'New York sour mocktail',
    price: 'Rs.340',
    tags: '520 ml',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'A++ Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
