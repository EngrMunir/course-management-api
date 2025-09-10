import { Router } from "express";
import { AuthRoutes } from "../../modules/Auth/auth.route";
import path from "path";
import { CourseRoutes } from "../../modules/Course/course.route";
import { PurchaseRoutes } from "../../modules/Purchase/purchase.route";
import { UserRoutes } from "../../modules/User/user.route";

const router = Router();

const moduleRoutes = [
    {
        path:'/auth',
        route:AuthRoutes
    },
    {
        path:'/user',
        route:UserRoutes
    },
    {
        path:'/course',
        route:CourseRoutes
    },
    {
        path:'/purchase',
        route:PurchaseRoutes
    }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router;