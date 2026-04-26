import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import MainLoder from "../components/main-loader/index"
import NavbarComponent from "../components/navbar";
import SideBar from "../components/side-bar/index";

const Layout = () => {
    return (

        <>
            <NavbarComponent />
            <div className="layout-wrapper">
                <SideBar />

                <Suspense fallback={<MainLoder />}>
                    <main className="main-content">
                        <MainLoder />
                        <Outlet />
                    </main>
                </Suspense>
            </div>
        </>
    )
};
export default Layout;