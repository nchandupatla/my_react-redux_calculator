import * as actionTypes from '../actions';
import CalculatorOperations from '../operations'

const initialState = {
    value: null,
    displayValue: '0',
    operator: null,
    waitingForOperand: false
};

const reducer = (state = initialState, action) => {
    
    let {
        value,
        operator,
        displayValue,
        waitingForOperand
    } = state;

    const displayInputValue = (state, action) => {
        if (state.waitingForOperand) {
            displayValue = String(action.val);
            waitingForOperand = false;
        } else {
            displayValue = state.displayValue === '0' ? String(action.val) : state.displayValue + action.val;
        }
        return {
            value: value,
            displayValue: displayValue,
            operator: operator,
            waitingForOperand: waitingForOperand
        }
    };

    const executeOperation = (state, action) => {
        const inputValue = parseFloat(state.displayValue);
        if (state.value == null) {
            value = inputValue;
        } else if (state.operator) {
            const currentValue = state.value || 0;
            const newValue = CalculatorOperations[state.operator](currentValue, inputValue);
            value = newValue;
            if (!isFinite(newValue)) {
                displayValue = '';
            } else {
                displayValue = String(parseFloat(newValue).toPrecision(4));
            }
        }
        waitingForOperand = true;
        operator = action.val;
        return {
            value: value,
            displayValue: displayValue,
            operator: operator,
            waitingForOperand: waitingForOperand
        }
    };

    const executeDotOperation = (state, action) => {
        if (!(/\./).test(state.displayValue)) {
            displayValue = state.displayValue + '.';
            waitingForOperand = false;
        }
        return {
            value: value,
            displayValue: displayValue,
            operator: operator,
            waitingForOperand: waitingForOperand
        }
    };

    switch (action.type) {
        case actionTypes.INPUT_NUMBER:
            return displayInputValue(state, action);
        case actionTypes.OPERATION:
            return executeOperation(state, action);
        case actionTypes.DOT_OPERATION:
            return executeDotOperation(state, action);
        case actionTypes.CLEAR:
            return initialState;
        default:
            return {
                value: value,
                displayValue: displayValue,
                operator: operator,
                waitingForOperand: waitingForOperand
            }
    }

};

export default reducer;