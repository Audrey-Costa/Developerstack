import { Request, Response } from 'express';
import * as questionService from '../services/questionService';
import * as answerService from "../services/answerService"
import { IQuestionData } from '../types/questionTypes';

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

export async function getAnswersById(req: Request, res: Response) {
  const id: number = Number(req.params.id);
  const answers = await answerService.getAnswers(id);
  res.status(200).send(answers);
}
