import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../component/Header";
import "./home.scss"

interface HomeProps {}

const Home: React.FC<HomeProps> = () =>{
    return(
        <div className="homeSection">
           <Header/>
           <Outlet/>

        </div>

 
    )
}

export default Home;
