const ManageClassesCard = ({item,  handleApprove, handleDeny, openModal, setFeedbackId}) => {
    const {_id, clsName, email, price, seat, status, imgUrl, instructor} = item;
  return (
    <div className="card w-full lg:card-side bg-[#025464] rounded shadow-xl ">
     <div className="w-full"> <figure className="relative h-64">
        <img
        className="object-cover w-full h-full rounded-ss rounded-se lg:rounded-se-none lg:rounded-l"
          src={imgUrl}
          alt="Class Image"
        />
      </figure></div>
      <div className="w-full card-body text-white leading-4 px-10 py-5">
        <h2 className="card-title">{clsName}</h2>
        <p>Instructor : {instructor}</p>
        <p>Contact : {email}</p>
        <p>Available Seats : {seat}</p>
        <p>Fees : ${price}</p>
        <p>Status : {status}</p>
        <div className="card-actions justify-end my-2">
          <button onClick={()=>handleApprove(item)} disabled={status !== 'pending'} className={status === 'pending'?"btn-manage":"btn-manage-disabled"}>Approve</button>
          <button onClick={()=> handleDeny(item)} disabled={status !== 'pending'} className={status === 'pending'?"btn-manage":"btn-manage-disabled"}>Deny</button>
          <button onClick={()=>{
                    openModal()
                    setFeedbackId(_id)
                  }} className="btn-manage" >Feedback</button>
        </div>
      </div>
    </div>
  );
};

export default ManageClassesCard;
