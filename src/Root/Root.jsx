import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";


const Root = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;