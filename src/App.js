import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './views/Home/Home'
//import { socketTruck } from './api/socketTrucks';
import { TruckGenerator } from './api/truckSimulator';
import openSocket from 'socket.io-client';
const socket = openSocket('http://34.239.143.136:6001');
//const socket = openSocket('localhost:6001');


class App extends Component {
  constructor(props) {
    super(props)
    this.updateTrucks = this.updateTrucks.bind(this)
    this.timerTime = this.timerTime.bind(this)
    this.state = {
      firstBox:false,
      trucks: [],
      boxes:[],
      missingBoxes:[],
      updateBoxTimestamp:0,
      missingBox:false
    }

  }
  updateTrucks(trucks) {
    //console.log('hit ')
    //console.log(trucks.trucks)
    //let trucksG= TruckGenerator(4);
    //console.log('gen',trucksG)
    this.setState({ trucks })
    // console.log('App State',this.state)

  }

  timerTime(){
    let timer = Date.now()
    console.log(timer,this.state.updateBoxTimestamp)
    if(timer-this.state.updateBoxTimestamp>300){
      console.log("box missing")
      this.setState({missingBox:true})
    }
  }

  updateBoxes(boxes){
    if(this.state.firstBox==false){
      this.setState({firstBox:true})
      //this.checkBoxes(this.state)
    }
    let updateBoxTimestamp=Date.now();
    //console.log('timestamp',updateBoxTimestamp)
    this.setState({ boxes,updateBoxTimestamp,missingBox:false})
    console.log('App State',this.state.updateBoxTimestamp)
}



initSocket(){
      socket.on('connect', () => {
        console.log('connected')
      })
      socket.on('trucks', (trucks) => {
       // console.log(trucks.trucks)
        this.updateTrucks(trucks.trucks)
      })

      socket.on('boxes', (boxes) => {
        console.log('boxes',boxes)
        if(boxes.boxes[0].id == "06649F1A-51EC-40C2-BAE0-D1C063EAE3BB"){
          this.updateBoxes(boxes.boxes)
        }
      })

    }



  componentDidMount() {
    this.initSocket()
    //setInterval(this.updateTrucks, 5000)
    setInterval(this.timerTime, 30000);
  }


  render() {
    //console.log(TruckGenerator())
    return (
      <div className="App">
        <Home trucks={this.state.trucks} boxes={this.state.boxes} missingBox={this.state.missingBox}/>

      </div>
    );
  }
}

export default App;
