import React from 'react';
import Column from './column';

export default function Row(props) {
    const { mainQuestion, mainAnswers, yourAnswers } = props;
    return (
        <div className="result-row">
            <h3>{mainQuestion}</h3>
            <div className="container-result-column">
                <Column answers={mainAnswers}/>
                <Column answers={yourAnswers}/>
            </div>
        </div>
    );
}