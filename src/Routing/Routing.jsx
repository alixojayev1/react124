import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import Single from "../Single/Single";

const Routing = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/country/name/:name" element={<Single />} />

            </Routes>

        </>
    )
}

export default Routing