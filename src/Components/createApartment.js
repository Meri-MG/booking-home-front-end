/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CreateApartmentHandler, getItems } from '../../api/items';
import { getToken } from '../../utils/sessionHelper';

const CreateApartment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [newApartment, setNewApartment] = useState({
    name: '',
    capacity: '',
    description: '',
    price: '',
    city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewApartment({ ...newApartment, [name]: value });
  };

  const onSubmit = async (e) => {
    const token = getToken();
    e.preventDefault();
    await dispatch(CreateApartmentHandler(newApartment, token));
    await dispatch(getApartments(token));
    navigate('/Apartments');
  };


  return (
    <div>
      <header>
        <h1>Add An Apartment</h1>
      </header>
      <div>
        <form onSubmit={(e) => onSubmit(e)}>
          <input type="text"  id="name" placeholder="Enter Name" name="name" onChange={(e) => handleChange(e)}  />
          <textarea rows="4" cols="50" type="text" id="description" placeholder="Enter Description" name="description" onChange={(e) => handleChange(e)}  />
          <input type="text" id="image" placeholder="Enter First Image Url" name="image" onChange={(e) => handleChange(e)}  />
          <input type="text" id="image" placeholder="Enter Second Image Url" name="image" onChange={(e) => handleChange(e)}  />
          <input type="text" id="image" placeholder="Enter Third Image Url" name="image" onChange={(e) => handleChange(e)}  />
          <input type="text" id="city" placeholder="Enter City" name="city" onChange={(e) => handleChange(e)}  />
          <input type="number" id="capacity" placeholder="Enter capacity" name="capacity" onChange={(e) => handleChange(e)}  />
          <input type="number" id="price" placeholder="Enter Price" name="price" onChange={(e) => handleChange(e)}  />
          <div>
            <button type="submit" >Submit</button>
          </div>
        </form>

      </div>

    </div>
  );
};

export default CreateApartment;
