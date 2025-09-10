import { Request, Response } from 'express';
import status from 'http-status';
import { UserServices } from './user.service';
import sendResponse from '../../app/utils/sendResponse';
import { catchAsync } from '../../app/utils/catchAsync';


const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.getAllUsersFromDB();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Users retrieved successfully',
    data: result,
  });
});


export const UserController = {
  getAllUsers,
};
