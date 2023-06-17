import moment from "../../../assets/images/moment.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Moment = () => {

    useEffect(() => {
        AOS.init({duration: 1000});
      }, [])

  return (
    <section className="parent-container flex flex-col-reverse lg:flex-row gap-5  w-full items-center justify-between">
      
      <div className="w-full p-4 lg:p-10">
        <h1 className="text-5xl font-bold my-4 " data-aos="fade-right">Click Moment, <br className="py-2"/> that you love</h1>
        <p className="py-4" data-aos="fade-up"
     
     data-aos-easing="ease-in-sine">A click moment is an extraordinary instant of realization or revelation that has the power to shape our lives. It&apos;s a transformative &quot;aha&quot; moment when everything suddenly falls into place, and we gain a profound understanding or clarity about ourselves, our passions, or our purpose.</p>
      </div>
      <div className="w-full p-4 " data-aos="zoom-in-left">
        <img className="w-3/4 lg:w-3/5 mx-auto " src={moment} alt="" />
      </div>
    </section>
  );
};

export default Moment;
