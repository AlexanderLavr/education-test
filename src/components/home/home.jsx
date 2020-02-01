import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getQuestions, setAnswers } from '../../redux/home/home.actions';
import Button from '@material-ui/core/Button';
import * as Element from '../elements/home.elements';
import * as pipes from '../../pipes';



class Home extends React.Component {
    state = {
        value: {},
        clearnAll: false,
        openModal: false
    }
    getValue = (key, val) => {
        this.setState({ value: { ...this.state.value, [key]: val }, clearnAll: false})
    }
    clearnAll(){
        this.setState({ clearnAll: !this.state.clearnAll, value: {} })
    }
    closeModal = () => {
        this.setState({ openModal: false })
    }
    complete(){
        const { value } = this.state;
        const { questions, history } = this.props;
        let complete = pipes.checkComplete(questions, value, history);
        if(!complete){
            this.setState({ openModal: true })
        }else{
            this.setAnswers()
        }
        
    }
    setAnswers = () => {
        const { setAnswers, history, questions } = this.props;
        const { value } = this.state;
        const res = pipes.getArrAnswers(value, questions);
        setAnswers(res)
        history.push('/result')
    }
    render(){
        const { clearnAll, openModal } = this.state;
        const { questions, error } = this.props;
        if(error){
            return <h1 className="error">{error}</h1>
        }
        return(
            <div>
                <Element.Modal 
                    openModal={openModal} 
                    closeModal={this.closeModal} 
                    setAnswers={this.setAnswers}
                />
                <div className="container home-container">
                    {questions.map((el, ind)=>{
                        switch(el.type){
                            case 'input':
                                return <Element.Input
                                    key={el.type + ind}
                                    type={el.type}
                                    question={el}
                                    clearnAll={clearnAll}
                                    getValue={this.getValue}
                                    />
                            case 'radio':
                                return <Element.Radio 
                                    key={el.type + ind}
                                    type={el.type}
                                    question={el}
                                    clearnAll={clearnAll}
                                    getValue={this.getValue}
                                    />
                            case 'checkbox':
                                return <Element.Checkbox
                                    key={el.type + ind}
                                    type={el.type}
                                    question={el}
                                    clearnAll={clearnAll}
                                    getValue={this.getValue}
                                    />
                            case 'select':
                                return <Element.Select 
                                    key={el.type + ind}
                                    type={el.type}
                                    question={el}
                                    clearnAll={clearnAll}
                                    getValue={this.getValue}
                                    />
                            default:
                                return null
                        }
                    })}
                    <div className="button-container">
                        <Button variant="contained" color="primary" onClick={()=>this.clearnAll()}>Clearn all</Button>
                        <Button variant="contained" color="primary" onClick={()=>this.complete()}>Complete</Button>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        const { getQuestions } = this.props;
        getQuestions()
    }
}

Home.propTypes = {
    history: PropTypes.object.isRequired,
    getQuestions: PropTypes.func.isRequired,
    setAnswers: PropTypes.func.isRequired,
    questions: PropTypes.array.isRequired,
    error: PropTypes.string
}

const mapStateToProps = state => ({ 
    questions: state.questions,
    error: state.error
})

export default connect(
    mapStateToProps,
    { getQuestions, setAnswers }
)(Home)