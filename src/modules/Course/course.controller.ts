import { Request, Response } from "express";
import { CourseServices } from "./course.service";
import sendResponse from "../../app/utils/sendResponse";
import httpStatus from 'http-status';

const createCourseIntoDB = async(req:Request, res:Response) =>{
    const courseData = req.body;
    const result = await CourseServices.createCourseIntoDB(courseData);
 
    sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Course created successfully',
    data: result,
  });
}
const getAllCourseFromDB = async(req:Request, res:Response)=>{
    const result = await CourseServices.getAllCourseFromDB();
    sendResponse(res, {
        statusCode:httpStatus.OK,
        success:true,
        message:"Courses fetch successfully",
        data:result
    })
}
const getSingleCourseFromDB = async(req:Request, res:Response)=>{
    const { courseId } = req.params;
    const result = await CourseServices.getSingleCourseFromDB(courseId);
    sendResponse(res, {
        statusCode:httpStatus.OK,
        success:true,
        message:"Course fetches successfully",
        data:result
    })
}
const deleteCourseFromDB = async(req:Request, res:Response)=>{
    const { courseId } = req.params;
    const result = await CourseServices.deleteCourseFromDB(courseId);
    sendResponse(res, {
        statusCode:httpStatus.OK,
        success:true,
        message:"Course deleted successfully",
        data:result
    })
}

export const CourseController = {
    createCourseIntoDB,
    getAllCourseFromDB,
    getSingleCourseFromDB,
    deleteCourseFromDB
}