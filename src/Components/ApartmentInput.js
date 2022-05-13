import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendApartmentToAPI } from '../Redux/Apartments/Apartments';

const ApartmentInput = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [image3, setImage3] = useState('');
  const [housePrice, setHousePrice] = useState();
  const [rentalPrice, setRentalPrice] = useState();
  const [period, setPeriod] = useState();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.LogIn.user);
  const submitApartmentToStore = (e) => {
    e.preventDefault();
    const apartment = {
      name,
      location,
      description,
      image1,
      image2,
      image3,
      rental_price: rentalPrice,
      house_price: housePrice,
      period,
      user_id: user.id,
    };

    dispatch(sendApartmentToAPI(apartment));
    setName('');
    setDescription('');
    setLocation('');
    setImage1('');
    setImage2('');
    setImage3('');
    setHousePrice('');
    setRentalPrice('');
    setPeriod('');
  };

  return (
    <div className="mt-20 mx-8">
      <h2 className="text-[#1F99DD] text-center font-bold w-full max-w-lg m-auto">ADD NEW APARTMENT</h2>
      <form className="w-full max-w-lg m-auto py-10 mt-10 px-10 border rounded">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          name="name"
          className="border-solid border-gray-300 border my-2 py-2 px-4 w-full
          rounded text-gray-700 focus:ring-[#1F99DD] focus:border-[#1F99DD] outline-0"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="textarea"
          placeholder="Enter Description"
          value={description}
          name="description"
          className="border-solid border-gray-300 border my-2 py-2 px-4 w-full
          rounded text-gray-700 focus:ring-[#1F99DD] focus:border-[#1F99DD] outline-0"
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter Location"
          value={location}
          name="location"
          className="border-solid border-gray-300 border my-2 py-2 px-4 w-full
          rounded text-gray-700 focus:ring-[#1F99DD] focus:border-[#1F99DD] outline-0"
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image url front"
          value={image1}
          name="image1"
          className="border-solid border-gray-300 border my-2 py-2 px-4 w-full
          rounded text-gray-700 focus:ring-[#1F99DD] focus:border-[#1F99DD] outline-0"
          onChange={(e) => setImage1(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image url back"
          value={image2}
          name="image2"
          className="border-solid border-gray-300 border my-2 py-2 px-4 w-full
          rounded text-gray-700 focus:ring-[#1F99DD] focus:border-[#1F99DD] outline-0"
          onChange={(e) => setImage2(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image url interior"
          value={image3}
          name="image3"
          className="border-solid border-gray-300 border my-2 py-2 px-4 w-full
          rounded text-gray-700 focus:ring-[#1F99DD] focus:border-[#1F99DD] outline-0"
          onChange={(e) => setImage3(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Enter Rental Price"
          value={rentalPrice}
          name="rentalPrice"
          className="border-solid border-gray-300 border my-2 py-2 px-4 w-full
          rounded text-gray-700 focus:ring-[#1F99DD] focus:border-[#1F99DD] outline-0"
          onChange={(e) => setRentalPrice(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Enter House Price"
          value={housePrice}
          name="housePrice"
          className="border-solid border-gray-300 border my-2 py-2 px-4 w-full
          rounded text-gray-700 focus:ring-[#1F99DD] focus:border-[#1F99DD] outline-0"
          onChange={(e) => setHousePrice(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Enter Period of stay"
          value={period}
          name="period"
          className="border-solid border-gray-300 border my-2 py-2 px-4 w-full
          rounded text-gray-700 focus:ring-[#1F99DD] focus:border-[#1F99DD] outline-0"
          onChange={(e) => setPeriod(e.target.value)}
          required
        />
        <button
          type="button"
          className="mt-4 w-full border shadow py-3 px-6 font-semibold text-md rounded bg-[#96bf01] text-[#fdfcf7] border-2 border-transparent hover:bg-[#fdfcf7] hover:text-[#96bf01] hover:border-2 hover:border-[#96bf01] transition-color ease-in-out uppercase"
          onClick={submitApartmentToStore}
        >
          Add an Apartment
        </button>
      </form>
    </div>
  );
};

export default ApartmentInput;
