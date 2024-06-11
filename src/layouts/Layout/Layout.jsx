import css from './Layout.module.css';
import {Outlet} from "react-router-dom"
import Navbar from "../Navbar/Navbar.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Footer from "../Footer/Footer.jsx";

const Layout = () => {
    return (
        <div className={css.layoutWrapper}>
            <div className={css.navbarSection}>
                <Navbar/>
            </div>
            <div className={css.mainSection}>
                <div className={css.sidebar}>
                    <Sidebar/>
                    {/*<div className={css.sidebarDrawer}>*/}
                    {/*    salom*/}
                    {/*</div>*/}
                </div>
                <div className={css.main}>
                    <div className={css.container}>
                        <Outlet/>
                    </div>
                </div>
            </div>
            <div className={css.footerSection}>
                <Footer/>
            </div>
        </div>
    )
}

export default Layout