import { Request, Response } from "express";
import httpStatus from "http-status";
import sendResponse from "../../app/utils/sendResponse";
import { PurchaseService } from "./purchase.service";

const purchaseCourse = async (req: Request, res: Response) => {
    const { courseId, amount } = req.body;
    const userId = (req.user as any)._id;

    const purchase = await PurchaseService.createPurchase({
      userId,
      courseId,
      amount,
      date: new Date(),
    });

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Course purchased successfully",
      data: purchase,
    });
};

const getMyPurchases = async (req: Request, res: Response) => {
    const userId = (req.user as any)._id;
    const purchases = await PurchaseService.getUserPurchases(userId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User purchases fetched successfully",
      data: purchases,
    });
};

export const PurchaseController = {
  purchaseCourse,
  getMyPurchases,
};
