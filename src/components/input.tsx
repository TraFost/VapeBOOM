import { useEffect, useState } from "preact/hooks";

interface IInput {
	placeholder: string;
	onChange: (value: string) => void;
	type: "text" | "number" | "email" | "password";
}

export default function Input({
	placeholder,
	onChange,
	type = "text",
}: IInput) {
	const [input, setInput] = useState("");

	useEffect(() => {
		onChange(input);
	}, [input]);

	return (
		<label className="input input-bordered flex items-center gap-2">
			<input
				value={input}
				placeholder={placeholder}
				onInput={(e: any) => setInput((e.target as HTMLInputElement).value)}
				type={type}
				className="grow text-white"
			/>
		</label>
	);
}
