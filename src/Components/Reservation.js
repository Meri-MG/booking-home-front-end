import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { fetchRooms } from '../Redux/rooms/rooms';
import { postReservations } from '../Redux/reservations/reservation';

const Reservation = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [title, setTitle] = useState('Location');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  const rooms = useSelector((state) => state);
  const reservationPost = useSelector((state) => state.reservationsReducer);

  const { user_id: userId, apartment_id: apartmentId } = useParams();

  const [roomId, setRoomId] = useState(apartmentId);

  let image = '';
  
  rooms.roomsReducer.map((element) => {
    if (element.id === parseInt(roomId, 10)) {
      image = element.image_url;
      
    }
    return image;
  });

  const createReservation = () => {
    const postData = {
      booking:
      {
        user_id: parseInt(userId, 10),
        apartment_id: parseInt(roomId, 10),
        date: startDate.toLocaleDateString(),
      },
    };

    dispatch(postReservations(postData));
  };

  return (
    <>
      <div
        className="reservations-container"
        style={{
          backgroundImage: `linear-gradient(
          325deg,
          rgba(87, 111, 1, 0.777) 0%,
          rgba(150, 191, 2, 0.93) 100%
          ),url(${(image)})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="reservation-header-links">
          <Link to={`/${userId}`}><FaArrowLeft style={{ color: '#fff', fontSize: '1.2rem', margin: '5px' }} /></Link>
        </div>
        <div className="reservations-description">
          <div className="reservations-header">
            <h1>Book the place</h1>
          </div>
          <p>
            Pick a House to Reserve!
          </p>
          {
           parseInt(apartmentId, 10) === 0 && (
           <select
             onChange={(e) => setRoomId(e.target.value)}
             align="end"
             style={{
               outline: 'none',
               width: '95%',
               borderRadius: '2px',
             }}
             placeholder="Choose a House you want to reserve."
             id="dropdown-menu-align-end"
           >
             <option disabled selected>
               Choose a House you want to reserve
             </option>
             { rooms.roomsReducer.map((room) => (
               <option key={room.id} value={room.id}>
                 {room.name}
               </option>
             ))}
           </select>
           )
          }
          <div className="reservations-buttons">
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            <DropdownButton align="end" title={title} id="dropdown-menu-align-end">
              <Dropdown.Item eventKey="1" onClick={() => setTitle(location)}>{location}</Dropdown.Item>
            </DropdownButton>
            <button type="submit" onClick={createReservation} className="book-btn">Book now</button>
          </div>
          { reservationPost.payload && reservationPost.payload.status === 201
            && <p>Reservation was successful!</p>}
        </div>
      </div>
    </>
  );
};

export default Reservation;
