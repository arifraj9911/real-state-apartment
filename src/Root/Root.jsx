import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import { ToastContainer } from 'react-toastify';
import Footer from "../Pages/Shared/Footer/Footer";


const Root = () => {
    return (
        <div>
           <div>
           <Header></Header>
            <Outlet></Outlet>
           </div>
           <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;