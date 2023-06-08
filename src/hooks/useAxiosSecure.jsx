import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate()

  useEffect(() => {
    axiosSecure.interceptors.request.use((request) => {
      return request;
    });
    axiosSecure.interceptors.response.use(
        response => response,
        async(error) => {
            if(error.response && (error.response.status === 403 || error.response.status === 401)){
                await logOut();
                navigate("/login");
            }
            return Promise.reject(error);
        }
    )
  }, [navigate, logOut]);
  
  return [axiosSecure];
};

export default useAxiosSecure;
