import { Outlet } from "react-router-dom"
import MainNavBar from "../components/MainNavBar.jsx"
// import { Button } from "bootstrap"

export default function Layout() {
    return (
        <>
            <MainNavBar />
            <Outlet /> {/*childrenelements */}
        </>
    )
};
