import React from 'react';
import Reservation from '../Reservation/Reservation.js';

const Container = ({ reservations }) => {
  return reservations.map(reservation => {
    return (
      <Reservation
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
