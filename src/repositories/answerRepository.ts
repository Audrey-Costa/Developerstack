import { prisma } from "../config/database"
import { TypeAnswerSchema } from "../types/answerTypes"

export async function createAnswer(answer: TypeAnswerSchema, id: number) {
    await prisma.answers.create({data: {answeredBy: answer.answeredBy, answer: answer.answer, question: {connect: { id }}}});
}

export async function getAnswers(id: number) {
    const answers = await prisma.questions.findFirst({where: { id }, include: {answers: true}});
    return answers;
}