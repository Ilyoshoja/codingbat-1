import { Outlet } from "react-router-dom"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import "./main.scss"
function Main() {

  
  return (
    <div className='mainSection'>
      <Header/>
      <Outlet/>
      <Footer/>

    </div>
  )
}

export default Main