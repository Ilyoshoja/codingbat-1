import React from "react";
import { Outlet } from "react-router-dom";
// import Footer from "../../components/header/footer/Footer";
// import Header from "../../components/header/Header";
// import "./home.scss"

interface HomeProps {}

const Home: React.FC<HomeProps> = () =>{
    return(
        
        <Outlet/>
        // <div className="homeSection">
        //    <Header/>
          
        //    <Footer/>
        // </div>

 
    )
}

export default Home;
