import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

/*
export const products = [
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "5000",
    categoryName: "non-fiction",
  },
  {
    _id: uuid(),
    title: "You are Winner",
    author: "Junaid Qureshi",
    price: "3000",
    categoryName: "horror",
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "fiction",
  },
];
*/

export const products = [
  {
    _id: uuid(),
    image:
      'https://res.cloudinary.com/donqbxlnc/image/upload/v1648516571/fashify/25d7ff1d-6680-4629-b7f8-dda51fb89dc61592396707535-Nautica-Men-Tshirts-3811592396706267-4_hxanis.webp',
    category: 'Men',
    rating: '3.9',
    size: 'L',
    description: 'Men Brown Pure Cotton Polo Collar Pure Cotton T-shirt',
    title: 'Louis Philippe Sport',
    trending: false,
    original_price: '1199',
    price: '719',
    delivery_time: '9',
    reviews: '2.9k',
    in_stock: true,
  },
  {
    _id: uuid(),
    title: 'Cherry Crumble',
    original_price: '900',
    description:
      'Girls Black Embellished Net & Velvet Finish Fit & Flare Dress',
    price: '499',
    rating: '4.5',
    size: 'M',
    image:
      'https://res.cloudinary.com/donqbxlnc/image/upload/v1648516848/fashify/b33911a2-038f-419a-afd9-e7f7949310441639746739865AllenSollyJuniorBoysMaroonSlimFitCasualShirt1_k5fy77.webp',
    category: 'Kids',
    trending: true,
    reviews: '1.5k',
    in_stock: true,
    delivery_time: '3',
  },
  {
    _id: uuid(),
    image:
      'https://res.cloudinary.com/donqbxlnc/image/upload/v1648516584/fashify/494a0494-2127-485d-8324-28aafe60ca0f1646647959983-one8-x-PUMA-Men-Orange-Brand-Logo-One8Core-Pure-Cotton-Virat-1_vdlx2v.webp',
    category: 'Men',
    rating: '3.8',
    size: 'S',
    description: 'Men Black Printed Henley T-shirt',
    title: 'Roadster',
    trending: false,
    original_price: '1199',
    price: '719',
    delivery_time: '6',
    reviews: '2.4k',
    in_stock: true,
  },
  {
    _id: uuid(),
    image:
      'https://res.cloudinary.com/donqbxlnc/image/upload/v1648516630/fashify/f8e99b19-1b04-4968-828b-5add2713cd541602749203648-W-Women-Kurtas-9021602749202693-1_fglu21.webp',
    category: 'Women',
    rating: '4.3',
    size: 'L',
    description:
      'Women Off-White & Black Printed Kurta with Palazzos & Dupatta',
    title: 'Biba',
    trending: true,
    original_price: '3599',
    price: '1799',
    delivery_time: '8',
    reviews: '605',
    in_stock: false,
  },
  {
    _id: uuid(),
    image:
      'https://res.cloudinary.com/donqbxlnc/image/upload/v1648516528/fashify/11524206887991-Roadster-Men-Tshirts-9291524206887825-1_djqh04.webp',
    category: 'Men',
    rating: '4.2',
    size: 'XXL',
    description: 'Men Navy Blue Printed Round Neck T-shirt',
    title: 'Roadster',
    trending: true,
    original_price: '699',
    price: '384',
    delivery_time: '1',
    reviews: '2.5k',
    in_stock: true,
  },
  {
    _id: uuid(),
    title: 'H&M',
    original_price: '899',
    description: 'Boys Yellow Printed Cotton Round Neck T-Shirt',
    price: '699',
    rating: '4.1',
    size: 'S',
    image:
      'https://res.cloudinary.com/donqbxlnc/image/upload/v1648516869/fashify/be808931-a165-425b-97b4-7b7806b01c0b1634038540535AllenSollyJuniorBoysSetof2SolidRoundNeckT-shirts1_oxu2ms.webp',
    category: 'Kids',
    trending: true,
    reviews: '1.5k',
    in_stock: false,
    delivery_time: '7',
  },
  {
    _id: uuid(),
    image:
      'https://res.cloudinary.com/donqbxlnc/image/upload/v1648516714/fashify/9e755293-b463-4e4e-8d43-6bec0abbee901628664093230-W-Women-Green-Floral-Printed-Kurta-2771628664092654-1_rhjnye.webp',
    category: 'Women',
    rating: '4.3',
    size: 'L',
    description:
      'Women Off-White & Black Printed Kurta with Palazzos & Dupatta',
    title: 'Bibari',
    trending: true,
    original_price: '3599',
    price: '1799',
    delivery_time: '2',
    reviews: '205',
    in_stock: true,
  },
  {
    _id: uuid(),
    image:
      'https://res.cloudinary.com/donqbxlnc/image/upload/v1648516553/fashify/1cfd3a7b-1864-4225-b56b-7c129071f4d41635325540976-Nautica-Men-Tshirts-5421635325540510-1_fjgoo2.webp',
    category: 'Men',
    rating: '4.3',
    size: 'M',
    description:
      'Men Maroon Solid Polo Collar T-shirt with Brand Logo Applique Detail',
    title: 'U.S. Polo Assn.',
    trending: false,
    original_price: '1899',
    price: '1234',
    delivery_time: '5',
    reviews: '4k',
    in_stock: true,
  },
];