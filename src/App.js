import React, { Component } from 'react';
import API from './services/dateAPI';
import DateButton from './components/DateButton';
import DateDisplay from './components/DateDisplay';

class App extends Component {
  constructor() {
    super();
    this.state= {
        day: null,
        month: null,
        year: null,
    };
  }

  handleButtonClick = () => {
    API.getAPIResponse()
    .then(
      (res) => {
        let date = res.data.date;
        let arr = date.split("-");
        this.setState({
          day: parseInt(arr[1]),
          month: parseInt(arr[0]),
          year: parseInt(arr[2])
        });
      },
      (error) => {
        this.setState({
          apiResponse: JSON.stringify(error)
        })
      }
    )
  }

  render() {
    return (
      <div>
        <center><h1>Date API</h1></center>
        <center><DateButton onClickButton={this.handleButtonClick}></DateButton></center>
        <DateDisplay
          day={this.state.day}
          month={this.state.month}
          year={this.state.year}></DateDisplay>
      </div>
    );
  }
}

export default App;
