import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import MainLoder from "../components/main-loader/index"


const Layout = () => {
    return (

        <>
            <div className="layout-wrapper">
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