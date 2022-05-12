import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postRooms } from '../Redux/rooms/rooms';

function AddHouseForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [imageUrl, setImage] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newHouse = {
      name,
      price,
      description,
      country: Country.getCountryByCode(country).name,
      city,
      address,
      property_type: propertyType,
      image_url: imageUrl,
    };

    dispatch(postRooms(newHouse));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        type="text"
        placeholder="Apartment name"
        className="w-50 mb-3"
        onChange={(e) => setName(e.target.value)}
        required
      />

      <Form.Control
        type="number"
        placeholder="Price"
        className="w-50 mb-3"
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <Form.Control
        as="textarea"
        rows={3}
        placeholder="Description"
        className="w-50 mb-3"
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <Form.Control
        type="url"
        placeholder="Image url"
        className="w-75 mb-3"
        onChange={(e) => setImage(e.target.value)}
        required
      />

      <div className="text-center mb-5">
        <Button variant="success" className="theme-btn rounded" type="submit">
          Add Apartment
        </Button>
      </div>
    </Form>
  );
}

export default AddHouseForm;
