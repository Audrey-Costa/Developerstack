export interface IAnswerData{
    answeredBy: string;
    answer: string
    questionId: number;
}

export type TypeAnswerSchema = Omit<IAnswerData, 'questionId'>