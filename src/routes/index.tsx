import { Route, Switch } from "wouter-preact";

import { routes } from "./route-constants";

export default function ApplicationRoutes() {
	return (
		<Switch>
			<Route path="/" component={routes[0].component} />

			{routes.map((route) => (
				<Route key={route.name} component={route.component} path={route.path} />
			))}
			<></>
		</Switch>
	);
}
