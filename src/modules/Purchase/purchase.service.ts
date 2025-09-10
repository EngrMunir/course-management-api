
import { Purchase } from "./purchase.model";
import { IPurchase } from "./purchase.interface";

const createPurchase = async (payload: IPurchase) => {
  const purchase = await Purchase.create(payload);
  return purchase;
};

const getUserPurchases = async (userId: string) => {
  const purchases = await Purchase.find({ userId }).populate("courseId");
  return purchases;
};

export const PurchaseService = {
  createPurchase,
  getUserPurchases,
};
