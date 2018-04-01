import React from 'react';

import './calcOutput.css';

const calcOutput = (props) => (
        <div className="row">
        <div className="mdl-textfield mdl-js-textfield">
          <input id="calc-output" className="mdl-textfield__input" type="text" value={parseFloat(props.value)}  disabled />
        </div>
      </div>
);

export default calcOutput;