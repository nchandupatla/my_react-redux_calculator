import React from 'react';

import './calcInput.css';
import { Button } from 'react-mdl';

const calcInput = (props) => (
    <Button className="calc-button op-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" 
           onClick={props.clicked}>
        {props.label}
    </Button>
);

export default calcInput;