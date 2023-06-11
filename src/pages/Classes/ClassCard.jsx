

const ClassCard = ({item, isInstructor, isAdmin, handleSelect}) => {
    const {_id, clsName, email, price, seat, status, imgUrl, instructor} = item;

  return (
    <div className={`card w-full lg:card-side bg-opacity-90 ${seat ? "bg-[#025464]" : "bg-red-600"} rounded shadow-xl `}>
     <div className="w-full"> <figure className="relative h-72">
        <img
        className="object-cover w-full h-full rounded-ss rounded-se lg:rounded-se-none lg:rounded-l"
          src={imgUrl}
          alt="Class Image"
        />
      </figure></div>
      <div className="w-full card-body text-white  px-10 py-7">
        <h2 className="card-title text-2xl capitalize mb-2">{clsName}</h2>
        <div className="leading-6 ">
        <p className="capitalize">Instructor : {instructor}</p>
        <p>Contact : {email}</p>
        <p>Available Seats : {seat}</p>
        <p>Fees : ${price}</p>
        </div>
        <div onClick={()=> handleSelect(_id)} className="card-actions justify-end mt-auto">
          <button  disabled={!seat || isInstructor || isAdmin} className={!seat || isAdmin || isInstructor ? "btn-manage-disabled" : "btn-manage"}>Select</button>
    

        </div>
      </div>
    </div>
  );
};

export default ClassCard;