import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Apartments from "../Apartments/Apartments";
import { useLoaderData } from "react-router-dom";


const Home = () => {
    const estates = useLoaderData();
    console.log(estates);
    return (
        <div>
            <Helmet>
                <title>City Residence | Home</title>
            </Helmet>
           <Banner></Banner>
           <Apartments estates={estates}></Apartments>
        </div>
    );
};

export default Home;