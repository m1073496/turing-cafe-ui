import React from 'react';
import Reservation from '../Reservation/Reservation.js';
import './Container.css';

const Container = ({ reservations }) => {
  return reservations.map(reservation => {
    return (
      <Reservation
        key={reservation.id}
        id={reservation.id}
        name={reservation.name}
        date={reservation.date}
        time={reservation.time}
        number={reservation.number}
      />
    )
  })
}





export default Container;
