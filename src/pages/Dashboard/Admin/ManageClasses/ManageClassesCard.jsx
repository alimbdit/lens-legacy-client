import { motion } from 'framer-motion';


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
        <h2 className="card-title capitalize">{clsName}</h2>
        <p className="capitalize">Instructor : {instructor}</p>
        <p>Contact : {email}</p>
        <p>Available Seats : {seat}</p>
        <p>Fees : ${price}</p>
        <p className="capitalize">Status : {status}</p>
        <div className="card-actions justify-end my-2">
          <motion.button whileHover={{ scale: `${status !== 'pending'? 1 :1.05}` }} whileTap={{ scale: `${status !== 'pending'? 1 :0.95}` }} onClick={()=>handleApprove(item)} disabled={status !== 'pending'} className={status === 'pending'?"btn-manage":"btn-manage-disabled"}>Approve</motion.button>
          <motion.button whileHover={{ scale: `${status !== 'pending'? 1 :1.05}` }} whileTap={{ scale: `${status !== 'pending'? 1 :0.95}` }} onClick={()=> handleDeny(item)} disabled={status !== 'pending'} className={status === 'pending'?"btn-manage":"btn-manage-disabled"}>Deny</motion.button>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={()=>{
                    openModal()
                    setFeedbackId(_id)
                  }} className="btn-manage" >Feedback</motion.button>
        </div>
      </div>
    </div>
  );
};

export default ManageClassesCard;
