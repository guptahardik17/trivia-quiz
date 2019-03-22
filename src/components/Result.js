import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Result extends Component {
  gameRestart(e){
    e.preventDefault();
    window.location.reload();
  }
  render(){
  	return (
  		<ReactCSSTransitionGroup
  			className="container result"
  			component ="div"
  			transitionName="fade"
  			transitionEnterTimeout={800}
  			transitionLeaveTimeout={500}
  			transitionAppear
  			transitionAppearTimeout={500}
  		>
  			<div>
  				You scored <strong>{this.props.quizResult}</strong>!
          <br /><br />
          <button value="REPLAY" onClick={this.gameRestart}>REPLAY</button>
  			</div>
  		</ReactCSSTransitionGroup>
  	);
  }
}


export default Result;
