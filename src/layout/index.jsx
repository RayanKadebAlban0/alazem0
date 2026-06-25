import { Suspense, useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import MainLoder from "../components/main-loader/index"
import SideBar from "../components/side-bar";
import NavbarComponent from "../components/navbar";
import { Styles } from "./styles";
import FooterComponent from "../components/footer";
import Breadcrumbs from '../components/breadcrumbs';
import { routs } from "../router";

const Layout = () => {

    const [isExpanded, setIsExpanded] = useState(true);
    const location = useLocation();
    const isLandingPage = location.pathname === "/";
    if (isLandingPage) return <Outlet />;

// إظهار عنوان الصفحة في بداية كل صفحة
    const currentRoute = routs.find(route => route.path === location.pathname);

    return (
        <Styles isExpanded={isExpanded}>
            <div className="layout-wrapper">
                <NavbarComponent />
                <div className="layout-body">
                    <SideBar
                        expanded={isExpanded}
                        onToggle={() => setIsExpanded(!isExpanded)}
                    />
                    <main className="main-content ">
                        <Suspense fallback={<MainLoder />}>
                            <div className="out-let">
                                {!isLandingPage && <Breadcrumbs />}
                                <h1>{currentRoute.title}</h1>
                                <Outlet />
                            </div>
                        </Suspense>
                        <FooterComponent />
                    </main>
                </div>
            </div>
        </Styles>
    )
};
export default Layout;