export const checkComplete = (questions, answers) => {
    for(let i in answers){
        if(!answers[i].length){
            delete answers[i]
        }
    }
    if(questions.length === Object.keys(answers).length){ 
        return true
    }
    return false
}

const getId = (value) => {
    const regExpr = /\d+/g;
    value = Number(value.match(regExpr)[0])
    return value
}

export const getArrAnswers = (answers, questions) => {
    for(let i of questions){
        if(!answers.hasOwnProperty(i.id)){
            answers[i.id] = '';
        }
    }
    const res = [];
    for(let i in answers){
        let newValue = {}
        newValue.id = getId(i);
        newValue.answer = answers[i];
        res.push(newValue)
    }
    return res
}