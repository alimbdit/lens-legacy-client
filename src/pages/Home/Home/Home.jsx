import Banner from "../Banner/Banner";
import Moment from "../Moment/Moment";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstrctor/PopularInstructor";
import Quote from "../Quote/Quote";



const Home = () => {
    return (
        <div className="dark:bg-cyan-900">
            <Banner></Banner>
            <PopularClasses ></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <Moment></Moment>
            <Quote></Quote>
     
        </div>
    );
};

export default Home;