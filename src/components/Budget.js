import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BUDGET_MAX_VALUE = 20000;

const Budget = () => {
    const { currency, budget, expenses, dispatch } = useContext(AppContext);

    const onChangeBudgetHandler = (event) => {
        const enteredValue = Number(event.target.value);
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
    
        // check if the entered value is a number
        if (Number.isNaN(enteredValue)) {
          alert('Please enter a valid number.');
          return;
        }
    
        // check if the entered value is an integer number
        if (!Number.isInteger(enteredValue)) {
          alert('Please enter an integer number.');
          return;
        }
    
        if (enteredValue <= totalExpenses) {
            alert("The value cannot decrease below the current expenses of " +
            currency +
            totalExpenses);
            event.target.value = totalExpenses;

        } 
        if 
          (enteredValue >= BUDGET_MAX_VALUE) {
            alert('You cannot exceed the budget value of '+currency+BUDGET_MAX_VALUE+'.');
            event.target.value = BUDGET_MAX_VALUE;
          }
    
        
        dispatch({
        type: 'SET_BUDGET',
        payload: enteredValue,
          });
      };
    
    return (
        <div className='alert alert-secondary'
        >
            <span>
                Budget: {currency}
                <input
                    required='required'
                    type='number'
                    min='0'
                    max='20000'
                    id='budget'
                    step='10'
                    defaultValue={budget}
                    style={{ size: 10}}
                    onChange={onChangeBudgetHandler}>
                </input>
            </span>
        </div>
    );
};
export default Budget;