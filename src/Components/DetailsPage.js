import interior1 from '../assets/inter1.jpg';
import interior2 from '../assets/inter2.jpg';
import interior3 from '../assets/inter3.jpg';
import apt from '../assets/apt.jpg';

const DetailsPage = () => {
  <div className="container mx-auto flex flex-col bg-[#fdfcf7] rounded py-8">
    <div className="w-full mx-auto flex flex-col justify-center align-center my-8 lg:flex-row md:justify-between">
      <div className="w-80 mx-auto md:w-1/2 md:shrink-0 flex justify-center align-center">
        <img
          src={apt}
          alt=""
          className="w-full h-80 md:h-full p-1 bg-white border rounded max-w-sm transition-shadow ease-in-out duration-300 shadow-none hover:shadow-2xl cursor-pointer"
        />
      </div>
      <div className="w-80 mx-auto md:w-1/2 flex flex-col justify-center align-start text-[#555555]">
        <h1 className="w-80 text-center text-2xl font-bold text-[#1F99DD] my-3">
          Astalavista
        </h1>
        <p className="w-80 mb-3">
          This is a modern, smart house. It has five bedrooms, five baths and a
          pool. It has lots of entertainment space.
        </p>
        <p className="mb-3">
          <span className="font-bold">City:</span>
          Lusaka
        </p>
        <p className="mb-3">
          <span className="font-bold">Available From: </span>
          2022-09-28
        </p>
        <p className="mb-3">
          <span className="font-bold">Monthly Rent: $</span>
          300.0
        </p>
        <p className="mb-3">
          <span className="font-bold">Total Fee/Month: $</span>
          400
        </p>
        <button
          type="button"
          className="w-80 bg-[#96bf01] text-[#fdfcf7] border-2 border-transparent hover:bg-[#fdfcf7] hover:text-[#96bf01] hover:border-2 hover:border-[#96bf01] transition-color ease-in-out py-3 px-6 rounded uppercase"
        >
          Book an Apartment
        </button>
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
          src={interior1}
          alt="interior 1"
        />
      </div>
      <div className="w-80 mx-auto md:shrink-0 mb-8 lg:pl-2">
        <img
          className="w-full h-64 p-1 bg-white border rounded max-w-sm transition-shadow ease-in-out duration-300 shadow-none hover:shadow-2xl cursor-pointer"
          src={interior2}
          alt="interior 2"
        />
      </div>
      <div className="w-80 mx-auto md:shrink-0 lg:pl-2">
        <img
          className="w-full h-64 p-1 bg-white border rounded max-w-sm transition-shadow ease-in-out duration-300 shadow-none hover:shadow-2xl cursor-pointer"
          src={interior3}
          alt="interior 3"
        />
      </div>
    </div>
  </div>;
};

export default DetailsPage;
