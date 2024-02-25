import { Route, Switch } from "wouter-preact";

import MainLayout from "../layout";

import { routes } from "./route-constants";

export default function ApplicationRoutes() {
	return (
		<Switch>
			{routes.map((route) => (
				<MainLayout
					description={route.description}
					seoURL={route.seoURL}
					name={route.name}
					key={route.name}
				>
					<Route
						key={route.name}
						component={route.component}
						path={route.path}
					/>
				</MainLayout>
			))}
		</Switch>
	);
}
