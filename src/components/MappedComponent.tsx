import { Children } from "preact/compat";

interface IMappedComponent<T> {
	of: T[];
	render: (item: T, index: number) => JSX.Element;
}

export default function MappedComponent<T>({
	of,
	render,
}: IMappedComponent<T>): any {
	return Children.toArray(of.map((item, index) => render(item, index)));
}
