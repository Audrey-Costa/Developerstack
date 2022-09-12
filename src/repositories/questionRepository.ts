import { prisma } from "../config/database"

export async function findQuestions(){
    const questions = await prisma.questions.findMany();
    return questions;
}