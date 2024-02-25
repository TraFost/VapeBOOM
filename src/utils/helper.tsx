import { VNode } from "preact";
import { Children } from "preact/compat";

import { IEachProps } from "../models";

export function Each<T>({ render, of }: IEachProps<T[]>): VNode<any>[] {
	return Children.toArray(of.map((item, index) => render(item, index)));
}
