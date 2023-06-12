import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstrctor/PopularInstructor";


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <PopularClasses ></PopularClasses>
            <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;