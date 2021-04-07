import React from 'react';
import './Reservation.css';

const Reservation = ({ id, name, date, time, number }) => {
  return (
    <div id={id} className='reservation-card'>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of guests: {number}</p>
      <button className='cancel'>Cancel</button>
    </div>
  )

}


export default Reservation;
