import Joi from 'joi';
import { TypeAnswerSchema } from '../types/answerTypes';

export const answerSchema = Joi.object<TypeAnswerSchema>({
//export const answerSchema = Joi.object({
  answeredBy: Joi.string().required(),
  answer: Joi.string().required()
});
