import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "../../frontend/src/layouts/Admin";
import AuthLayout from "../../frontend/src/layouts/Auth";
import LandingPage from "./pages/auth/LandingPage";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<>
		<BrowserRouter>
			<Routes>
				<Route path="/admin" element={(props) => <AdminLayout {...props} />} />
				<Route path="/auth" element={<AuthLayout />}>
					<Route path="/auth/landing" element={<LandingPage />} />
				</Route>
				<Route from="/" to="/auth/landing" />
			</Routes>
		</BrowserRouter>
		{/* <ToastContainer position="top-right" autoClose={5000} theme="colored" /> */}
	</>
);
