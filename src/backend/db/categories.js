import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Men",
    description: "",
    image: "https://res.cloudinary.com/ddqytua2y/image/upload/v1690399930/E-commerce-assets/nssffladzen2ft4rrqms.avif",
  },
  {
    _id: uuid(),
    categoryName: "Women",
    description: "",
    image: "https://res.cloudinary.com/ddqytua2y/image/upload/v1690399930/E-commerce-assets/vou5mbklys77edm7zhaq.avif",
  },
  {
    _id: uuid(),
    categoryName: "Kids",
    description: "",
    image: "https://res.cloudinary.com/ddqytua2y/image/upload/v1690399930/E-commerce-assets/dnnx9hhklbrehmhjomae.avif",
  },
];
