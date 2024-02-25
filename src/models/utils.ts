import { VNode } from "preact";

export interface IEachProps<T> {
	render: (item: T, index: number) => VNode<any>;
	of: T[];
}
