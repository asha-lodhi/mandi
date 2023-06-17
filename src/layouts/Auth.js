import React from "react";
// import LandingPage from "../pages/auth/LandingPage";
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "../components/Headers/authHeader";

const Auth = (props) => {
	return (
		<div
			style={{
				// backgroundColor: "#1E1C2A",
				height: "100vh",
			}}>
			<Header />
			<Outlet />
			{/* <Routes>
				<Route path="/landing" element={<LandingPage />} />
			</Routes> */}
		</div>
	);
};

export default Auth;
