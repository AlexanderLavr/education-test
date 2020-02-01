
const countValueString = (questionAnswer, answerAnswer) => {
    let count = 0;
    if(questionAnswer === answerAnswer){
        count++
    }
    return count
}

const countValueArray = (questionAnswer, answerAnswer) => {
    let count = 0;
    for(let question of questionAnswer){
        for(let answer of answerAnswer){
            if(question === answer){
                count += 0.5
            }
        }
    }
    return count
}


export const countRighAnswers = (questions, answers) => {
    let rightAnswers = 0;
    questions.forEach(questions => {
        const answer = answers.filter(answers => questions.id === answers.id)[0];
        const questionAnswer = questions.answer;
        const answerAnswer = answer.answer;
        if(questions.type === 'checkbox'){
            rightAnswers += countValueArray(questionAnswer, answerAnswer)
        }else{
            rightAnswers += countValueString(questionAnswer, answerAnswer)
        }
    })
    return `${rightAnswers} из ${questions.length}`
}


export const accessControl = (answers, history) => {
    if(!answers.length){
        history.push('/')
    }
}