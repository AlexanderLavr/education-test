import { request } from '../../share/request';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const SAVE_QUESTIONS = 'SAVE_QUESTIONS';
export const SET_ANSWERS = 'SET_ANSWERS';
export const SAVE_ERROR = 'SAVE_ERROR';


export const saveQuestions = (questions) => {
    return { type: SAVE_QUESTIONS, questions};
}
export const saveError = (error) => {
    return { type: SAVE_ERROR, error };
}
export const setAnswers = (answers) => {
    return { type: SET_ANSWERS, answers };
}


export const getQuestions = () => {
    return async (dispatch) => {
        let questions =  await request('questions', 'GET');
        if(typeof questions === 'string'){
            return dispatch(saveError(questions))
        }
        dispatch(saveQuestions(questions))
    }
}