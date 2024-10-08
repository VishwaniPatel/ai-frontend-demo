import { SERVICE_URL } from '../../config';
import api from '../api';

const mailboxData = [
  {
    id: 1,
    folder: 'inbox',
    from: 'Olli Hawkins',
    title: 'Recent Project Update',
    detail: 'Hi, I would like to keep you updated about the recent developments on the project. I am happy to inform that we are ahead of the schedule.',
    dateTime: '14:30',
    attachment: false,
    starred: true,
    important: true,
    unread: true,
    tags: [
      {
        title: 'Project',
        bg: 'outline-primary',
        text: 'text-primary',
      },
    ],
    emails: [
      {
        name: 'Joisse Kaycee',
        address: 'joissekaycee@gmail.com',
        thumb: '/img/profile/profile-1.webp',
        date: '25 Nov 2020',
        time: '14:40',
        attachments: [],
        content:
          'Hi Olli, <br/><br/>Cake chocolate bar biscuit sweet roll liquorice jelly jujubes. Gingerbread icing macaroon bear claw jelly toffee. Chocolate cake marshmallow muffin wafer. Pastry cake tart apple pie bear claw sweet. Apple pie macaroon sesame snaps cotton candy jelly pudding lollipop caramels marshmallow. Powder halvah dessert ice cream. Carrot cake gingerbread chocolate cake tootsie roll. Oat cake jujubes jelly-o jelly chupa chups lollipop jelly wafer soufflé. <br/><br/> Jelly-o jelly oat cake cheesecake halvah. Cupcake sweet roll donut. Sesame snaps lollipop macaroon. Icing tiramisu oat cake chocolate cake marzipan pudding danish gummies. Dragée liquorice jelly beans jelly jelly sesame snaps brownie. Cheesecake chocolate cake sweet roll cupcake dragée croissant muffin. Lemon drops cupcake croissant liquorice donut cookie cake. Gingerbread biscuit bear claw marzipan tiramisu topping. Jelly-o croissant chocolate bar gummi bears dessert lemon drops gingerbread croissant. Donut candy jelly. <br/><br/>Best Regards, <br/>Joisse Kaycee',
      },
      {
        name: 'Olli Hawkins',
        address: 'ollihawkins@msn.com',
        thumb: '/img/profile/profile-10.webp',
        date: '25 Nov 2020',
        time: '14:55',
        attachments: [],
        content:
          'Hi Joisse, <br/><br/>Danish brownie chocolate bar lollipop cookie tootsie roll candy canes. Jujubes lollipop cheesecake gummi bears cheesecake. Cake jujubes soufflé. <br/><br/>Best Regards, <br/>Olli Hawkins',
      },
      {
        name: 'Joisse Kaycee',
        address: 'joissekaycee@gmail.com',
        thumb: '/img/profile/profile-1.webp',
        date: '25 Nov 2020',
        time: '15:10',
        attachments: [],
        content:
          'Olli, <br/><br/>Cheesecake chocolate cake sweet roll cupcake dragée croissant muffin. Lemon drops cupcake croissant liquorice donut cookie cake. Gingerbread biscuit bear claw marzipan tiramisu topping. Jelly-o croissant chocolate bar gummi bears dessert lemon drops gingerbread croissant. Donut candy jelly. <br/><br/>Best Regards, <br/>Joisse',
      },
      {
        name: 'Olli Hawkins',
        address: 'ollihawkins@msn.com',
        thumb: '/img/profile/profile-10.webp',
        date: '25 Nov 2020',
        time: '15:45',
        attachments: [],
        content:
          'Hey, <br/><br/>Jelly-o jelly oat cake cheesecake halvah. Cupcake sweet roll donut. Sesame snaps lollipop macaroon. Icing tiramisu oat cake chocolate cake marzipan pudding danish gummies. Dragée liquorice jelly beans jelly jelly sesame snaps brownie. <br/><br/>Best Regards, <br/>Olli Hawkins',
      },
      {
        name: 'Joisse Kaycee',
        address: 'joissekaycee@gmail.com',
        thumb: '/img/profile/profile-1.webp',
        date: '25 Nov 2020',
        time: '21:03',
        attachments: [],
        content:
          'Hi, <br/><br/>Toffee croissant icing toffee. Sweet roll chupa chups marshmallow muffin liquorice chupa chups soufflé bonbon. Liquorice gummi bears cake donut chocolate lollipop gummi bears. Cotton candy cupcake ice cream gummies dessert muffin chocolate jelly. Danish brownie chocolate bar lollipop cookie tootsie roll candy canes. Jujubes lollipop cheesecake gummi bears cheesecake. Cake jujubes soufflé. <br/><br/> Cake chocolate bar biscuit sweet roll liquorice jelly jujubes. Gingerbread icing macaroon bear claw jelly toffee. Chocolate cake marshmallow muffin wafer. Pastry cake tart apple pie bear claw sweet. Apple pie macaroon sesame snaps cotton candy jelly pudding lollipop caramels marshmallow. Powder halvah dessert ice cream. Carrot cake gingerbread chocolate cake tootsie roll. Oat cake jujubes jelly-o jelly chupa chups lollipop jelly wafer soufflé. <br/><br/> Jelly-o jelly oat cake cheesecake halvah. Cupcake sweet roll donut. Sesame snaps lollipop macaroon. Icing tiramisu oat cake chocolate cake marzipan pudding danish gummies. Dragée liquorice jelly beans jelly jelly sesame snaps brownie. Cheesecake chocolate cake sweet roll cupcake dragée croissant muffin. Lemon drops cupcake croissant liquorice donut cookie cake. Gingerbread biscuit bear claw marzipan tiramisu topping. Jelly-o croissant chocolate bar gummi bears dessert lemon drops gingerbread croissant. Donut candy jelly. <br/><br/>Best Regards, <br/>Joisse',
      },
      {
        name: 'Olli Hawkins',
        address: 'ollihawkins@msn.com',
        thumb: '/img/profile/profile-10.webp',
        date: '25 Nov 2020',
        time: '22:45',
        attachments: [
          {
            title: 'rugbraud.webp',
            size: '346 KB',
            source: '/img/product/small/product-1.webp',
          },
          {
            title: 'michetta.webp',
            size: '511 KB',
            source: '/img/product/small/product-2.webp',
          },
        ],
        content:
          'Hey Joisse, <br/><br/>Marzipan pudding danish gummies. Dragée liquorice jelly beans jelly jelly sesame snaps brownie. Liquorice gummi bears cake donut chocolate lollipop gummi bears. <br/><br/>Best Regards, <br/>Olli Hawkins',
      },
    ],
  },
  {
    id: 2,
    folder: 'inbox',
    from: 'Winry Rockbell',
    title: 'Customer Engagement',
    detail: 'Regarding to the online training videos that you published, got a few questions.',
    dateTime: '15:15',
    attachment: false,
    starred: true,
    important: false,
    unread: true,
    tags: [
      {
        title: 'Personal',
        bg: 'outline-warning',
        text: 'text-warning',
      },
    ],
    emails: [
      {
        name: 'Winry Rockbell',
        address: 'winryrockbell@gmail.com',
        thumb: '/img/profile/profile-3.webp',
        date: '25 Nov 2020',
        time: '15:15',
        attachments: [],
        content:
          'Hi Joisse, <br/><br/> Cake chocolate bar biscuit sweet roll liquorice jelly jujubes. Gingerbread icing macaroon bear claw jelly toffee. Chocolate cake marshmallow muffin wafer. Pastry cake tart apple pie bear claw sweet. Apple pie macaroon sesame snaps cotton candy jelly pudding lollipop caramels marshmallow. Powder halvah dessert ice cream. Carrot cake gingerbread chocolate cake tootsie roll. Oat cake jujubes jelly-o jelly chupa chups lollipop jelly wafer soufflé. <br/><br/> Jelly-o jelly oat cake cheesecake halvah. Cupcake sweet roll donut. Sesame snaps lollipop macaroon. Icing tiramisu oat cake chocolate cake marzipan pudding danish gummies. Dragée liquorice jelly beans jelly jelly sesame snaps brownie. Cheesecake chocolate cake sweet roll cupcake dragée croissant muffin. Lemon drops cupcake croissant liquorice donut cookie cake. Gingerbread biscuit bear claw marzipan tiramisu topping. Jelly-o croissant chocolate bar gummi bears dessert lemon drops gingerbread croissant. Donut candy jelly. <br/><br/>Best Regards, <br/>Winry',
      },
      {
        name: 'Joisse Kaycee',
        address: 'joissekaycee@gmail.com',
        thumb: '/img/profile/profile-1.webp',
        date: '25 Nov 2020',
        time: '15:22',
        attachments: [],
        content:
          'Hi Winry, <br/><br/>Danish brownie chocolate bar lollipop cookie tootsie roll candy canes. Jujubes lollipop cheesecake gummi bears cheesecake. Cake jujubes soufflé.<br/><br/>Best Regards, <br/>Joisse Kaycee',
      },
      {
        name: 'Winry Rockbell',
        address: 'winryrockbell@gmail.com',
        thumb: '/img/profile/profile-3.webp',
        date: '25 Nov 2020',
        time: '16:42',
        attachments: [],
        content:
          'Joisse, <br/><br/>Icing tiramisu oat cake chocolate cake marzipan pudding danish gummies. Dragée liquorice jelly beans jelly jelly sesame snaps brownie. Liquorice gummi bears cake donut chocolate lollipop gummi bears. Cotton candy cupcake ice cream gummies dessert muffin chocolate jelly. Danish brownie chocolate bar lollipop cookie tootsie roll candy canes.<br/><br/>Best Regards, <br/>Joisse Kaycee',
      },
    ],
  },
  {
    id: 3,
    folder: 'inbox',
    from: 'Cherish Kerr',
    title: 'Accounting',
    detail: 'Accountancy is the measurement, processing, and communication of financial and non financial information about',
    dateTime: '15:15',
    attachment: false,
    starred: false,
    important: false,
    unread: false,
    tags: [
      {
        title: 'Urgent',
        bg: 'outline-danger',
        text: 'text-danger',
      },
    ],
    emails: [
      {
        name: 'Cherish Kerr',
        address: 'cherishkerr@aol.com',
        thumb: '/img/profile/profile-4.webp',
        date: '22 Nov 2020',
        time: '10:05',
        attachments: [],
        content:
          'Hi Joisse, <br/><br/>Sweet roll chupa chups marshmallow muffin liquorice chupa chups soufflé bonbon. Liquorice gummi bears cake donut chocolate lollipop gummi bears. Cotton candy cupcake ice cream gummies dessert muffin chocolate jelly. Danish brownie chocolate bar lollipop cookie tootsie roll candy canes. Jujubes lollipop cheesecake gummi bears cheesecake. Cake jujubes soufflé. <br/><br/> Cake chocolate bar biscuit sweet roll liquorice jelly jujubes. Gingerbread icing macaroon bear claw jelly toffee. Chocolate cake marshmallow muffin wafer. Pastry cake tart apple pie bear claw sweet. Apple pie macaroon sesame snaps cotton candy jelly pudding lollipop caramels marshmallow. Powder halvah dessert ice cream. Carrot cake gingerbread chocolate cake tootsie roll.<br/><br/>Kind Regards, <br/>Cherish Kerr',
      },
    ],
  },
  {
    id: 4,
    folder: 'inbox',
    from: 'Zayn Hartley',
    title: 'Client Relations',
    detail: 'Liquorice gummi bears cake donut chocolate lollipop gummi bears',
    dateTime: '15 Nov',
    attachment: false,
    starred: true,
    important: true,
    unread: true,
    tags: [
      {
        title: 'Urgent',
        bg: 'outline-danger',
        text: 'text-danger',
      },
    ],
    emails: [
      {
        name: 'Zayn Hartley',
        address: 'zaynhartley@yahoo.com',
        thumb: '/img/profile/profile-10.webp',
        date: '21 Nov 2020',
        time: '11:45',
        attachments: [],
        content:
          'Hi Joisse, <br/><br/>Cake chocolate bar biscuit sweet roll liquorice jelly jujubes. Gingerbread icing macaroon bear claw jelly toffee. Chocolate cake marshmallow muffin wafer.<br/><br/>Regards, <br/>Zayn',
      },
    ],
  },
  {
    id: 5,
    folder: 'inbox',
    from: 'Esperanza Lodge',
    title: 'Support Tickets',
    detail: 'Gingerbread icing macaroon bear claw jelly toffee.',
    dateTime: '12 Nov',
    attachment: false,
    starred: true,
    important: true,
    unread: false,
    tags: [],
    emails: [
      {
        name: 'Esperanza Lodge',
        address: 'esperanzalodge@yahoo.com',
        thumb: '/img/profile/profile-8.webp',
        date: '15 Nov 2020',
        time: '11:45',
        attachments: [],
        content:
          'Hi Joisse, <br/><br/>Sweet roll chupa chups marshmallow muffin liquorice chupa chups soufflé bonbon. Liquorice gummi bears cake donut chocolate lollipop gummi bears. Cotton candy cupcake ice cream gummies dessert muffin chocolate jelly. Danish brownie chocolate bar lollipop cookie tootsie roll candy canes. Jujubes lollipop cheesecake gummi bears cheesecake. Cake jujubes soufflé. <br/><br/> Cake chocolate bar biscuit sweet roll liquorice jelly jujubes. Gingerbread icing macaroon bear claw jelly toffee. Chocolate cake marshmallow muffin wafer. Pastry cake tart apple pie bear claw sweet. Apple pie macaroon sesame snaps cotton candy jelly pudding lollipop caramels marshmallow. Powder halvah dessert ice cream. Carrot cake gingerbread chocolate cake tootsie roll. Oat cake jujubes jelly-o jelly chupa chups lollipop jelly wafer soufflé.<br/><br/>Warm Regards, <br/>Esperanza',
      },
      {
        name: 'Joisse Kaycee',
        address: 'joissekaycee@gmail.com',
        thumb: '/img/profile/profile-1.webp',
        date: '15 Nov 2020',
        time: '15:22',
        attachments: [],
        content:
          'Dear Esperanza Lodge, <br/><br/>Danish brownie chocolate bar lollipop cookie tootsie roll candy canes. Jujubes lollipop cheesecake gummi bears cheesecake. Cake jujubes soufflé.<br/><br/>Best Regards, <br/>Joisse Kaycee',
      },
    ],
  },
  {
    id: 6,
    folder: 'inbox',
    from: 'Kathryn Mengel',
    title: 'Breadstick out of stock',
    detail: 'Liquorice chupa chups soufflé bonbon icing macaroon bear claw jelly toffee.',
    dateTime: '11 Nov',
    attachment: false,
    starred: true,
    important: false,
    unread: false,
    tags: [
      {
        title: 'Personal',
        bg: 'outline-warning',
        text: 'text-warning',
      },
    ],
    emails: [
      {
        name: 'Kathryn Mengel',
        address: 'kathrynmengel@yahoo.com',
        thumb: '/img/profile/profile-10.webp',
        date: '14 Nov 2020',
        time: '05:10',
        attachments: [],
        content:
          'Hello, <br/><br/>Liquorice gummi bears cake donut chocolate lollipop gummi bears. Cotton candy cupcake ice cream gummies dessert muffin chocolate jelly.<br/><br/>Best Regards, <br/>Kathryn Mengel',
      },
      {
        name: 'Joisse Kaycee',
        address: 'joissekaycee@gmail.com',
        thumb: '/img/profile/profile-1.webp',
        date: '14 Nov 2020',
        time: '18:15',
        attachments: [],
        content:
          'Dear Kathryn Mengel, <br/><br/>Muffin cheesecake sesame snaps. Donut lollipop chocolate cake. Cheesecake oat cake croissant topping lemon drops macaroon sweet roll. Bonbon dragée marshmallow tootsie roll cupcake croissant chocolate cake candy topping. <br/><br/>Best Regards, <br/>Joisse Kaycee',
      },
    ],
  },
  {
    id: 7,
    folder: 'inbox',
    from: 'Daisy Hartley',
    title: '14 Facts About Sugar',
    detail:
      'Dragée bear claw halvah. Ice cream chocolate cotton candy cotton candy biscuit chocolate bar powder. Sugar plum cookie cake. Tart apple pie sesame snaps cake biscuit cookie candy croissant. ',
    dateTime: '11 Nov',
    attachment: false,
    starred: true,
    important: false,
    unread: false,
    tags: [
      {
        title: 'Project',
        bg: 'outline-primary',
        text: 'text-primary',
      },
    ],
    emails: [
      {
        name: 'Daisy Hartley',
        address: 'daisyhartley@msn.com',
        thumb: '/img/profile/profile-2.webp',
        date: '11 Nov 2020',
        time: '11:10',
        attachments: [],
        content:
          'Hello, <br/><br/>Sweet sugar plum wafer carrot cake jelly chocolate bar. Brownie gummi bears wafer brownie. Caramels sesame snaps apple pie fruitcake cheesecake topping lemon drops gummi bears icing. Gingerbread pie muffin cheesecake. Cheesecake chocolate bear claw apple pie soufflé. Chupa chups pastry dessert cake bear claw topping chocolate cake lollipop dessert.<br/><br/>Regards',
      },
      {
        name: 'Joisse Kaycee',
        address: 'joissekaycee@gmail.com',
        thumb: '/img/profile/profile-1.webp',
        date: '14 Nov 2020',
        time: '11:15',
        attachments: [],
        content:
          'Dear Daisy, <br/><br/>Gingerbread icing macaroon bear claw jelly toffee. Chocolate cake marshmallow muffin wafer. Pastry cake tart apple pie bear claw sweet. Apple pie macaroon sesame snaps cotton candy jelly pudding lollipop caramels marshmallow. Powder halvah dessert ice cream. Carrot cake gingerbread chocolate cake tootsie roll. Oat cake jujubes jelly-o jelly chupa chups lollipop jelly wafer soufflé. <br/><br/> Jelly-o jelly oat cake cheesecake halvah. Cupcake sweet roll donut.<br/><br/>Best Regards, <br/>Joisse Kaycee',
      },
    ],
  },
  {
    id: 8,
    folder: 'inbox',
    from: 'Emilia Antoine',
    title: 'Introduction to Bread Making ',
    detail: 'Caramels sesame snaps apple pie fruitcake cheesecake topping lemon drops gummi bears icing.',
    dateTime: '10 Nov',
    attachment: false,
    starred: false,
    important: false,
    unread: false,
    tags: [],
    emails: [
      {
        name: 'Emilia Antoine',
        address: 'emiliaantoine@gmail.com',
        thumb: '/img/profile/profile-8.webp',
        date: '10 Nov 2020',
        time: '19:45',
        attachments: [],
        content:
          'Hello, <br/><br/>Tiramisu bear claw jelly-o marshmallow topping jelly beans ice cream candy canes cake. Soufflé cheesecake dessert halvah lemon drops liquorice topping soufflé. Dragée bear claw halvah. Ice cream chocolate cotton candy cotton candy biscuit chocolate bar powder. Sugar plum cookie cake. Tart apple pie sesame snaps cake biscuit cookie candy croissant. Biscuit tiramisu bonbon lemon drops croissant.<br/><br/>Regards',
      },
    ],
  },
  {
    id: 9,
    folder: 'inbox',
    from: 'Elsie Pernilla',
    title: 'Meeting with the new design team',
    detail: 'Liquorice gummi bears cake donut chocolate lollipop gummi bears.',
    dateTime: '09 Nov',
    attachment: false,
    starred: false,
    important: false,
    unread: false,
    tags: [],
    emails: [
      {
        name: 'Elsie Pernilla',
        address: 'elsiepernilla@hotmail.com',
        thumb: '/img/profile/profile-8.webp',
        date: '10 Nov 2020',
        time: '10:45',
        attachments: [],
        content:
          'Hi, <br/><br/>Cheesecake bear claw liquorice dragée lemon drops. Cheesecake candy gummies gingerbread. Candy jelly beans cupcake. Jelly sesame snaps marshmallow lollipop. Brownie jelly-o carrot cake brownie lemon drops gummi bears.<br/><br/>Regards<br/>Elsie Pernilla',
      },
      {
        name: 'Joisse Kaycee',
        address: 'joissekaycee@gmail.com',
        thumb: '/img/profile/profile-1.webp',
        date: '10 Nov 2020',
        time: '11:15',
        attachments: [],
        content:
          'Dear Daisy, <br/><br/>Gingerbread icing macaroon bear claw jelly toffee. Chocolate cake marshmallow muffin wafer. Pastry cake tart apple pie bear claw sweet. Apple pie macaroon sesame snaps cotton candy jelly pudding lollipop caramels marshmallow. Powder halvah dessert ice cream. Carrot cake gingerbread chocolate cake tootsie roll. Oat cake jujubes jelly-o jelly chupa chups lollipop jelly wafer soufflé. <br/><br/> Jelly-o jelly oat cake cheesecake halvah. Cupcake sweet roll donut.<br/><br/>Best Regards, <br/>Joisse Kaycee',
      },
    ],
  },
  {
    id: 10,
    folder: 'inbox',
    from: 'Kathleen Bertha',
    title: 'Licking your phone never tasted so good',
    detail: 'Jelly dragée apple pie halvah jujubes. Sweet sugar plum wafer carrot cake jelly chocolate bar. Brownie gummi bears wafer brownie.',
    dateTime: '08 Nov',
    attachment: false,
    starred: false,
    important: false,
    unread: false,
    tags: [],
    emails: [
      {
        name: 'Kathleen Bertha',
        address: 'kathleenbertha@msn.com',
        thumb: '/img/profile/profile-9.webp',
        date: '08 Nov 2020',
        time: '19:45',
        attachments: [],
        content:
          'Hello, <br/><br/>Tiramisu bear claw jelly-o marshmallow topping jelly beans ice cream candy canes cake. Soufflé cheesecake dessert halvah lemon drops liquorice topping soufflé. Dragée bear claw halvah. Ice cream chocolate cotton candy cotton candy biscuit chocolate bar powder. Sugar plum cookie cake. Tart apple pie sesame snaps cake biscuit cookie candy croissant. Biscuit tiramisu bonbon lemon drops croissant.<br/><br/>Regards',
      },
    ],
  },
  {
    id: 11,
    folder: 'inbox',
    from: 'Cherish Kerr',
    title: '25% off your favorites',
    detail: 'Liquorice gummi bears cake donut chocolate lollipop gummi bears. Cotton candy cupcake ice cream gummies dessert muffin',
    dateTime: '15:15',
    attachment: false,
    starred: false,
    important: false,
    unread: false,
    tags: [
      {
        title: 'Urgent',
        bg: 'outline-danger',
        text: 'text-danger',
      },
    ],
    emails: [
      {
        name: 'Cherish Kerr',
        address: 'cherishkerr@aol.com',
        thumb: '/img/profile/profile-4.webp',
        date: '22 Nov 2020',
        time: '10:05',
        attachments: [],
        content:
          'Hi Joisse, <br/><br/>Sweet roll chupa chups marshmallow muffin liquorice chupa chups soufflé bonbon. Liquorice gummi bears cake donut chocolate lollipop gummi bears. Cotton candy cupcake ice cream gummies dessert muffin chocolate jelly. Danish brownie chocolate bar lollipop cookie tootsie roll candy canes. Jujubes lollipop cheesecake gummi bears cheesecake. Cake jujubes soufflé. <br/><br/> Cake chocolate bar biscuit sweet roll liquorice jelly jujubes. Gingerbread icing macaroon bear claw jelly toffee. Chocolate cake marshmallow muffin wafer. Pastry cake tart apple pie bear claw sweet. Apple pie macaroon sesame snaps cotton candy jelly pudding lollipop caramels marshmallow. Powder halvah dessert ice cream. Carrot cake gingerbread chocolate cake tootsie roll.<br/><br/>Kind Regards, <br/>Cherish Kerr',
      },
    ],
  },
  {
    id: 12,
    folder: 'inbox',
    from: 'Sixte Tera',
    title: 'Your plan goes bye-bye at midnight',
    detail:
      'Tiramisu bear claw jelly-o marshmallow topping jelly beans ice cream candy canes cake. Soufflé cheesecake dessert halvah lemon drops liquorice topping soufflé.',
    dateTime: '06 Nov',
    attachment: false,
    starred: false,
    important: false,
    unread: false,
    tags: [],
    emails: [
      {
        name: 'Sixte Tera',
        address: 'sixtetera@gmail.com',
        thumb: '/img/profile/profile-4.webp',
        date: '06 Nov 2020',
        time: '10:05',
        attachments: [],
        content:
          'Hello, <br/><br/>Tiramisu bear claw jelly-o marshmallow topping jelly beans ice cream candy canes cake. Soufflé cheesecake dessert halvah lemon drops liquorice topping soufflé. Dragée bear claw halvah. Ice cream chocolate cotton candy cotton candy biscuit chocolate bar powder. Sugar plum cookie cake. Tart apple pie sesame snaps cake biscuit cookie candy croissant. Biscuit tiramisu bonbon lemon drops croissant.<br/><br/>Regards',
      },
    ],
  },
  {
    id: 13,
    folder: 'inbox',
    from: 'Gresham Jeanette',
    title: 'Important Weather Advisory',
    detail:
      'Candy jelly beans cupcake. Jelly sesame snaps marshmallow lollipop. Brownie jelly-o carrot cake brownie lemon drops gummi bears. Halvah pudding tootsie roll carrot cake biscuit ice cream halvah tootsie roll. ',
    dateTime: '05 Nov',
    attachment: false,
    starred: false,
    important: false,
    unread: false,
    tags: [],
    emails: [
      {
        name: 'Gresham Jeanette',
        address: 'greshamjeanette@aol.com',
        thumb: '/img/profile/profile-7.webp',
        date: '05 Nov 2020',
        time: '12:45',
        attachments: [],
        content:
          'Hello, <br/><br/>Tiramisu bear claw jelly-o marshmallow topping jelly beans ice cream candy canes cake. Soufflé cheesecake dessert halvah lemon drops liquorice topping soufflé. Dragée bear claw halvah. Ice cream chocolate cotton candy cotton candy biscuit chocolate bar powder. Sugar plum cookie cake. Tart apple pie sesame snaps cake biscuit cookie candy croissant. Biscuit tiramisu bonbon lemon drops croissant.<br/><br/>Regards',
      },
    ],
  },
  {
    id: 14,
    folder: 'inbox',
    from: 'Vanna Mariano',
    title: 'Abra-cord-abra! Yeah, we said it.',
    detail:
      'Dessert bear claw caramels tiramisu cotton candy. Pastry powder dragée croissant gingerbread sesame snaps. Lemon drops sesame snaps lemon drops chocolate bar tiramisu.',
    dateTime: '05 Nov',
    attachment: false,
    starred: false,
    important: false,
    unread: false,
    tags: [],
    emails: [
      {
        name: 'Vanna Mariano',
        address: 'vannamariano@gmail.com',
        thumb: '/img/profile/profile-10.webp',
        date: '05 Nov 2020',
        time: '19:45',
        attachments: [],
        content:
          'Hello, <br/><br/>Tiramisu bear claw jelly-o marshmallow topping jelly beans ice cream candy canes cake. Soufflé cheesecake dessert halvah lemon drops liquorice topping soufflé. Dragée bear claw halvah. Ice cream chocolate cotton candy cotton candy biscuit chocolate bar powder. Sugar plum cookie cake. Tart apple pie sesame snaps cake biscuit cookie candy croissant. Biscuit tiramisu bonbon lemon drops croissant.<br/><br/>Regards',
      },
    ],
  },
  {
    id: 15,
    folder: 'inbox',
    from: 'Harshad Willihad',
    title: 'Watch Out for This Amazon Phishing Scam',
    detail:
      'Tiramisu bear claw jelly-o marshmallow topping jelly beans ice cream candy canes cake. Soufflé cheesecake dessert halvah lemon drops liquorice topping soufflé.',
    dateTime: '05 Nov',
    attachment: false,
    starred: false,
    important: false,
    unread: false,
    tags: [],
    emails: [
      {
        name: 'Harshad Willihad',
        address: 'harshadwillihad@hotmail.com',
        thumb: '/img/profile/profile-3.webp',
        date: '05 Nov 2020',
        time: '08:35',
        attachments: [],
        content:
          'Hello, <br/><br/>Tiramisu bear claw jelly-o marshmallow topping jelly beans ice cream candy canes cake. Soufflé cheesecake dessert halvah lemon drops liquorice topping soufflé. Dragée bear claw halvah. Ice cream chocolate cotton candy cotton candy biscuit chocolate bar powder. Sugar plum cookie cake. Tart apple pie sesame snaps cake biscuit cookie candy croissant. Biscuit tiramisu bonbon lemon drops croissant.<br/><br/>Regards',
      },
    ],
  },
  {
    id: 16,
    folder: 'inbox',
    from: 'Edan Tahnee',
    title: 'Boom shakalak! Let’s get started',
    detail: 'Candy canes jelly beans donut gummies gummi bears halvah oat cake marzipan. Bear claw apple pie dragée gummi bears soufflé toffee.',
    dateTime: '03 Nov',
    attachment: false,
    starred: false,
    important: false,
    unread: false,
    tags: [],
    emails: [
      {
        name: 'Edan Tahnee',
        address: 'edantahnee@msn.com',
        thumb: '/img/profile/profile-6.webp',
        date: '03 Nov 2020',
        time: '11:20',
        attachments: [],
        content:
          'Hello, <br/><br/>Tiramisu bear claw jelly-o marshmallow topping jelly beans ice cream candy canes cake. Soufflé cheesecake dessert halvah lemon drops liquorice topping soufflé. Dragée bear claw halvah. Ice cream chocolate cotton candy cotton candy biscuit chocolate bar powder. Sugar plum cookie cake. Tart apple pie sesame snaps cake biscuit cookie candy croissant. Biscuit tiramisu bonbon lemon drops croissant.<br/><br/>Regards',
      },
    ],
  },

  {
    id: 17,
    folder: 'sent',
    from: 'Joisse Kaycee',
    title: 'Meeting with the new design team',
    detail: 'Liquorice gummi bears cake donut chocolate lollipop gummi bears.',
    dateTime: '22 Nov',
    attachment: false,
    starred: false,
    important: false,
    unread: false,
    tags: [],
    emails: [
      {
        name: 'Joisse Kaycee',
        address: 'joissekaycee@gmail.com',
        thumb: '/img/profile/profile-1.webp',
        date: '10 Nov 2020',
        time: '11:15',
        attachments: [],
        content:
          'Dear Daisy, <br/><br/>Gingerbread icing macaroon bear claw jelly toffee. Chocolate cake marshmallow muffin wafer. Pastry cake tart apple pie bear claw sweet. Apple pie macaroon sesame snaps cotton candy jelly pudding lollipop caramels marshmallow. Powder halvah dessert ice cream. Carrot cake gingerbread chocolate cake tootsie roll. Oat cake jujubes jelly-o jelly chupa chups lollipop jelly wafer soufflé. <br/><br/> Jelly-o jelly oat cake cheesecake halvah. Cupcake sweet roll donut.<br/><br/>Best Regards, <br/>Joisse Kaycee',
      },
    ],
  },
  {
    id: 18,
    folder: 'sent',
    from: 'Joisse Kaycee',
    title: '14 Facts About Sugar',
    detail:
      'Tootsie roll sweet roll pudding. Pastry liquorice wafer sweet. Chocolate bar jelly sugar plum cake sesame snaps gummies lollipop. Oat cake gummies cheesecake cake biscuit jelly beans. Muffin cheesecake sesame snaps. Donut lollipop chocolate cake.',
    dateTime: '14 Nov',
    attachment: false,
    starred: true,
    important: false,
    unread: false,
    tags: [
      {
        title: 'Project',
        bg: 'outline-primary',
        text: 'text-primary',
      },
    ],
    emails: [
      {
        name: 'Joisse Kaycee',
        address: 'joissekaycee@gmail.com',
        thumb: '/img/profile/profile-1.webp',
        date: '14 Nov 2020',
        time: '11:15',
        attachments: [],
        content:
          'Dear Daisy, <br/><br/>Gingerbread icing macaroon bear claw jelly toffee. Chocolate cake marshmallow muffin wafer. Pastry cake tart apple pie bear claw sweet. Apple pie macaroon sesame snaps cotton candy jelly pudding lollipop caramels marshmallow. Powder halvah dessert ice cream. Carrot cake gingerbread chocolate cake tootsie roll. Oat cake jujubes jelly-o jelly chupa chups lollipop jelly wafer soufflé. <br/><br/> Jelly-o jelly oat cake cheesecake halvah. Cupcake sweet roll donut.<br/><br/>Best Regards, <br/>Joisse Kaycee',
      },
    ],
  },

  {
    id: 19,
    folder: 'spam',
    from: 'Cheesy Company',
    title: 'Download All the Movies',
    detail: 'Dragée bear claw halvah. Ice cream chocolate cotton plum cookie cake halvah lemon drops candy cotton candy biscuit chocolate bar powder.',
    dateTime: '11:10',
    attachment: false,
    starred: false,
    important: false,
    unread: false,
    tags: [],
    emails: [
      {
        name: 'Cheesy Company',
        address: 'deamon-2342223-@fast-daemon-222444.com',
        thumb: '/img/profile/profile-11.webp',
        date: '14 Nov 2020',
        time: '11:15',
        attachments: [],
        content:
          'Hello, <br/><br/>Gingerbread icing macaroon bear claw jelly toffee. Chocolate cake marshmallow muffin wafer. Pastry cake tart apple pie bear claw sweet. Apple pie macaroon sesame snaps cotton candy jelly pudding lollipop caramels marshmallow. Powder halvah dessert ice cream. Carrot cake gingerbread chocolate cake tootsie roll. Oat cake jujubes jelly-o jelly chupa chups lollipop jelly wafer soufflé. <br/><br/> Jelly-o jelly oat cake cheesecake halvah. Cupcake sweet roll donut.',
      },
    ],
  },
  {
    id: 20,
    folder: 'spam',
    from: 'Sneaker Man',
    title: 'Latest sneaker raffles',
    detail: 'Chocolate cake marshmallow muffin wafer.',
    dateTime: '11:10',
    attachment: false,
    starred: false,
    important: false,
    unread: false,
    tags: [],
    emails: [
      {
        name: 'Sneaker Man',
        address: 'best-sneaker-for-you@fsssm333.com',
        thumb: '/img/profile/profile-11.webp',
        date: '14 Nov 2020',
        time: '11:15',
        attachments: [],
        content:
          'Hello, <br/><br/>Dessert sweet chocolate fruitcake. Toffee candy cake. Pie gummies dessert oat cake sweet roll powder jelly pastry chocolate cake. Gummi bears cake icing gummies marzipan croissant lemon drops soufflé. Jujubes pudding donut icing topping. Soufflé oat cake tiramisu cake lollipop jelly. Chocolate chupa chups liquorice macaroon toffee jelly tiramisu cake sugar plum. Soufflé bonbon macaroon biscuit halvah sweet carrot cake bear claw chocolate. Lollipop chocolate bar icing marzipan donut powder gummi bears.',
      },
    ],
  },

  {
    id: 21,
    folder: 'trash',
    from: 'Kathleen Bertha',
    title: 'Dough for the Molds',
    detail: 'Apple pie macaroon sesame snaps cotton candy jelly pudding lollipop caramels marshmallow.',
    dateTime: '27 Sep',
    attachment: false,
    starred: false,
    important: false,
    unread: false,
    tags: [],
    emails: [
      {
        name: 'Kathleen Bertha',
        address: 'kathleenbertha@msn.com',
        thumb: '/img/profile/profile-9.webp',
        date: '11 Nov 2020',
        time: '11:10',
        attachments: [],
        content:
          'Hello, <br/><br/>Caramels sesame snaps apple pie fruitcake cheesecake topping lemon drops gummi bears icing. Gingerbread pie muffin cheesecake. Cheesecake chocolate bear claw apple pie soufflé. Chupa chups pastry dessert cake bear claw topping chocolate cake lollipop dessert.<br/><br/>Regards',
      },
      {
        name: 'Joisse Kaycee',
        address: 'joissekaycee@gmail.com',
        thumb: '/img/profile/profile-1.webp',
        date: '14 Nov 2020',
        time: '11:15',
        attachments: [],
        content:
          'Dear Daisy, <br/><br/>Apple pie macaroon sesame snaps cotton candy jelly pudding lollipop caramels marshmallow. Powder halvah dessert ice cream. Carrot cake gingerbread chocolate cake tootsie roll. Oat cake jujubes jelly-o jelly chupa chups lollipop jelly wafer soufflé. <br/><br/> Jelly-o jelly oat cake cheesecake halvah. Cupcake sweet roll donut.<br/><br/>Best Regards, <br/>Joisse Kaycee',
      },
    ],
  },
  {
    id: 22,
    folder: 'trash',
    from: 'Noelle Jayanthi',
    title: '212 blog post ideas',
    detail: 'Chocolate cake marshmallow muffin wafer halvah dessert ice cream.',
    dateTime: '11:10',
    attachment: false,
    starred: false,
    important: false,
    unread: false,
    tags: [],
    emails: [
      {
        name: 'Cheesy Company',
        address: 'noellejayanthi@aol.com',
        thumb: '/img/profile/profile-10.webp',
        date: '14 Nov 2020',
        time: '11:15',
        attachments: [],
        content:
          'Hello, <br/><br/>Dessert sweet chocolate fruitcake. Toffee candy cake. Pie gummies dessert oat cake sweet roll powder jelly pastry chocolate cake. Gummi bears cake icing gummies marzipan croissant lemon drops soufflé. Jujubes pudding donut icing topping. Soufflé oat cake tiramisu cake lollipop jelly. Chocolate chupa chups liquorice macaroon toffee jelly tiramisu cake sugar plum. Soufflé bonbon macaroon biscuit halvah sweet carrot cake bear claw chocolate. Lollipop chocolate bar icing marzipan donut powder gummi bears.',
      },
    ],
  },
];

api.onGet(`${SERVICE_URL}/apps/mailbox`).reply(200, mailboxData);
