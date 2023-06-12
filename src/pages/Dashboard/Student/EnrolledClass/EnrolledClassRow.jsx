const EnrolledClassRow = ({ item, index }) => {
  const { _id, clsName, email, price, seat, imgUrl, instructor } = item;

  return (
    <>
      <tr className="text-lg">
        <th>{index + 1}</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar ">
              <div className="mask  rounded-lg w-44 h-32 relative">
                <img className="object-cover" src={imgUrl} alt="class Image" />
              </div>
            </div>
          </div>
        </td>
        <td className="text-center capitalize">
          <div className="font-bold capitalize">{clsName}</div>
        </td>
        <td className="text-center capitalize">
          {instructor}
          <br />
          <span className="badge badge-ghost badge-md">{email}</span>
        </td>

        <td className="text-end pr-16">${price}</td>
      </tr>
    </>
  );
};

export default EnrolledClassRow;
