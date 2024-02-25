import { HomePage } from "../pages";
import { IRoutes } from "../models";

export const routes: IRoutes[] = [
	{
		name: "Home",
		description: "Home Page",
		path: "/",
		seoURL: "/",
		component: HomePage,
	},
];
