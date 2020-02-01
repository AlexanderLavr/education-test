import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Row from '../elements/result.elements/';
import * as pipes from '../../pipes';


class Result extends React.Component {
    state = {
        rightAnswers: ''
    }
    render(){
        const { rightAnswers } = this.state;
        const { questions, answers } = this.props;
        return(
            <div className="container container-result">
                <div className="result-row-header">
                    <h2>Правильные ответы</h2>    
                    <h2>Ваши ответы<span className="right-answers">{rightAnswers}</span></h2>
                </div>
                {questions.map((questions) => {
                    return (answers.map((answers, ind) => {
                        if(questions.id === answers.id){
                            return (
                                <Row 
                                    key={answers.type + ind} 
                                    mainQuestion={questions.questions}
                                    mainAnswers={questions.answer}
                                    yourAnswers={answers.answer}
                                />
                            )
                        }        
                    }))
                })}
            </div>
        )
    }
    componentDidMount(){
        const { questions, answers, history } = this.props;
        pipes.accessControl(answers, history)
        let rightAnswers = pipes.countRighAnswers(questions, answers)
        this.setState({ rightAnswers: rightAnswers })
    }
}

Result.propTypes = {
    answers: PropTypes.array.isRequired,
    questions: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired
}

const mapStateToProps = state => ({ 
    questions: state.questions,
    answers: state.answers
})

export default connect(mapStateToProps)(Result)