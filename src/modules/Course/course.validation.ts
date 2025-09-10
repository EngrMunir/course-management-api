import { z } from 'zod';

const createCourseValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Title is required' }),
    description: z.string({ required_error: 'Description is required' }),
    price: z.number({
      required_error: 'Price is required',
      invalid_type_error: 'Price must be a number',
    }).min(0, {message: 'Price must be 0 or greater'}),
    instructor: z.string({ required_error: 'Instructor is required' }),
  }),
});


export const CourseValidation = {
  createCourseValidationSchema
};