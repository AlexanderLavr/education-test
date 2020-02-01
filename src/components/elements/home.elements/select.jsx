import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 190,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function SimpleSelect(props) {
    const classes = useStyles();
    const { question: { id, questions, answerOptions }, getValue, clearnAll } = props;
    const [value, setValue] = useState('')

    useEffect(()=>{
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
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id={`select${id}`}>Выберите ответ</InputLabel>
                    <Select
                    labelId={`select${id}`}
                    value={value}
                    onChange={handleChange}
                    labelWidth={125}
                    >
                        {answerOptions.map((element, ind) => {
                            return <MenuItem key={element.text + ind} value={element.value}>{element.text}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </div>
        </div>
    );
}