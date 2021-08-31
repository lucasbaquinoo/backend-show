import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import UsersController from '../controllers/UsersController';

const userRouter = Router();
const usersController = new UsersController();

userRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      // birth_date: Joi.date().max('now').required(),
      birth_date: Joi.string().pattern(new RegExp('^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$')).error(new Error('yyyy-mm-dd')),
      UF: Joi.string().required(),
      city: Joi.string().required(),
      scholarity: Joi.string().required()
    },
  }),
  usersController.create,
);

export default userRouter;
