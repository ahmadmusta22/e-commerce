const Ratings = ({ ratings }) => {
  return (
      <div className="flex items-center">
          <i className="fa-solid fa-star"></i>
          <span className="ml-1 text-black">{ratings}</span>
      </div>
  );
};

export default Ratings;  // Export Ratings component
