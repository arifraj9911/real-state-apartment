import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import { ToastContainer } from 'react-toastify';


const Root = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;