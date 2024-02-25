import { MainLogo } from "../assets";

export default function Navbar() {
	return (
		<div class="navbar bg-neutral text-neutral-content">
			<div class="w-[85%] lg:navbar-start">
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
						<li>
							<a>Item 1</a>
						</li>
						<li>
							<a>Item 2</a>
						</li>
						<li>
							<a>Item 3</a>
						</li>
					</ul>
				</div>
				<span class="btn btn-ghost text-xl normal-case">V A P E B O O M</span>
			</div>
			<div class="navbar-center hidden lg:flex">
				<ul class="menu menu-horizontal px-1">
					<li>
						<a>Item 1</a>
					</li>
					<li>
						<a>Item 2</a>
					</li>
					<li>
						<a>Item 3</a>
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
		</div>
	);
}
