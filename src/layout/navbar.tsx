import { useState } from "preact/hooks";
import { animated } from "@react-spring/web";
import { useLocation } from "wouter-preact";

import VapeSmoke from "./vape-smoke";

import { useScrollAnimation } from "../hooks";
import { MainLogo } from "../assets";

interface INavbar {
	name: string;
}

export default function Navbar({ name }: INavbar) {
	const [isVapeSmokeVisible, setIsVapeSmokeVisible] = useState(false);

	const [location, setLocation] = useLocation();
	const { onTop, scrollYProgress } = useScrollAnimation();

	const isRouteMatch = location.replace("/", "") === name.toLowerCase();

	const navigatoToRoutes = (route: string) => {
		setLocation(route);
	};

	const triggerVapeSmoke = () => {
		setIsVapeSmokeVisible(true);
		setTimeout(() => {
			setIsVapeSmokeVisible(false);
		}, 2000);
	};

	return (
		<animated.div
			class="navbar bg-neutral text-neutral-content sticky top-0"
			style={{ background: scrollYProgress.to([0, 1], ["#252525", "#EDE600"]) }}
		>
			<div class="w-full lg:navbar-start">
				<div class="dropdown w-full lg:w-auto">
					<div tabindex={0} role="button" class="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabindex={0}
						class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li
							onClick={() => navigatoToRoutes("/products")}
							class={`text-black hover:text-yellow-400 ${
								isRouteMatch && "underline"
							}`}
						>
							<span>Products</span>
						</li>

						<li
							onClick={() => navigatoToRoutes("/contact")}
							class={`text-black hover:text-yellow-400 ${
								isRouteMatch && "underline"
							}`}
						>
							<span>Contact Us</span>
						</li>

						<li
							onClick={() => navigatoToRoutes("/about")}
							class={`text-black hover:text-yellow-400 ${
								isRouteMatch && "underline"
							}`}
						>
							<span>About Us</span>
						</li>
					</ul>
				</div>
				<animated.span
					onClick={triggerVapeSmoke}
					class="btn btn-ghost text-xl normal-case"
					style={{
						color: scrollYProgress.to([0, 1], ["#EDE600", "#E12221"]),
					}}
				>
					V A P E B O O M
				</animated.span>
				{isVapeSmokeVisible && (
					<VapeSmoke
						onClick={() => setIsVapeSmokeVisible(false)}
						isVisible={isVapeSmokeVisible}
					/>
				)}
			</div>
			<div class="navbar-center hidden lg:flex">
				<ul class="menu menu-horizontal px-1">
					<li
						onClick={() => navigatoToRoutes("/products")}
						class={`text-black ${
							onTop ? "hover:text-primary" : "hover:text-secondary"
						} ${isRouteMatch && "underline"}`}
					>
						<span>Products</span>
					</li>

					<li
						onClick={() => navigatoToRoutes("/contact")}
						class={`text-black ${
							onTop ? "hover:text-primary" : "hover:text-secondary"
						} ${isRouteMatch && "underline"}`}
					>
						<span>Contact Us</span>
					</li>

					<li
						onClick={() => navigatoToRoutes("/about")}
						class={`text-black ${
							onTop ? "hover:text-primary" : "hover:text-secondary"
						} ${isRouteMatch && "underline"}`}
					>
						<span>About Us</span>
					</li>
				</ul>
			</div>
			<div class="navbar-end">
				<figure class="w-24 h-14 hidden lg:block">
					<img
						src={MainLogo}
						class="object-cover h-full w-full"
						alt="VapeBOOM"
					/>
				</figure>
			</div>
		</animated.div>
	);
}
