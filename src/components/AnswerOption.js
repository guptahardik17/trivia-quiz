
import React, { Component } from 'react';

class AnswerOption extends Component {


  render(){
  	return (
      <li className="answerOption">
        <input
  				type="radio"
  				name="radioGroup"
  				value={this.props.value}
  				onChange={this.props.onAnswerSelected}
  			/>
  			<label className="radioCustomLabel" htmlFor={this.props.value}>
  				{this.props.value}
  			</label>
  		</li>
  	);
  }
}



export default AnswerOption;
