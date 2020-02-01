import React, { useState, useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


export default function CheckboxesGroup(props) {
  const { question: { id, questions, answerOptions }, getValue, clearnAll } = props;
  const [arrCategory, setArrCategory] = useState([]);
  const [state, setState] = useState({});
  
  
  useEffect(() => {
    if(clearnAll){
      let initialSate = setinitialState()
      setState(initialSate)
    } 
  }, [clearnAll]) 

  useEffect(() => {
    let initialSate = setinitialState()
    setState(initialSate)
  }, [answerOptions])
    
  useEffect(() => {
    const arr = [];
    for(let i in state){
      arr.push(i)
    }
    setArrCategory(arr)

    return checkAnwers()
  }, [state])

  const checkAnwers = () => {
    const arr = [];
    for(let i in state){
      if(state[i]){
        arr.push(i)
      }
    }
    getValue(id, arr)
  }

  const setinitialState = () => {
    let initialSate = {}
    answerOptions.map(el => {
        return initialSate[el.value] = false
    });
    return initialSate
  }

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div className="question-container">
      <div className="question-text-container">{questions}</div>
      <div className="question-entry-container">
        <FormControl component="fieldset">
          <FormGroup>
            {arrCategory.map((category, ind) => {
              return (
                <FormControlLabel
                  control={<Checkbox color="primary" checked={state[category]} onChange={handleChange(category)} value={category} />}
                  label={category}
                  key={category + ind}
                />
              )
            })}
          </FormGroup>
        </FormControl>
      </div>
    </div>
  );
}
