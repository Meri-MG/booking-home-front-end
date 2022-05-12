import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AddHouseForm from './AddHouseForm';
import Response from './Response';

function AddHouse() {
  const houses = useSelector((state) => state.roomsReducer);
  const [show, setShow] = useState(true);

  return (
    <>
      <h1 className="text-center m-4">Adding Apartment</h1>
      <Container>
        {
        houses.status === 201 ? (
          <Response show={show} setShow={setShow} />
        ) : (
          <AddHouseForm />
        )
      }
      </Container>
    </>
  );
}

export default AddHouse;
