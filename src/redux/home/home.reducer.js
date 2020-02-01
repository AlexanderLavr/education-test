import * as type from './home.actions';

const initialState = {
    questions: [],
    answers: [],
    error: ''
}



export function homeReducer (state = initialState, action){
    switch (action.type){
        case type.SAVE_QUESTIONS:
            return {
                ...state, 
                questions: action.questions,
                error: ''
            }
        case type.SET_ANSWERS:
            return {
                ...state, 
                answers: action.answers
            }
        case type.SAVE_ERROR:
            return {
                ...state, 
                error: action.error
            }
        default:
          return {...state}
      }
}