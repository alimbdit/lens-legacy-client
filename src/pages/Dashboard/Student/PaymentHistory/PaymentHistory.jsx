import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loading from "../../../../components/Loading/Loading";
import PaymentHistoryRow from "./PaymentHistoryRow";


const PaymentHistory = () => {

    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure()

    const {data:paymentHistory=[], isLoading: isHistoryLoading} = useQuery({
        queryKey:['paymentHistory', user?.email],
        enabled:!loading,
        queryFn: async()=>{
            const result = await axiosSecure.get(`/paymentHistory/${user?.email}`);
            return result.data
        }
    })
    console.log(paymentHistory)

    if(isHistoryLoading){
        return <Loading></Loading>
    }

    return (
        <div className="my-4 w-full max-w-sm lg:max-w-fit px-5">
        <h1 className="text-5xl font-bold my-4 text-center">
          Payment History: {paymentHistory.length}
        </h1>
  
        <div className="max-w-sm lg:max-w-fit ">
          <div className="overflow-x-auto h-[450px] lg:h-[510px]">
            <table className="table table-pin-rows table-zebra lg:table-fixed">
              <thead>
                <tr className="text-xl">
                  <th className="w-3">#</th>

                  <th className="text-center">Date</th>
                  <th className="text-center">Class Name</th>
                  <th className="text-center">Transaction Id</th>
                  <th className="text-end pr-16">Cost</th>

                </tr>
              </thead>
              <tbody className="pr-5">
                {paymentHistory &&
                  paymentHistory.map((history, index) => (
                    <PaymentHistoryRow 
                    history={history}
                      index={index}
                      key={history._id}
                    ></PaymentHistoryRow>
                  ))}
              </tbody>
            </table>
   
          </div>
        </div>
      </div>
    );
};

export default PaymentHistory;