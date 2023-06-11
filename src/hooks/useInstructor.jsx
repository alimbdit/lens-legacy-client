
import { useQuery } from '@tanstack/react-query';
import Loading from './../components/Loading/Loading';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useInstructor = () => {

    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const {data:isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ["isInstructor", user?.email],
        enabled:!loading,
        queryFn: async() => {
            if(!user){
                return false
            }
            const result =await axiosSecure.get(`/user/instructor/${user?.email}`);
            return result.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading];
};

export default useInstructor;