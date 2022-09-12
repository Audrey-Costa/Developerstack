import { Request, Response } from 'express';
import * as questionService from '../services/questionService';
import * as answerService from "../services/answerService"
import { IQuestionData } from '../types/questionTypes';
import { TypeAnswerSchema } from '../types/answerTypes';

export async function createQuestion(req: Request, res: Response) {
  const question: IQuestionData = req.body;
  await questionService.createQuestion(question);
  res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
  const answer = req.body;
  const id = Number(req.params.id);
  await answerService.createAnswer(answer, id);
  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.findQuestions()
  res.status(200).send(questions);
}

export async function getById(req: Request, res: Response) {
  // TODO
}
