import { Request, Response } from 'express';
import * as questionService from '../services/questionService';
import { IQuestionData } from '../types/questionTypes';

export async function createQuestion(req: Request, res: Response) {
  const question: IQuestionData = req.body;
  await questionService.createQuestion(question);
  res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
  // TODO
}

export async function get(req: Request, res: Response) {
  const questions = await questionService.findQuestions()
  res.status(200).send(questions);
}

export async function getById(req: Request, res: Response) {
  // TODO
}
