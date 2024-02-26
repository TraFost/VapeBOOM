import { useState } from "preact/hooks";
import { SpringValue, useScroll } from "@react-spring/web";

interface IUseScrollAnimation {
	onTop: boolean;
	scrollYProgress: SpringValue<number>;
	scrollXProgress: SpringValue<number>;
}

export default function useScrollAnimation(): IUseScrollAnimation {
	const [onTop, setOnTop] = useState<boolean>(true);

	const { scrollYProgress, scrollXProgress } = useScroll({
		onChange: ({ value: { scrollYProgress: scrollProgress } }) => {
			if (scrollProgress > 0.5) {
				setOnTop(false);
			} else {
				setOnTop(true);
			}
		},
	});

	return {
		onTop,
		scrollYProgress,
		scrollXProgress,
	};
}
