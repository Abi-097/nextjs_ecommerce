import { create } from "zustand";
import OrderItem from "../models/OrderModel";
import { round2 } from "../utils";

const Cart = {
  items: [],
  itemsPrice: 0,
  taxPrice: 0,
  shippingPrice: 0,
  totalPrice: 0,
};

module.exports = {
  Cart,
};
