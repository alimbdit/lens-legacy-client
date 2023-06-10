

const ManageClassRow = ({item, index, handleApprove, handleDeny, openModal, setFeedbackId}) => {



    const {_id, clsName, email, price, seat, status, imgUrl, instructor} = item;
    // console.log(_id, clsName, email, price, seat, status, imgUrl, instructor)
 

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
                <td className="text-center capitalize">{status}</td>
                <th >
                  <div className="flex flex-col items-center justify-center gap-1">
                  <button disabled={item?.status !== 'pending'} onClick={()=>handleApprove(item)} className="btn btn-primary w-full text-white btn-sm">Approve</button>
                  <button disabled={item?.status !== 'pending'} onClick={()=> handleDeny(item)} className="btn btn-warning w-full text-white btn-sm">Deny</button>
                  <button onClick={()=>{
                    openModal()
                    setFeedbackId(_id)
                  }} className="btn btn-info w-full text-white btn-sm">Feedback</button>
                  </div>
                </th>
              </tr>
        </>
    );
};

export default ManageClassRow;