import { useEffect } from "preact/hooks";

export default function HomePage() {
	useEffect(() => {
		document.title = "Home";
	}, []);

	return <div class="pt-10">HomePage</div>;
}
