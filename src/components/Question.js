
import React, { Component } from 'react';


class Question extends Component {
  render(){
  	return (
  		<h2 className="question">{this.props.content}</h2>
  		);
  }
}

export default Question;
