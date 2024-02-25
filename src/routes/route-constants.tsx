import { HomePage } from "../pages";
import { IRoutes } from "../models";

export const routes: IRoutes[] = [
	{
		name: "Home",
		component: HomePage,
		path: "/home",
	},
];
