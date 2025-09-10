import auth from "../../app/middleware/auth";
import validateRequest from "../../app/middleware/validateRequest";
import { USER_ROLE } from "../User/user.constant";
import { CourseController } from "./course.controller";
import express from 'express';
import { CourseValidation } from "./course.validation";

const router = express.Router();

router.get('/',
    auth(USER_ROLE.user), 
    CourseController.getAllCourseFromDB)
    
router.get('/:courseId',
    auth(USER_ROLE.user), 
    CourseController.getSingleCourseFromDB)

router.post('/', 
    auth(USER_ROLE.admin),
    validateRequest(CourseValidation.createCourseValidationSchema),
    CourseController.createCourseIntoDB)

router.delete('/:courseId',
    auth(USER_ROLE.admin), 
    CourseController.deleteCourseFromDB)

export const CourseRoutes = router;