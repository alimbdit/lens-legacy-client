import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loading/Loading";


const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    if(loading){
        
        return <Loading></Loading>
    }
    if(user?.email){
        return children;
    }
    return (
        <div>
            <Navigate to='/login'></Navigate>
        </div>
    );
};

export default PrivateRoute;