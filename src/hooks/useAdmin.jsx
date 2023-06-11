import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";



const useAdmin = () => {

    const {user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();


    const {data: isAdmin, isLoading: adminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled:!loading,
        queryFn: async() => {
            if(!user){
                return false
            }
            const result =  await axiosSecure.get(`/user/admin/${user?.email}`);
            return result.data.admin;

        }
    })

    return [isAdmin, adminLoading];
};

export default useAdmin;