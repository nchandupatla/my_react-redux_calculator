import reducer from './calcReducer';
import * as actionTypes from '../actions';

describe('calc reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            value: null,
            displayValue: '0',
            operator: null,
            waitingForOperand: false
        });
    });

    it('should return updated display value', () => {
        expect(reducer({
            value: null,
            displayValue: '0',
            operator: null,
            waitingForOperand: false
        }, { 
            type: actionTypes.INPUT_NUMBER,
            val:'22'
         })).toEqual({
            value: null,
            displayValue: '22',
            operator: null,
            waitingForOperand: false
        });
    })

    it('should return add display value- case 1', () => {
        expect(reducer({
            value: '22',
            displayValue: '22',
            operator: null,
            waitingForOperand: true
        }, { 
            type: actionTypes.OPERATION,
            val:'+'
         })).toEqual({
            value: '22',
            displayValue: '22',
            operator: '+',
            waitingForOperand: true
        });
    })

    it('should return add display value- case 2', () => {
        expect(reducer({
            value:22,displayValue:22,operator:'+',waitingForOperand:false
        }, { 
            type: actionTypes.OPERATION,
            val:'+'
         })).toEqual({
            value: 44,
            displayValue: '44.00',
            operator: '+',
            waitingForOperand: true
        });
    })

    it('should return sub display value correctly', () => {
        expect(reducer({
            value:22,displayValue:2,operator:'-',waitingForOperand:false
        }, { 
            type: actionTypes.OPERATION,
            val:'-'
         })).toEqual({
            value: 20,
            displayValue: '20.00',
            operator: '-',
            waitingForOperand: true
        });
    })

    it('should return multiply display value correctly', () => {
        expect(reducer({
            value:2,displayValue:2,operator:'*',waitingForOperand:false
        }, { 
            type: actionTypes.OPERATION,
            val:'*'
         })).toEqual({
            value: 4,
            displayValue: '4.000',
            operator: '*',
            waitingForOperand: true
        });
    })

    it('should return divided display value correctly', () => {
        expect(reducer({
            value:2,displayValue:2,operator:'/',waitingForOperand:false
        }, { 
            type: actionTypes.OPERATION,
            val:'/'
         })).toEqual({
            value: 1,
            displayValue: '1.000',
            operator: '/',
            waitingForOperand: true
        });
    })

    it('should return divided add value correctly', () => {
        expect(reducer({
            value:2.1,displayValue:2.1,operator:'+',waitingForOperand:false
        }, { 
            type: actionTypes.OPERATION,
            val:'+'
         })).toEqual({
            value: 4.2,
            displayValue: '4.200',
            operator: '+',
            waitingForOperand: true
        });
    })

    it('should return nan value correctly', () => {
        expect(reducer({
            value:2.1,displayValue:0,operator:'/',waitingForOperand:false
        }, { 
            type: actionTypes.OPERATION,
            val:'/'
         })).toEqual({
            value: Infinity,
            displayValue: '',
            operator: '/',
            waitingForOperand: true
        });
    })
});
