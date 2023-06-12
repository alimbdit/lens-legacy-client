import moment from 'moment';


const PaymentHistoryRow = ({ history, index }) => {
    const { email, transactionId, price, date, clsName, formattedDate} = history;
    const newDate =  moment(formattedDate).format(" hh:mm A, Do-MMM-YYYY ")
    console.log(newDate)
    return (
        <>
        <tr className="">
          <th>{index + 1}</th>
          <td className="text-center capitalize">
            <div className="font-semibold capitalize">{newDate}</div>
          </td>
          <td className="text-center capitalize">
            <div className="font-semibold capitalize">{clsName}</div>
          </td>
          <td className="text-center capitalize">
            <div className="font-semibold capitalize">{transactionId}</div>
          </td>
          
  
          <td className="text-end pr-16">${price}</td>

        </tr>
      </>
    );
};

export default PaymentHistoryRow;