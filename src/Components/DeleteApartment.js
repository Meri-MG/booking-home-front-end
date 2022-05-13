import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeApartment } from '../Redux/Apartments/Apartments';

const DeleteApartment = () => {
  const apartments = useSelector((state) => state.Apartments.apartments);
  const dispatch = useDispatch();

  return (
    <div className="h-full min-h-screen bg-main-color bg-cover flex flex-col">
      <h2 className="text-3xl text-white text-center font-semibold p-9">Delete Apartments</h2>
      {apartments?.map((apartment) => (
        <article
          key={apartment.apartment}
          className="flex justify-evenly items-center rounded shadow-sm hover:scale-105 hover:shadow-md transition-transform bg-white p-2 mr-8 ml-8 mb-4"
        >
          <h3 className="text-xl font-semibold">{apartment.name}</h3>
          <button
            className="text-center text-white bg-red-500 hover:bg-red-600 active:bg-red-700 transition-colors p-3 rounded-xl font-semibold"
            type="button"
            onClick={() => dispatch(removeApartment(apartment.apartment))}
          >
            Delete Apartment
          </button>
        </article>
      ))}
    </div>
  );
};

export default DeleteApartment;
