import express from "express";
import auth from "../../app/middleware/auth";
import { USER_ROLE } from "../User/user.constant";
import { PurchaseController } from "./purchase.controller";

const router = express.Router();

router.post(
  "/",
  auth(USER_ROLE.user),
  PurchaseController.purchaseCourse
);

router.get(
  "/my-purchases",
  auth(USER_ROLE.user),
  PurchaseController.getMyPurchases
);

export const PurchaseRoutes = router;
