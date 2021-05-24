import './App.css';
import React, { Component } from 'react'
import Clock from './components/Clock';

class App extends Component {

  state = {
    secondRatio : 0 ,
    minuteRatio : 0,
    hourRatio:0
  }

  componentDidMount(){
    setInterval(() => {
      this.setclock()
    }, 1000)
  }
  setclock = () => {

    const currentDate = new Date;
    let secondRatio = currentDate.getSeconds() / 60;
    let minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    let hourRatio = (minuteRatio + currentDate.getHours()) / 12;


    this.setState({
      secondRatio:secondRatio
    })
    this.setState({
      minuteRatio:minuteRatio
    })
    this.setState({
      hourRatio:hourRatio
    })
  }

  render() {
    return (
      <div className="App">
        <Clock 
        secondRatio = {this.state.secondRatio} 
        minuteRatio = {this.state.minuteRatio} 
        hourRatio ={this.state.hourRatio}/>
        <h1>What time is it ?</h1>
      </div>
    )
  }
}

export default App
