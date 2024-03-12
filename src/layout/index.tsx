import { SeoHelmet } from "../components";
import Navbar from "./navbar";

import { IMainLayout } from "../models";

export default function MainLayout({
	children,
	name,
	description,
	seoURL,
}: IMainLayout) {
	return (
		<div class="min-h-screen px-16 py-8">
			<SeoHelmet title={name} description={description} url={seoURL} />

			<Navbar name={name} />

			<main className="w-full h-full">{children}</main>
		</div>
	);
}
