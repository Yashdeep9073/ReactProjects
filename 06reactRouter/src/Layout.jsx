import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from "react-router-dom" //it can change element


function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout
