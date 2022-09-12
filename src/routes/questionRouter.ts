import { Router } from 'express';
import {
  createAnswer,
  createQuestion,
  get,
  getAnswersById
} from '../controllers/questionController';
import { answerSchema } from '../schemas/answerSchema';
import { questionSchema } from '../schemas/questionSchema';
import { validateSchemaMiddleware } from './../middlewares/validateSchema';

const questionRouter = Router();

questionRouter.get('/questions', get);

questionRouter.get('/questions/:id', getAnswersById);

questionRouter.post(
  '/questions',
  validateSchemaMiddleware(questionSchema),
  createQuestion
);

questionRouter.post(
  '/questions/:id/answers',
  validateSchemaMiddleware(answerSchema),
  createAnswer
);

export default questionRouter;
