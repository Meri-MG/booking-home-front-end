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

  // const onSubmit = async (e) => {
  //   const token = getToken();
  //   e.preventDefault();
  //   await dispatch(CreateApartmentHandler(newApartment, token));
  //   await dispatch(getApartments(token));
  //   navigate('/Apartments');
  // };


  return (
    <div>
      <header>
        <h1>Add An Apartment</h1>
      </header>
      <div>
        <form onSubmit={(e) => onSubmit(e)}>
          <input type="text" className="form-control m-1" id="name" placeholder="Enter Name" name="name" onChange={(e) => handleChange(e)} style={divStyle} />
          <textarea rows="4" cols="50" type="text" className="form-control m-1" id="description" placeholder="Enter Description" name="description" onChange={(e) => handleChange(e)} style={divStyle} />
          <input type="text" className="form-control m-1" id="image" placeholder="Enter Image Url" name="image" onChange={(e) => handleChange(e)} style={divStyle} />
          <input type="text" className="form-control m-1" id="city" placeholder="Enter City" name="city" onChange={(e) => handleChange(e)} style={divStyle} />
          <input type="number" className="form-control m-1" id="capacity" placeholder="Enter capacity" name="capacity" onChange={(e) => handleChange(e)} style={divStyle} />
          <input type="number" className="form-control m-1" id="price" placeholder="Enter Price" name="price" onChange={(e) => handleChange(e)} style={divStyle} />
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary m-1">Submit</button>
          </div>
        </form>

      </div>

    </div>
  );
};

export default CreateApartment;
