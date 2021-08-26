import './App.css';
import React from "react";
import Botao from './Botao';

class Timer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      segundos: 0,
      minutos: 25,
      stop: false,
      nameStop: "Pause",
      interval: false
    }
  }

  countdown(){
    this.setState(
      (state) => {
        if(!this.state.stop){
          if(state.segundos === 0){
            this.zerar()
            this.countdownMinutes()
            if(state.minutos === 0 && state.interval === false){
              this.intervalo()
            }
            if(this.state.minutos < 0){
              this.setState({minutos: 25})
            }
          }
          return ({segundos: state.segundos - 1})
        }
      }
    )
  }

  zerar(){
    this.setState({segundos: 59})
  }

  countdownMinutes(){
    this.setState({minutos: this.state.minutos - 1})
  }

  zerarCountDown(){
    this.setState({
      segundos: 0,
      minutos: 25,
      stop: true
    })
  }
  stopTimer(){
    this.setState({
      stop: !this.state.stop
    }
    )
    if(this.state.stop){
      {this.setState({
        nameStop: "Pause"
      }) }
    }
    else{
      this.setState({
        nameStop: "Play"
      })
    }
  }
  intervalo(){
    this.setState({
      segundos: 0,
      minutos: 5,
      interval: !this.state.interval
    })
  }

  componentDidMount(){
    this.timer = setInterval( () => this.countdown(), 1000)
    
  }

  render(){
    return(
      <>
        <h1>{this.state.minutos}:{this.state.segundos}</h1>
        <Botao onClick={()=> {this.zerarCountDown()}} label="Zerar" />
        <Botao onClick={()=> {this.stopTimer()}} label={this.state.nameStop} />
      </>
    )
  }
}

export default Timer;
