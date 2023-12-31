import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/Loading/Loading";
import ClassCard from "./ClassCard";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const sweetAlert = {
  position: "center",
  icon: "warning",
  title: "login for select class!",
  showConfirmButton: false,
  timer: 1500,
};

const Classes = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const location = useLocation();

  const navigate = useNavigate();

  const {
    data: allClass = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allClass"],
    queryFn: async () => {
      const response = await axiosSecure.get("approvedClasses");
      return response.data;
    },
  });

  const handleSelect = async (id) => {
    if (!user) {
      Swal.fire(sweetAlert);
      navigate("/login", { state: { from: location } });
    } else {
      await axiosSecure
        .post(`/userSelect/${user?.email}`, { classId: id })
        .then((result) => {
          if (result.data.modifiedCount > 0) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Class is selected!",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/dashboard/selectedClass");
          }
        })
        .catch((error) => {
          // console.log(error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: `${error.response.data.message}`,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    }
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="lg:px-10 pb-20 dark:bg-cyan-900 dark:text-white">
      <h1 className="text-5xl font-bold pb-4 pt-10 lg:pt-20 text-center">
        Our Classes
      </h1>
      <p className="text-center w-3/5 mx-auto text-lg py-3">
Photography classes teach exposure, composition, lighting, and equipment, while exploring genres and encouraging experimentation.</p>

      <div className="px-5 lg:pb-12 grid grid-cols-1 lg:grid-cols-2 gap-5  mt-10">
        {allClass &&
          allClass.map((item) => (
            <ClassCard
              handleSelect={handleSelect}
              isInstructor={isInstructor}
              isAdmin={isAdmin}
              item={item}
              key={item._id}
            ></ClassCard>
          ))}
      </div>
    </div>
  );
};

export default Classes;
