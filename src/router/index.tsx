import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { RouteObject } from "react-router-dom";
const Error = React.lazy(() => import("@v/Error/index"));
const Home = React.lazy(() => import("@v/Home/index"));
const Layouts = React.lazy(() => import("@v/Layouts/index"));

const router: RouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/Layouts" />
	},
	// {
	// 	path: "home",
	// 	element: <Home />
	// },
	{
		path: "/Layouts",
		element: <Layouts />
		// children: [
		// 	{
		// 		path: "/layout/home",
		// 		element: <Home />
		// 	}
		// ]
	},
	{
		path: "*",
		element: <Error />
	}
];
const Router = () => {
	const routes = useRoutes(router);
	return routes;
};

export default Router;
