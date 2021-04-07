import React, { Component } from 'react';
import './App.css';
import { fetchAllReservations } from '../API-Calls/API-Calls.js';
import Container from '../Container/Container.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

 componentDidMount() {
   fetchAllReservations()
   .then(response => response.json())
   .then(reservationData => {
     this.setState({ reservations: reservationData })
     console.log(this.state.reservations)
   })
 }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
         <Container reservations={this.state.reservations} />

        </div>
      </div>
    )
  }
}

export default App;
