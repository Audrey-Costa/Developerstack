import * as questionRepository from '../repositories/questionRepository';

export async function findQuestions(){
    const questions = await questionRepository.findQuestions()
    if(questions.length === 0){
        throw {errorType: "not_found", message: "There are not questions yet. :("}
    }
    return questions
}