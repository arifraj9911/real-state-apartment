import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const UpdateProfile = () => {
  const { user, setLoading } = useContext(AuthContext);
  const handleSaveChange = (e) => {
    e.preventDefault();
    setLoading(true);
    const name = e.target.name.value;
    const image = e.target.photo.value;
    // console.log(name,image)
    updateProfile(user, {
      displayName: name,
      photoURL: image,
    })
      .then(() => {
        setLoading(false);
        console.log("updated");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="my-20 w-3/5 mx-auto">
      <Helmet>
        <title>City Residence | Update</title>
      </Helmet>
      <div className="flex justify-center w-full border rounded-lg">
        <div className="flex flex-col items-center w-full border-r-2 gap-4 shadow-lg p-8">
          <div className="avatar online mb-4">
            <div className="w-32 rounded-full">
              <img
                src={
                  user?.photoURL
                    ? user?.photoURL
                    : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                }
              />
            </div>
          </div>
          <h2 className="text-2xl font-bold">
            {user?.displayName ? user?.displayName : "User Name"}
          </h2>
          <h4 className="text-lg">Email : {user?.email}</h4>
        </div>

        <div className="flex flex-col items-center w-full shadow-lg p-10">
          <h2 className="text-3xl mb-8 font-semibold">Update</h2>
          <form
            onSubmit={handleSaveChange}
            className="flex flex-col w-full gap-5"
          >
            <div className="flex flex-col ">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                className="p-2 border-2 w-full rounded-md mt-1"
                placeholder="enter your name"
                id=""
              />
            </div>
            <div className="flex flex-col">
              <label>Your Image</label>
              <input
                type="text"
                name="photo"
                className="p-2 border-2 rounded-md mt-1"
                placeholder="image url"
                id=""
              />
            </div>
            <div>
              <input
                type="submit"
                value="Save Changes"
                className="bg-[#0075FF] hover:bg-[#2264b0] text-white py-3 px-6 w-full rounded-md text-[16px] font-bold"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
