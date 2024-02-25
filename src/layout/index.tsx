import Navbar from "./navbar";

import { SeoHelmet } from "../components";

import { IMainLayout } from "../models";

export default function MainLayout({
	children,
	name,
	description,
	seoURL,
}: IMainLayout) {
	return (
		<>
			<SeoHelmet title={name} description={description} url={seoURL} />

			<Navbar name={name} />

			<main>{children}</main>
		</>
	);
}
