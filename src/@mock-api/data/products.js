import { SERVICE_URL } from "../../config";
import api from "../api";

const productsData = [
  {
    name: "Barmbrack",
    description: "Carrot cake wafer fruitcake pudding donut sweet.",
    sales: 985,
    stock: 68,
    category: "Whole Wheat",
    tag: "Done",
    check: "",
    date: "06.01.2020",
    createdDate: "2020-08-13T00:29:30.635Z",
    id: "5f34896a0d732737eb1c9d9d",
  },
  {
    name: "Bazin",
    description: "Oat cake chupa chups oat cake gummies pastry.",
    sales: 1279,
    stock: 247,
    category: "Sourdough",
    tag: "",
    check: "",
    date: "02.11.2020",
    createdDate: "2020-08-13T00:29:30.635Z",
    id: "5f34896a0d732737eb1c9d9e",
  },
  {
    name: "Bialy",
    description: "Sesame snaps topping chupa chups.",
    sales: 653,
    stock: 249,
    category: "Multigrain",
    tag: "",
    check: "",
    date: "15.02.2020",
    createdDate: "2020-08-13T00:29:30.636Z",
    id: "5f34896a0d732737eb1c9d9f",
  },
  {
    name: "Biscotti",
    description: "Cotton candy apple pie bonbon pastry soufflé dessert.",
    sales: 904,
    stock: 77,
    category: "Whole Wheat",
    tag: "",
    check: "",
    date: "26.03.2020",
    createdDate: "2020-08-13T00:29:30.636Z",
    id: "5f34896a0d732737eb1c9da0",
  },
  {
    name: "Boule",
    description: "Cotton candy gingerbread bear claw cake cookie lemon drops.",
    sales: 1007,
    stock: 162,
    category: "Sourdough",
    tag: "",
    check: "",
    date: "25.09.2020",
    createdDate: "2020-08-13T00:29:30.637Z",
    id: "5f34896a0d732737eb1c9da2",
  },
  {
    name: "Cholermüs",
    description: "Bear claw jelly beans marzipan gummi bears. ",
    sales: 1244,
    stock: 83,
    category: "Whole Wheat",
    tag: "Sale",
    check: "",
    date: "15.12.2020",
    createdDate: "2020-08-13T00:29:30.638Z",
    id: "5f34896a0d732737eb1c9da4",
  },
  {
    name: "Cornbread",
    description: "Cupcake dessert macaroon. ",
    sales: 2524,
    stock: 214,
    category: "Sourdough",
    tag: "",
    check: "",
    date: "18.03.2020",
    createdDate: "2020-08-13T00:29:30.639Z",
    id: "5f34896a0d732737eb1c9da5",
  },
  {
    name: "Crisp Bread",
    description: "Cotton candy marshmallow topping donut macaroon pie topping.",
    sales: 1398,
    stock: 75,
    category: "Whole Wheat",
    tag: "",
    check: "",
    date: "11.03.2020",
    createdDate: "2020-08-13T00:29:30.639Z",
    id: "5f34896a0d732737eb1c9da6",
  },
  {
    name: "Crumpet",
    description:
      "Tootsie roll jelly dessert topping chocolate cake donut fruitcake tiramisu.",
    sales: 1049,
    stock: 103,
    category: "Sourdough",
    tag: "",
    check: "",
    date: "15.01.2020",
    createdDate: "2020-08-13T00:29:30.639Z",
    id: "5f34896a0d732737eb1c9da7",
  },
  {
    name: "Damper",
    description: "Fruitcake caramels candy halvah bonbon cupcake.",
    sales: 779,
    stock: 195,
    category: "Multigrain",
    tag: "",
    check: "",
    date: "17.08.2020",
    createdDate: "2020-08-13T00:29:30.640Z",
    id: "5f34896a0d732737eb1c9da8",
  },
  {
    name: "Dorayaki",
    description:
      "Bonbon gummi bears topping jelly beans cookie dragée gummi bears tart.",
    sales: 1106,
    stock: 69,
    category: "Whole Wheat",
    tag: "",
    check: "",
    date: "17.01.2020",
    createdDate: "2020-08-13T00:29:30.640Z",
    id: "5f34896a0d732737eb1c9da9",
  },
  {
    name: "Farl",
    description: "Apple pie caramels croissant candy.",
    sales: 958,
    stock: 170,
    category: "Multigrain",
    tag: "",
    check: "",
    date: "14.12.2020",
    createdDate: "2020-08-13T00:29:30.640Z",
    id: "5f34896a0d732737eb1c9daa",
  },
  {
    name: "Flatbrød",
    description: "Toffee lollipop oat cake cheesecake.",
    sales: 377,
    stock: 114,
    category: "Sourdough",
    tag: "",
    check: "",
    date: "07.10.2020",
    createdDate: "2020-08-13T00:29:30.641Z",
    id: "5f34896a0d732737eb1c9dab",
  },
  {
    name: "Fougasse",
    description:
      "Pudding gummi bears ice cream cake sweet sesame snaps cupcake chocolate. ",
    sales: 2920,
    stock: 136,
    category: "Sourdough",
    tag: "",
    check: "",
    date: "13.08.2020",
    createdDate: "2020-08-13T00:29:30.641Z",
    id: "5f34896a0d732737eb1c9dac",
  },
  {
    name: "Himbasha",
    description:
      "Cookie chupa chups marzipan tiramisu cheesecake dragée fruitcake biscuit.",
    sales: 1112,
    stock: 305,
    category: "Multigrain",
    tag: "",
    check: "",
    date: "14.05.2020",
    createdDate: "2020-08-13T00:29:30.642Z",
    id: "5f34896a0d732737eb1c9dad",
  },
  {
    name: "Kalach",
    description: "Chocolate halvah cupcake.",
    sales: 401,
    stock: 38,
    category: "Sourdough",
    tag: "",
    check: "",
    date: "15.12.2020",
    createdDate: "2020-08-13T00:29:30.642Z",
    id: "5f34896a0d732737eb1c9dae",
  },
  {
    name: "Kifli",
    description: "Dessert chocolate caramels gummies.",
    sales: 291,
    stock: 130,
    category: "Multigrain",
    tag: "Sale",
    check: "",
    date: "27.08.2020",
    createdDate: "2020-08-13T00:29:30.642Z",
    id: "5f34896a0d732737eb1c9daf",
  },
  {
    name: "Kulcha",
    description: "Gummies marzipan lemon drops icing pudding.",
    sales: 545,
    stock: 180,
    category: "Whole Wheat",
    tag: "",
    check: "",
    date: "11.12.2020",
    createdDate: "2020-08-13T00:29:30.643Z",
    id: "5f34896a0d732737eb1c9db0",
  },
  {
    name: "Lángos",
    description: "Gummi bears topping jelly beans cookie dragée gummi bears.",
    sales: 2253,
    stock: 224,
    category: "Whole Wheat",
    tag: "Done",
    check: "",
    date: "20.10.2020",
    createdDate: "2020-08-13T00:29:30.644Z",
    id: "5f34896a0d732737eb1c9db1",
  },
  {
    name: "Lefse",
    description: "Tiramisu dessert sweet roll.",
    sales: 934,
    stock: 52,
    category: "Sourdough",
    tag: "",
    check: "",
    date: "11.10.2020",
    createdDate: "2020-08-13T00:29:30.645Z",
    id: "5f34896a0d732737eb1c9db2",
  },
  {
    name: "Mantou",
    description: "Marshmallow biscuit gingerbread brownie tootsie roll",
    sales: 592,
    stock: 276,
    category: "Multigrain",
    tag: "",
    check: "",
    date: "09.12.2020",
    createdDate: "2020-08-13T00:29:30.645Z",
    id: "5f34896a0d732737eb1c9db3",
  },
  {
    name: "Matzo",
    description:
      "Icing wafer tootsie roll cotton candy gummies chocolate bar liquorice.",
    sales: 203,
    stock: 191,
    category: "Sourdough",
    tag: "",
    check: "",
    date: "18.10.2020",
    createdDate: "2020-08-13T00:29:30.646Z",
    id: "5f34896a0d732737eb1c9db4",
  },
  {
    name: "Melonpan",
    description: "Topping bonbon cupcake caramels tiramisu.",
    sales: 693,
    stock: 146,
    category: "Sourdough",
    tag: "",
    check: "",
    date: "20.03.2020",
    createdDate: "2020-08-13T00:29:30.646Z",
    id: "5f34896a0d732737eb1c9db5",
  },
  {
    name: "Michetta",
    description:
      "Fruitcake pudding pudding jujubes dessert brownie gingerbread.",
    sales: 863,
    stock: 92,
    category: "Whole Wheat",
    tag: "",
    check: "",
    date: "25.11.2020",
    createdDate: "2020-08-13T00:29:30.647Z",
    id: "5f34896a0d732737eb1c9db6",
  },
  {
    name: "Mohnflesserl",
    description: "Tootsie roll pudding tootsie roll gummi bears apple.",
    sales: 555,
    stock: 111,
    category: "Whole Wheat",
    tag: "",
    check: "",
    date: "06.12.2020",
    createdDate: "2020-08-13T00:29:30.647Z",
    id: "5f34896a0d732737eb1c9db7",
  },
  {
    name: "Naan",
    description: "Pie ice cream I love halvah cake topping cake dragée.",
    sales: 994,
    stock: 21,
    category: "Multigrain",
    tag: "",
    check: "",
    date: "28.08.2020",
    createdDate: "2020-08-13T00:29:30.648Z",
    id: "5f34896a0d732737eb1c9db8",
  },
  {
    name: "Pan Dulce",
    description:
      "Halvah danish lollipop carrot cake caramels cookie fruitcake.",
    sales: 2061,
    stock: 224,
    category: "Sourdough",
    tag: "",
    check: "",
    date: "25.04.2020",
    createdDate: "2020-08-13T00:29:30.648Z",
    id: "5f34896a0d732737eb1c9db9",
  },
  {
    name: "Panbrioche",
    description:
      "Chupa chups jelly beans sesame snaps sweet roll dessert sweet.",
    sales: 1410,
    stock: 77,
    category: "Multigrain",
    tag: "",
    check: "",
    date: "29.11.2020",
    createdDate: "2020-08-13T00:29:30.648Z",
    id: "5f34896a0d732737eb1c9dba",
  },
  {
    name: "Pane Ticinese",
    description: "Dessert chupa chups brownie pie ice cream chocolate cake.",
    sales: 1323,
    stock: 39,
    category: "Whole Wheat",
    tag: "New",
    check: "",
    date: "11.07.2020",
    createdDate: "2020-08-13T00:29:30.649Z",
    id: "5f34896a0d732737eb1c9dbb",
  },
  {
    name: "Panettone",
    description: "Donut marzipan cake soufflé caramels.",
    sales: 219,
    stock: 291,
    category: "Multigrain",
    tag: "",
    check: "",
    date: "24.02.2020",
    createdDate: "2020-08-13T00:29:30.649Z",
    id: "5f34896a0d732737eb1c9dbc",
  },
  {
    name: "Paratha",
    description: "Dragée gingerbread sweet cake.",
    sales: 304,
    stock: 232,
    category: "Sourdough",
    tag: "",
    check: "",
    date: "07.11.2020",
    createdDate: "2020-08-13T00:29:30.650Z",
    id: "5f34896a0d732737eb1c9dbd",
  },
  {
    name: "Peg Bread",
    description:
      "Marshmallow sweet roll chocolate bar fruitcake jujubes chocolate.",
    sales: 416,
    stock: 65,
    category: "Multigrain",
    tag: "",
    check: "",
    date: "15.11.2020",
    createdDate: "2020-08-13T00:29:30.650Z",
    id: "5f34896a0d732737eb1c9dbe",
  },
  {
    name: "Pistolet",
    description:
      "Gingerbread bonbon gummies jelly-o sweet tiramisu muffin jelly.",
    sales: 1323,
    stock: 23,
    category: "Multigrain",
    tag: "",
    check: "",
    date: "08.12.2020",
    createdDate: "2020-08-13T00:29:30.651Z",
    id: "5f34896a0d732737eb1c9dc0",
  },
  {
    name: "Rewena",
    description: "Dessert sesame snaps candy canes toffee oat cake.",
    sales: 2383,
    stock: 309,
    category: "Multigrain",
    tag: "",
    check: "",
    date: "05.10.2020",
    createdDate: "2020-08-13T00:29:30.651Z",
    id: "5f34896a0d732737eb1c9dc2",
  },
  {
    name: "Rice Bread",
    description: "Cake wafer carrot cream chocolate cake.",
    sales: 1279,
    stock: 266,
    category: "Sourdough",
    tag: "",
    check: "",
    date: "24.11.2020",
    createdDate: "2020-08-13T00:29:30.652Z",
    id: "5f34896a0d732737eb1c9dc3",
  },
  {
    name: "Rieska",
    description: "Tart sweet sweet jujubes gummies jujubes chocolate.",
    sales: 1323,
    stock: 23,
    category: "Sourdough",
    tag: "",
    check: "",
    date: "20.12.2020",
    createdDate: "2020-08-13T00:29:30.652Z",
    id: "5f34896a0d732737eb1c9dc4",
  },
  {
    name: "Rugbrød",
    description: "Tiramisu gummies muffin oat cake.",
    sales: 771,
    stock: 114,
    category: "Multigrain",
    tag: "",
    check: "",
    date: "12.03.2020",
    createdDate: "2020-08-13T00:29:30.655Z",
    id: "5f34896a0d732737eb1c9dc6",
  },
  {
    name: "Rye Bread",
    description:
      "Cake pastry brownie cheesecake toffee sugar plum topping tiramisu.",
    sales: 603,
    stock: 171,
    category: "Sourdough",
    tag: "",
    check: "",
    date: "03.10.2020",
    createdDate: "2020-08-13T00:29:30.655Z",
    id: "5f34896a0d732737eb1c9dc7",
  },
  {
    name: "Saj Bread",
    description: "Bear claw cake toffee icing macaroon caramels. ",
    sales: 1224,
    stock: 49,
    category: "Whole Wheat",
    tag: "New",
    check: "",
    date: "19.09.2020",
    createdDate: "2020-08-13T00:29:30.656Z",
    id: "5f34896a0d732737eb1c9dc8",
  },
  {
    name: "Samoon",
    description: "Lollipop pie cotton candy macaroon.",
    sales: 853,
    stock: 294,
    category: "Multigrain",
    tag: "",
    check: "",
    date: "16.08.2020",
    createdDate: "2020-08-13T00:29:30.656Z",
    id: "5f34896a0d732737eb1c9dc9",
  },
  {
    name: "Shirmal",
    description:
      "Lemon drops wafer muffin pastry lollipop jelly beans liquorice cheesecake.",
    sales: 304,
    stock: 23,
    category: "Sourdough",
    tag: "",
    check: "",
    date: "13.11.2020",
    createdDate: "2020-08-13T00:29:30.657Z",
    id: "5f34896a0d732737eb1c9dca",
  },
  {
    name: "Spelt Bread",
    description:
      "Apple pie cheesecake muffin toffee brownie jelly beans carrot cake.",
    sales: 2524,
    stock: 271,
    category: "Sourdough",
    tag: "",
    check: "",
    date: "26.12.2020",
    createdDate: "2020-08-13T00:29:30.657Z",
    id: "5f34896a0d732737eb1c9dcb",
  },
  {
    name: "Teacake",
    description: "Cake caramels cheesecake lemon drops wafer.",
    sales: 757,
    stock: 85,
    category: "Multigrain",
    tag: "",
    check: "",
    date: "07.11.2020",
    createdDate: "2020-08-13T00:29:30.657Z",
    id: "5f34896a0d732737eb1c9dcc",
  },
  {
    name: "Tiger Bread",
    description: "Cookie pudding pie croissant cheesecake.",
    sales: 934,
    stock: 49,
    category: "Whole Wheat",
    tag: "New",
    check: "",
    date: "11.09.2020",
    createdDate: "2020-08-13T00:29:30.658Z",
    id: "5f34896a0d732737eb1c9dcd",
  },
  {
    name: "Tunnbröd",
    description: "Oat cake marzipan soufflé marshmallow muffin marshmallow",
    sales: 1724,
    stock: 41,
    category: "Multigrain",
    tag: "",
    check: "",
    date: "05.02.2020",
    createdDate: "2020-08-13T00:29:30.658Z",
    id: "5f34896a0d732737eb1c9dce",
  },
  {
    name: "Vánočka",
    description:
      "Candy canes lemon drops apple pie bonbon gingerbread lollipop cupcake.",
    sales: 1801,
    stock: 173,
    category: "Whole Wheat",
    tag: "Done",
    check: "",
    date: "14.12.2020",
    createdDate: "2020-08-13T00:29:30.659Z",
    id: "5f34896a0d732737eb1c9dcf",
  },
  {
    name: "Vienna Bread",
    description: "Candy canes gummies dragée sesame snaps marzipan.",
    sales: 2668,
    stock: 240,
    category: "Sourdough",
    tag: "",
    check: "",
    date: "28.10.2020",
    createdDate: "2020-08-13T00:29:30.659Z",
    id: "5f34896a0d732737eb1c9dd0",
  },
  {
    name: "Yufka",
    description:
      "Apple pie topping gummi bears muffin jujubes sweet roll icing.",
    sales: 917,
    stock: 126,
    category: "Sourdough",
    tag: "",
    check: "",
    date: "07.11.2020",
    createdDate: "2020-08-13T00:29:30.660Z",
    id: "5f34896a0d732737eb1c9dd1",
  },
  {
    name: "Zopf",
    description: "Candy jelly marshmallow.",
    sales: 750,
    stock: 119,
    category: "Whole Wheat",
    tag: "",
    check: "",
    date: "29.08.2020",
    createdDate: "2020-08-13T00:29:30.660Z",
    id: "5f34896a0d732737eb1c9dd2",
  },
  {
    name: "Zwieback",
    description: "Tiramisu gummies muffin oat cake.",
    sales: 686,
    stock: 64,
    category: "Whole Wheat",
    tag: "",
    check: "",
    date: "28.10.2020",
    createdDate: "2020-08-13T00:29:30.661Z",
    id: "5f34896a0d732737eb1c9dd3",
  },
];
api.onGet(`${SERVICE_URL}/products`).reply((config) => {
  if (config.params) {
    const { term } = config.params;
    if (term) {
      const filteredList = productsData.filter(
        (product) =>
          product.name.toLowerCase().includes(term.toLowerCase()) ||
          product.description.toLowerCase().includes(term.toLowerCase()) ||
          product.category.toLowerCase().includes(term.toLowerCase())
      );
      return [200, filteredList];
    }
  }
  return [200, productsData];
});
