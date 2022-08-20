import { Outlet } from "react-router-dom";
// import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PrivateStudentRoutes = () => {
    
    return (
            // <div className="routegroups__wrapper">
            <>
            
            <Navbar />
            <Outlet />
            <Footer />
            </>
            // </div>
    )
}

export default PrivateStudentRoutes