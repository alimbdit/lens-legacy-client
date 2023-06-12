import { useLocation } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const Payment = () => {
  const { user } = useAuth();

  const location = useLocation();
  console.log(location.state);
  const item = location.state;

  return (
    <div className="my-4 w-full max-w-full px-5 ">
      <h1 className="text-5xl font-bold my-4 text-center">Payment</h1>

      <div className="flex justify-center lg:w-3/5 mx-auto bg-slate-300 rounded-lg p-10 mt-10">
        <div className="w-full">
          <Elements stripe={stripePromise}>
            <CheckoutForm item={item} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
