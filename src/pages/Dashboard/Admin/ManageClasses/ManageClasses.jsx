import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ManageClasses = () => {

    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

  return (
    <div className="my-4 w-full max-w-sm lg:max-w-fit px-5">
      <h1 className="text-5xl font-bold my-4 text-center">Manage Classes</h1>

      <div className="max-w-sm lg:max-w-fit">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-lg">
                <th>
                  #
                </th>
                <th>Class</th>
                <th>Instructor</th>
                <th>Available Seat</th>
                <th>Fees</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>


            </tbody>
  
            
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageClasses;
