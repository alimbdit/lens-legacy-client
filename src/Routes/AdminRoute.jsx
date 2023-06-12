import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loading/Loading";


const AdminRoute = ({children}) => {

    const {user, loading} = useAuth();
    const [isAdmin, adminLoading] = useAdmin();

    const location = useLocation();

    if(loading || adminLoading){
        return <Loading></Loading>
    }

    if(user && isAdmin) {
        return children
    }
    
    return <Navigate to='/' state={{from: location}} replace></Navigate>;
};

export default AdminRoute;