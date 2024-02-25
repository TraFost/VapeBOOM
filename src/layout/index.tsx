import Navbar from "./navbar";

import { IMainLayout } from "../models";

export default function MainLayout({ children }: IMainLayout) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
		</>
	);
}
