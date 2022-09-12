import * as questionRepository from '../repositories/questionRepository';
import { IQuestionData } from '../types/questionTypes';

export async function findQuestions(){
    const questions = await questionRepository.findQuestions()
    if(questions.length === 0){
        throw {type: "not_found", message: "There are not questions yet. :("}
    }
    return questions
}

export async function createQuestion(question: IQuestionData){
    await questionRepository.createQuestion(question)
}