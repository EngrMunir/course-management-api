import { model, Schema } from "mongoose";
import { ICourse } from "./course.interface";

const courseSchema = new Schema <ICourse>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    instructor: { type: String, required: true },
  },
  { timestamps: true }
);

export const Course = model<ICourse>('Course', courseSchema);