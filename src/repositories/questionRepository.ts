import { prisma } from "../config/database"
import { IQuestionData } from "../types/questionTypes";

export async function findQuestions(){
    const questions = await prisma.questions.findMany();
    return questions;
}

export async function createQuestion(question: IQuestionData) {
    await prisma.questions.create({data: {askedBy: question.askedBy, question: question.question}})
}