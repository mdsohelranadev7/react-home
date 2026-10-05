import { Outlet } from "react-router-dom"
import Fooder from "./Fooder"
import Heder from "./Heder"


const RootLayouts = () => {
    return (

        <>
            <Heder />
            <Outlet />
            <Fooder />
        </>


    )
}

export default RootLayouts