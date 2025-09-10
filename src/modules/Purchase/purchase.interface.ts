import mongoose from "mongoose";

export interface IPurchase{
  userId: mongoose.Types.ObjectId;
  courseId: mongoose.Types.ObjectId;
  amount: number;
  date?: Date;
}