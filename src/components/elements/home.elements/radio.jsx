import React, { useState, useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';



export default function RadioElement(props) {
    const { question: { id, questions, answerOptions }, getValue, clearnAll} = props;
    const [value, setValue] = useState('');

    useEffect(() => {
        if(clearnAll){
            setValue('')
        } 
    }, [clearnAll]) 

    const handleChange = e => {
        let val = e.target.value;
        getValue(id, val)
        setValue(val)
    };

    return (
        <div className="question-container">
            <div className="question-text-container">{questions}</div>
            <div className="question-entry-container">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                        {answerOptions.map((el, ind)=>{
                            return <FormControlLabel value={el.value} control={<Radio color="primary" />} key={el.type + ind} label={el.text} />
                        })}
                    </RadioGroup>
                </FormControl>
            </div>
        </div>
    );
}
