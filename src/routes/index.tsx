import { Route, Switch } from "wouter-preact";

import MainLayout from "../layout";

import { routes } from "./route-constants";

export default function ApplicationRoutes() {
	return (
		<Switch>
			<MainLayout>
				<Route path="/" component={routes[0].component} />
			</MainLayout>

			{routes.map((route) => (
				<MainLayout key={route.name}>
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
