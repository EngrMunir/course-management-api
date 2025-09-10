import { ICourse } from "./course.interface";
import { Course } from "./course.model";

const createCourseIntoDB = async(course:ICourse)=>{

    const result = await Course.create(course)

    return result;
}

const getAllCourseFromDB = async()=>{
    const result = await Course.find();
    return result;
}

const getSingleCourseFromDB = async(id:string) =>{
    const result = await Course.findById(id);
    return result;
}
const deleteCourseFromDB = async(id:string) =>{
    const result = await Course.findByIdAndDelete(id);
    return result;
}

export const CourseServices = {
    createCourseIntoDB,
    getAllCourseFromDB,
    getSingleCourseFromDB,
    deleteCourseFromDB,
}