import { JSX } from "preact/jsx-runtime";

export interface IRoutes {
	name: string;
	path: string;
	component: () => JSX.Element;
	children?: IRoutes[];
}
