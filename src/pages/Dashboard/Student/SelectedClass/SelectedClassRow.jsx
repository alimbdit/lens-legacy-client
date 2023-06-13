import { useLocation, useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';


const SelectedClassRow = ({item, index, handleDelete, handlePayment}) => {

    const {_id, clsName, email, price, seat,  imgUrl, instructor} = item;

    const location = useLocation();
    const navigate = useNavigate()

    return (
        <>
        <tr className="text-lg">
            <th>
              {index + 1 }
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar ">
                  <div className="mask  rounded-lg w-36 h-28 relative">
                    <img className="object-cover"
                      src={imgUrl}
                      alt="class Image"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold capitalize">{clsName}</div>
                </div>
              </div>
            </td>
            <td className="text-center capitalize">
              {instructor}
              <br />
              <span className="badge badge-ghost badge-md">
                {email}
              </span>
            </td>
            <td className="text-center">{seat}</td>
            <td className="text-end">${price}</td>
         
            <th >
              <div className="flex flex-col items-center justify-center gap-2">
              <motion.button whileHover={{ scale: `${!item?.seat ? 1 : 1.05}` }} whileTap={{ scale: `${!item?.seat ? 1 : 0.95}` }} onClick={()=>{ 
                // openModal()
                navigate('/dashboard/payment', { state: item })
                handlePayment(item)
              }} disabled={!item?.seat} className={`btn  ${!item?.seat ? 'btn-disabled': 'btn-info hover:bg-transparent hover:text-info border-2 text-white' }  font-semibold  w-full  btn-sm h-10 text-base`}>Pay</motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={()=> handleDelete(item)} className="btn btn-warning hover:bg-transparent hover:text-warning font-semibold border-2 w-full text-white btn-sm h-10 text-base">Delete</motion.button>
              
              </div>
            </th>
          </tr>
    </>
    );
};

export default SelectedClassRow;