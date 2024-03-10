import { useState } from "preact/hooks";

export default function Input() {
	const [input, setInput] = useState("");

	console.log(input, "<<");

	return (
		<label className="input input-bordered flex items-center gap-2">
			<input
				value={input}
				onInput={(e: any) => setInput((e.target as HTMLInputElement).value)}
				type="text"
				className="grow text-black"
				placeholder="Search"
			/>
		</label>
	);
}
