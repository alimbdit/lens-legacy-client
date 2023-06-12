const PopularClassCard = ({ singleClass }) => {
  const { clsName, imgUrl, price, enrolledStudent, instructor, email } =
    singleClass;
  return (
    <div className="relative transition duration-200 transform overflow-hidden rounded group shadow-lg hover:shadow-2xl cursor-pointer">
      <img
        className="object-cover w-full group-hover:scale-105 h-56 md:h-64 xl:h-80 "
        src={imgUrl}
        alt="class image"
      />
      <div className="absolute  bg-black text-white inset-0 bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-200 flex justify-center items-center">
        <div className="">
          <h1 className="text-[26px] font-bold mb-6 capitalize">{clsName}</h1>
          <h3 className="text-lg font-medium capitalize">Instructor : {instructor}</h3>
          <h3 className="text-lg font-medium">Contact : {email}</h3>
          <h3 className="text-lg font-medium">Students : {enrolledStudent}</h3>
          <h3 className="text-lg font-medium">Fees : ${price}</h3>
        </div>
      </div>
    </div>
  );
};

export default PopularClassCard;
