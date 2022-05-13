import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getApartmentDetails } from '../Redux/Details/Details';
import { reserveApartment } from '../Redux/Apartments/Apartments';

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const apartment = useSelector((state) => state.Details);
  const user = useSelector((state) => state.LogIn.user);

  const {
    name, description, location, price, period,
  } = apartment;

  useEffect(() => {
    dispatch(getApartmentDetails(id));
  }, []);

  const onClick = ((e) => {
    const user_id = user.id;
    const apartment_id = id;
    if (e.target.value === 'reserve') {
      const favourite = true;
      dispatch(reserveApartment({ user_id, favourite, apartment_id }));
      dispatch(getApartmentDetails(id));
    } else if (e.target.value === 'unreserve') {
      const favourite = false;
      dispatch(reserveApartment({ user_id, favourite, apartment_id }));
      dispatch(getApartmentDetails(id));
    }
  });

  return (
    <>
      <div
        className="container mx-auto flex flex-col bg-[#fdfcf7] rounded py-8"
        key={name}
      >
        <div className="w-full mx-auto flex flex-col justify-center align-center my-8 lg:flex-row md:justify-between">
          <div className="w-80 mx-auto md:w-1/2 md:shrink-0 flex justify-center align-center">
            <img
              src={apartment?.images?.front}
              alt=""
              className="w-full h-80 md:h-full p-1 bg-white border rounded max-w-sm transition-shadow ease-in-out duration-300 shadow-none hover:shadow-2xl cursor-pointer"
            />
          </div>
          <div className="w-80 mx-auto md:w-1/2 flex flex-col justify-center align-start text-[#555555]">
            <h1 className="w-80 text-center text-2xl font-bold text-[#1F99DD] my-3">
              {name}
            </h1>
            <p className="w-80 mb-3">{description}</p>
            <p className="mb-3">
              <span className="font-bold">City:</span>
              {location}
            </p>
            <p className="mb-3">
              <span className="font-bold">Available From: </span>
              2022-09-28
            </p>
            <p className="mb-3">
              <span className="font-bold">Monthly Rent: $</span>
              {price}
            </p>
            <p className="mb-3">
              <span className="font-bold">Total Fee/Month: $</span>
              {price * period}
            </p>
            {apartment?.reserved === true
              ? (
                <button
                  type="button"
                  value="unreserve"
                  onClick={onClick}
                  className="w-80 bg-red-500 text-[#fdfcf7] border-2 border-transparent hover:bg-[#fdfcf7] hover:text-red-500 hover:border-2 hover:border-red-500 transition-color ease-in-out text-sm px-3 py-3 rounded uppercase"
                >
                  Remove from Reserved
                </button>
              )
              : (
                <button
                  type="button"
                  value="reserve"
                  onClick={onClick}
                  className="w-80 bg-[#96bf01] text-[#fdfcf7] border-2 border-transparent hover:bg-[#fdfcf7] hover:text-[#96bf01] hover:border-2 hover:border-[#96bf01] transition-color ease-in-out text-sm px-3 py-3 rounded uppercase"
                >
                  Reserve an apartment
                </button>
              )}
          </div>
        </div>
        <div>
          <h2 className="w-80 mx-auto text-center text-2xl font-bold text-[#1F99DD] my-3">
            Interior
          </h2>
        </div>
        <div className="w-full mx-auto flex flex-col justify-center align-start my-8 lg:flex-row md:justify-between">
          <div className="w-80 lg:96 mx-auto md:shrink-0 mb-8">
            <img
              className="w-full h-64 p-1 bg-white border rounded max-w-sm transition-shadow ease-in-out duration-300 shadow-none hover:shadow-2xl cursor-pointer"
              src={apartment?.images?.back}
              alt="interior 1"
            />
          </div>
          <div className="w-80 mx-auto md:shrink-0 mb-8 lg:pl-2">
            <img
              className="w-full h-64 p-1 bg-white border rounded max-w-sm transition-shadow ease-in-out duration-300 shadow-none hover:shadow-2xl cursor-pointer"
              src={apartment?.images?.interior}
              alt="interior 2"
            />
          </div>
          <div className="w-80 mx-auto md:shrink-0 lg:pl-2">
            <img
              className="w-full h-64 p-1 bg-white border rounded max-w-sm transition-shadow ease-in-out duration-300 shadow-none hover:shadow-2xl cursor-pointer"
              src={apartment?.images?.front}
              alt="interior 3"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
