export const fetchAllReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then(reservationData => reservationData)
}
