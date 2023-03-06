import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { currency, budget, dispatch } = useContext(AppContext);

    const [setBudget] = useState('');

    const submitEvent = () => {

        dispatch({
            type: 'SET_BUDGET',
            payload: this.budget,
        });

        if(this.budget > 10000) {
            alert("The value cannot exceed "+{currency}+"20000");
        return;
        }
        else {
            dispatch({
                type: 'SET_BUDGET',
                payload: budget,
            });
        }
    };
    
    return (
        <div className='alert alert-secondary'>
            <span>
                Budget: {currency}
                <input
                    required='required'
                    type='number'
                    max='20000'
                    id='budget'
                    step="10"
                    defaultValue={budget}
                    style={{ size: 10}}
                    onChange={(event) => setBudget(budget)}>
                </input>
            </span>
            <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
        </div>
    );
};
export default Budget;