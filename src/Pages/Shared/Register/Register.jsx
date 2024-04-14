import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
// import { FaGoogle } from "react-icons/fa";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
import { IoIosEye,IoIosEyeOff  } from "react-icons/io";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPass,setShowPass] = useState(false);
  const { register, formState, handleSubmit,reset } = useForm();
  const { errors } = formState;
  const onSubmit = (data) => {
    // e.preventDefault();
    console.log(data.email);
    const email = data.email;
    const password = data.password;

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success('User create successfully');
        reset();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

//   const handleGoogleSubmit = () => {
//     googleSignIn()
//       .then((res) => {
//         console.log(res.user);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   };

  return (
    <div className="flex justify-center items-center ">
      <Helmet>
                <title>City Residence | Register</title>
            </Helmet>
      <div className="w-2/6 shadow-xl  rounded-xl p-10 my-16">
        <h2 className="text-3xl mb-8 text-center font-bold">
          Register Your Account
        </h2>
        <hr />
        <form
          className=" flex flex-col gap-4 mt-12 "
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
            <div className="w-full relative">
            <input
              className="bg-[#F3F3F3] p-3 w-full rounded-md outline-none "
              type={showPass ? 'text' : 'password'}
              {...register("password", {
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                  message:
                    "password should be at least 6 character and a uppercase and lowercase",
                },
              })}
            />
            <span className="absolute right-4 top-3 text-2xl" onClick={()=>setShowPass(!showPass)}>{showPass ? <IoIosEyeOff /> : <IoIosEye />}</span>
            </div>
            
            <p className="text-sm text-red-500">{errors.password?.message}</p>
          </div>

          <div className="mt-2">
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
        {/* <div className="divider">OR</div>
        <div onClick={handleGoogleSubmit} className="flex justify-center">
          <button className="btn btn-outline">
            <FaGoogle />
            <span>Continue with Google</span>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Register;
