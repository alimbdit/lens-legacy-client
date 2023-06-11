const InstructorCard = ({ instructor }) => {
  const { name, email, photo } = instructor;

  return (
    <>
      <div className="card w-full bg-orange-500 bg-opacity-20 rounded-lg shadow-xl">
        <div className="relative">
          <figure className=" object-cover relative h-72 lg:h-64">
            <img src={photo} alt="instructor image" className="w-full rounded-t-lg h-72  lg:h-64 object-cover" />
          </figure>
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <p className="text-lg pb-1">{email}</p>
          <div className="card-actions ">
            <button className="btn btn-sm hover:bg-info hover:border-info border-2 border-info bg-transparent text-info  hover:text-white text-base">See More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorCard;
