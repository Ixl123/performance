import React from 'react';
import { Link } from 'react-router';
import CalculatorDropDownConnectionType from './CalculatorDropDownConnectionType.js';
import CalculatorSliderLoadingTime from './CalculatorSliderLoadingTime.js'
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


class Calculator extends React.Component {

  render() {
    const progress = this.props.progress;
    return (
      <div className="calculator">
        { progress.step === 0 ?
          <CalculatorDropDownConnectionType {...this.props}>
          </CalculatorDropDownConnectionType>
          : null }
        { progress.step === 1 ? <CalculatorSliderLoadingTime {...this.props}>
                                </CalculatorSliderLoadingTime> : null }
      </div>
    )
  }
}

export default Calculator;