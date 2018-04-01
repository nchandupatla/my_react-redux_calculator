import React, { Component } from 'react';
import { connect } from 'react-redux';

import CalcInput from '../../components/calcInput/calcInput';
import CalcOutput from '../../components/calcOutput/calcOutput';
import * as actionTypes from '../../store/actions';
  
export class WebCalculator extends Component {
    render () {
        return (
            <div className="buttons">
             <CalcOutput value={this.props.results} />
             <div className="row">
             <CalcInput label="AC" value="clear" clicked={() => this.props.onClear()} />
             <CalcInput label="+" clicked={() => this.props.onOperation('+')} />
             <CalcInput label="-" clicked={() => this.props.onOperation('-')} />
             <CalcInput label="*" clicked={() => this.props.onOperation('*')} />
             </div>
             <div className="row">
             <CalcInput label="1" clicked={() => this.props.onInputNumber(1)} />
             <CalcInput label="2" clicked={() => this.props.onInputNumber(2)} />
             <CalcInput label="3" clicked={() => this.props.onInputNumber(3)} />
             <CalcInput label="/" clicked={() => this.props.onOperation('/')} />
             </div>
             <div className="row">
             <CalcInput label="4" clicked={() => this.props.onInputNumber(4)} />
             <CalcInput label="5" clicked={() => this.props.onInputNumber(5)} />
             <CalcInput label="6" clicked={() => this.props.onInputNumber(6)} />
             <CalcInput label="." clicked={() => this.props.onDotOperation()} />
             </div>
             <div className="row">
             <CalcInput label="7" clicked={() => this.props.onInputNumber(7)} />
             <CalcInput label="8" clicked={() => this.props.onInputNumber(8)} />
             <CalcInput label="9" clicked={() => this.props.onInputNumber(9)} />
             <CalcInput className="calc-button-long" label="=" clicked={() => this.props.onOperation('=')} />
             </div>
             <div className="row">
             <CalcInput label="0" clicked={() => this.props.onInputNumber(0)} />
              </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        results: state.calcReducer.displayValue,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onOperation: (value) => dispatch({type: actionTypes.OPERATION, val:value}),
        onInputNumber: (value) => dispatch({type: actionTypes.INPUT_NUMBER, val:value}),
        onDotOperation: () => dispatch({type: actionTypes.DOT_OPERATION}),
        onClear: () => dispatch({type: actionTypes.CLEAR})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WebCalculator);