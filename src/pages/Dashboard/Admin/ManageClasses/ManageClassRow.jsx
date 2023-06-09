
const ManageClassRow = ({item, index}) => {
    const {_id, clsName, email, price, seat, status, imgUrl, instructor} = item;
    // console.log(_id, clsName, email, price, seat, status, imgUrl, instructor)
    // console.log(item)
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
                  <button className="btn btn-primary w-full btn-sm">Aprove</button>
                  <button className="btn btn-warning w-full btn-sm">Deny</button>
                  <button className="btn btn-info w-full btn-sm">Feedback</button>
                  </div>
                </th>
              </tr>
        </>
    );
};

export default ManageClassRow;