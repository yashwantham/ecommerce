import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Rocky",
    lastName: "M S",
    email: "rockyms@gmail.com", //john@gmail.com
    password: "rockyms",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
