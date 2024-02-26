import { useEffect, useState } from "preact/hooks";
import { useSpring, animated } from "@react-spring/web";

import { MappedComponent } from "../components";

interface IVapeSmoke {
	isVisible: boolean;
	onClick: () => void;
}

export default function VapeSmoke({ isVisible, onClick }: IVapeSmoke) {
	const [smoke, setSmoke] = useState<any[]>([]);
	const [smokeTimer, setSmokeTimer] = useState<number | undefined>();

	const props = useSpring({
		opacity: isVisible ? 1 : 0,
		from: { opacity: 0 },
		config: { duration: 500 },
	});

	useEffect(() => {
		if (isVisible) {
			const timer = setInterval(() => {
				const id = Date.now();
				setSmoke((prevSmoke) => [...prevSmoke, { id }]);
			}, 500);

			setSmokeTimer(timer);
		} else {
			setSmoke([]);
			clearInterval(smokeTimer);
		}

		return () => clearInterval(smokeTimer);
	}, [isVisible]);

	return (
		<animated.div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				background: "rgba(0, 0, 0, 0.5)",
				zIndex: 999,
				...props,
			}}
			onClick={onClick}
		>
			<div class="flex items-center justify-center h-screen w-full">
				{
					<MappedComponent<any>
						of={smoke}
						render={() => (
							<animated.div
								className="absolute bg-gray-400 rounded-full"
								style={{
									width: 20,
									height: 20,
									opacity: 0.8,
									transform: `translate(${Math.random() * 100}%, ${
										Math.random() * 100
									}%) scale(${Math.random() * 1.5})`,
								}}
							/>
						)}
					/>
				}
			</div>
		</animated.div>
	);
}
