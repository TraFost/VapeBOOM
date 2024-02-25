import { JSX } from "preact/jsx-runtime";

export interface IMainLayout {
	children: JSX.Element;
	name: string;
	description: string;
	seoURL: string;
}
