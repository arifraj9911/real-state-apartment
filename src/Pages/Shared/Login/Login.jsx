import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [errors, setErrors] = useState(null);
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = (data) => {
    // e.preventDefault();
    console.log(data.email);
    const email = data.email;
    const password = data.password;

    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        setErrors('');
        toast.success('user login successful');
        reset();
      })
      .catch((err) => {
        setErrors(err.message);
      });
  };

  const handleGoogleSubmit = () => {
    googleSignIn()
      .then((res) => {
        console.log(res.user);
        toast.success('user login successful');
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleGithubSubmit = ()=>{
    console.log('github login');
  }
  return (
    <div className="flex justify-center items-center ">
      <Helmet>
                <title>City Residence | Login</title>
            </Helmet>
      <div className="w-2/6  shadow-xl rounded-xl p-10 my-16">
        <h2 className="text-3xl mb-8 text-center font-bold">Login</h2>
        <hr />
        <form
          className=" flex flex-col gap-4 mt-12 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-1 text-[#403F3F]">
            <label className="font-medium">Your Email</label>
            <input
              className="bg-[#F3F3F3] p-2 rounded-md outline-none "
              type="email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="flex flex-col gap-1 text-[#403F3F]">
            <label className="font-medium">Password</label>
            <input
              className="bg-[#F3F3F3] p-2 rounded-md outline-none "
              type="password"
              {...register("password")}
            />
            <p className="text-sm text-red-500">{errors}</p>
          </div>

          <div className="mt-2">
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Login"
            />
          </div>
        </form>
        <div className="text-center">
          <span>
            New to account?
            <Link className="btn btn-link p-0" to="/register">
              Register
            </Link>{" "}
          </span>
        </div>
        <div className="divider">OR</div>
        <div  className="flex flex-col gap-2">
          <button onClick={handleGoogleSubmit} className="btn btn-outline">
            <FaGoogle />
            <span>Continue with Google</span>
          </button>
          <button onClick={handleGithubSubmit} className="btn btn-outline">
            <FaGithub />
            <span>Continue with Github</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
