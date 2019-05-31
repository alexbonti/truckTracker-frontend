import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './views/Home/Home'
//import { socketTruck } from './api/socketTrucks';
import { TruckGenerator } from './api/truckSimulator';
import openSocket from 'socket.io-client';
//const socket = openSocket('http://34.239.143.136:6001');
const socket = openSocket('localhost:6011');


class App extends Component {
  constructor(props) {
    super(props)
    this.updateTrucks = this.updateTrucks.bind(this)
    this.checkBoxes=this.checkBoxes.bind(this)
    this.state = {
      firstBox:false,
      trucks: [],
      boxes:[],
      missingBoxes:[],
      updateBoxTimestamp:0
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

  checkBoxes(){
    // var self=this.state
    // setInterval(function(){
    
    //   console.log('time',self.updateBoxTimestamp)
    //   //let time=Date.now()
    // },2000)
  }

  updateBoxes(boxes){
    if(this.state.firstBox==false){
      this.setState({firstBox:true})
      //this.checkBoxes(this.state)
    }
    let updateBoxTimestamp=Date.now();
    //console.log('timestamp',updateBoxTimestamp)
    this.setState({ boxes,updateBoxTimestamp})
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
        this.updateBoxes(boxes.boxes)
      })

    }



  componentDidMount() {
    this.initSocket()
    //setInterval(this.updateTrucks, 5000)
    var self = this;
    setInterval(function() {
      console.log(self.updateBoxTimestamp);
    }, 3000);

  }


  render() {
    //console.log(TruckGenerator())
    return (
      <div className="App">
        <Home trucks={this.state.trucks} boxes={this.state.boxes} />

      </div>
    );
  }
}

export default App;
