
import React, { Component } from 'react';

class QuestionCount extends Component {
  render(){
  	return (
  		<div>
  			Question <span>{this.props.counter}</span> of <span>{this.props.total}</span>
  		</div>

  	);
  }
}


export default QuestionCount;
