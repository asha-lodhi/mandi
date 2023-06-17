import LandingPage from "../src/pages/auth/LandingPage";

var routes = [
	{
		path: "/landing",
		name: "landing",
		icon: "ni ni-key-25 text-info",
		component: LandingPage,
		layout: "/auth",
		visible: false,
	},
];

export default routes;
