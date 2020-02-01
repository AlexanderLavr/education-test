import React from 'react';



export default function Column(props) {
    const { questions, answers } = props;
    return (
        <div className="result-column">
            <h3>{questions}</h3>
            {(typeof answers === 'string')? 
                (answers === '' ? <p> - нет ответа(ов)</p> : <p> - {answers}</p>) :
                (answers.map((el, ind) => {
                    return (
                        <p key={el + ind}> - {el}</p>
                    )
                }))
            }
        </div>
    );
}
