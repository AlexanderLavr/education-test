import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';

export default function Input (props) {
    const { question: { id, questions }, getValue, clearnAll } = props;
    const [value, setValue] = useState('')
 
    useEffect(() => {
        if(clearnAll){
            setValue('')
        } 
    }, [clearnAll])
    

    const inputHandler = (e) => {
        let val = e.target.value;
        getValue(id, val)
        setValue(val)
    }

    return (
        <div className="question-container">
            <div className="question-text-container">{questions}</div>
            <div className="question-entry-container">
                <TextField  
                    variant="outlined" 
                    value={value}
                    onChange={inputHandler}
                />
            </div>
        </div>
    );
  }
  