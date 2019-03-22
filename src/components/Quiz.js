
import React, { Component } from 'react';

import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Quiz extends Component {

  constructor(props) {
    super(props);
    this.renderAnswerOptions = this.renderAnswerOptions.bind(this);
  }

  renderAnswerOptions(key) {
		return (
      <AnswerOption
        key={key}
        value={key}
        onAnswerSelected={this.props.onAnswerSelected}
      />
		);
	}

render(){
  	return(
  			<ReactCSSTransitionGroup
  			className="container"
  			component="div"
  			transitionName="fade"
  			transitionEnterTimeout={800}
  			transitionLeaveTimeout={500}
  			transitionAppear
  			transitionAppearTimeout={500}
  		>

    		<div className="quiz">
    			<QuestionCount
    				counter={this.props.questionId}
    				total={this.props.questionTotal}
    			/>

    			<Question content={this.props.question} />
    			<ul className="answerOptions">
  					{this.props.answerOptions.map(this.renderAnswerOptions)}
    			</ul>
    		</div>

			</ReactCSSTransitionGroup>
  	);
  }
}



export default Quiz;
