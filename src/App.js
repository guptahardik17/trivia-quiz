import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz from './components/Quiz';
import Result from './components/Result';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizQuestions: [],
      counter: 0,
      totalquestions: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: 0,
      result: ''
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  fetchUsers() {
    fetch(`https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`)
      .then(response => response.json())
      .then(data =>{
        data = data.results;
        var answers = data[0].incorrect_answers;
        answers.push(data[0].correct_answer);

        this.setState({
          quizQuestions: data,
          totalquestions: data.length,
          question: data[0].question,
          answerOptions: answers,
          answer: data[0].correct_answer,
          isLoading: false,
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentWillMount() {
    this.fetchUsers();
  }

  handleAnswerSelected(event) {
    event.preventDefault();

    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < this.state.totalquestions) {
        setTimeout(() => this.setNextQuestion(), 300);
    } else {
        setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    console.log(answer);
    if(answer === this.state.answer){
      this.setState({
          answersCount: this.state.answersCount+1
      });
    }
    else{
      this.setState({
          answersCount: this.state.answersCount
      });
    }
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    var answers = this.state.quizQuestions[counter].incorrect_answers;
    answers.push(this.state.quizQuestions[counter].correct_answer);

    this.setState({
        counter: counter,
        questionId: questionId,
        question: this.state.quizQuestions[counter].question,
        answerOptions: answers,
        answer: this.state.quizQuestions[counter].correct_answer
    });
  }

  getResults() {
    return this.state.answersCount;
  }

  setResults(result) {
      this.setState({ result: result.toString() });
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={this.state.totalquestions}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return (
      <Result quizResult={this.state.result} />
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {this.state.result ? this.renderResult() :this.renderQuiz()}
      </div>
    );
  }
}

export default App;
