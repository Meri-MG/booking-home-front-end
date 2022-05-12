import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations } from '../Redux/reservations/reservation';
import { fetchRooms } from '../Redux/rooms/rooms';
import SingleReservation from './SingleReservation';
import { deleteReservation } from '../Redux/reservations/deleteReservation';

const UserReservations = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.roomsReducer);
  const { reservations } = useSelector((state) => state.reservationsReducer);
  const deletedRes = useSelector((state) => state.deleteReservationReducer);
  const userId = parseInt(localStorage.getItem('userId'), 10);

  useEffect(() => {
    dispatch(fetchRooms());
    dispatch(fetchReservations());
  }, [deletedRes]);

  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deleteReservation(id));
    dispatch(fetchRooms());
  };

  return (
    <>
      <h1 className="text-center m-4">Reservations</h1>
      <div className="reservations-container">
        {
         reservations[0] && reservations[0].map((reservation) => (
           reservation.user_id === parseInt(userId, 10)
            && (
              <div key={reservation.id} className="reservation">
                <Card>
                  <Card.Header as="h5">
                    Reservation #
                    {reservation.id}
                  </Card.Header>
                  <Card.Body>
                    <SingleReservation
                      rooms={rooms}
                      reservation={reservation}
                      key={reservation.id}
                    />
                    <div className="d-flex justify-content-end">

                      <button type="submit" variant="primary" onClick={(e) => handleDelete(e, reservation.id)} className="btn btn-danger">Cancel the reservation</button>

                    </div>
                  </Card.Body>
                </Card>
              </div>
            )
         ))
        }
      </div>
    </>
  );
};

export default UserReservations;
