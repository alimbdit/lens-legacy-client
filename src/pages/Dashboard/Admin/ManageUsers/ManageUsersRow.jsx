
import { motion } from 'framer-motion';


const ManageUsersRow = ({item, index, handleRole}) => {
    const {_id, name, email, photo, role} = item;
    return (
        <>
        <tr className="text-lg space-x-5">
            <th>
              {index + 1 }
            </th>
            <td className="">
              <div className="flex items-center justify-center">
                <div className="avatar ">
                  <div className="mask mask-squircle  w-24 h-24 relative">
                    <motion.img whileHover={{ scale:  1.05 }} whileTap={{ scale:  0.95 }} className="object-cover"
                      src={photo}
                      alt="User's Image"
                    />
                  </div>
                </div>
              </div>
            </td>
            <td className="text-center ">
              <span className="capitalize">{name}</span>
              <br />
              <span className="badge badge-ghost badge-lg">
                {email}
              </span>
            </td>

            <td className="text-center capitalize">{role}</td>
            <th >
              <div className="flex flex-col items-center justify-center gap-1">
              <motion.button whileHover={{ scale: `${role === 'admin'? 1 : 1.05}` }} whileTap={{ scale: `${role === 'admin'? 1 : 0.95}` }} disabled={role === 'admin'} onClick={()=>handleRole(_id,"admin", name)} className="btn hover:bg-orange-600 hover:border-orange-600 border-2 border-orange-600 bg-transparent text-orange-600 w-full hover:text-white text-base">Make Admin</motion.button>
              
              <motion.button whileHover={{ scale: `${role === 'instructor'? 1 : 1.05}` }} whileTap={{ scale: `${role === 'instructor'? 1 : 0.95}` }} disabled={role === 'instructor'} onClick={()=> handleRole(_id, "instructor", name)} className="btn hover:bg-info hover:border-info border-2 border-info bg-transparent text-info w-full hover:text-white text-base">Make Instructor</motion.button>
              
              </div>
            </th>
          </tr>
    </>
    );
};

export default ManageUsersRow;