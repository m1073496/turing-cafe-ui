import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      Name: '',
      Date: '',
      Time: '',
      Number: null
    }
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='Name'


        />

        <input
          type='text'
          placeholder='Date (mm/dd)'
          name='Date'


        />

        <input
          type='text'
          placeholder='Time'
          name='Time'



        />

        <input
          type='text'
          placeholder='Number of guests'
          name='Number'


        />

        <button>Make Reservation</button>
      </form>
    )
  }
}






export default Form;
