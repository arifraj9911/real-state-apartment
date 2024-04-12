import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;
  const onSubmit = (data) => {
    // e.preventDefault();
    console.log(data.email);
    const email = data.email;
    const password = data.password;

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  const handleGoogleSubmit = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="flex justify-center items-center ">
      <div className="w-2/5 border-2 rounded-xl p-10 my-10">
        <h2 className="text-3xl mb-5 text-center font-bold">
          Register Your Account
        </h2>
        <hr />
        <form
          className=" flex flex-col gap-6 mt-8 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-1 text-[#403F3F]">
            <label className="font-medium">Your Name</label>
            <input
              className="bg-[#F3F3F3] p-2 rounded-md outline-none "
              type="text"
              {...register("firstName", { required: true, maxLength: 20 })}
            />
          </div>
          <div className="flex flex-col gap-1 text-[#403F3F]">
            <label className="font-medium">Your Email</label>
            <input
              className="bg-[#F3F3F3] p-2 rounded-md outline-none "
              type="email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-1 text-[#403F3F]">
            <label className="font-medium">Photo URL</label>
            <input
              className="bg-[#F3F3F3] p-2 rounded-md outline-none "
              type="text"
              {...register("photo", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-1 text-[#403F3F]">
            <label className="font-medium">Password</label>
            <input
              className="bg-[#F3F3F3] p-2 rounded-md outline-none "
              type="password"
              {...register("password", {
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                  message:
                    "password should be at least 6 character and a uppercase and lowercase",
                },
              })}
            />
            <p className="text-sm text-red-500">{errors.password?.message}</p>
          </div>

          <div>
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Register"
            />
          </div>
        </form>
        <div className="text-center">
          <span>
            Already have an account?
            <Link className="btn btn-link p-0" to="/login">
              Login
            </Link>{" "}
          </span>
        </div>
        <div className="divider">OR</div>
        <div onClick={handleGoogleSubmit} className="flex justify-center">
          <button className="btn btn-outline">
            <FaGoogle />
            <span>Continue with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
