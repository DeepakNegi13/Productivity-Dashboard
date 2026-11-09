import { Bell, CircleUserRound, Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
function Navbar() {
	const [light, setLight] = useState(true);
	const [openMenubar, setOpenMenubar] = useState(false);

	return (
		<div className="bg-muted  max-w-360 w-full h-19 p-2.5 flex  items-center  justify-between rounded-(--radius) m-2 border-border border-[1.2px] shadow-card transition-all delay-200">
			<div className="w-full flex flex-row justify-between">
				<div className=" type-ui font-bold">DASHBOARD</div>
				{openMenubar ?
					<X
						className="block xs:hidden"
						onClick={() =>
							setOpenMenubar((openMenubar) => !openMenubar)
						}
					/>
				:	<Menu
						className="block xs:hidden"
						onClick={() =>
							setOpenMenubar((openMenubar) => !openMenubar)
						}
					/>
				}
				{openMenubar && (
					<div className="absolute top-23 right-2 rounded-(--radius) bg-muted border-border border-[1.2px] shadow-card p-3">
						<div>
							Account
						</div>
						{light?
						<div>
							dark
						</div>
						:
						<div>
							light
						</div>}
					</div>
				)}
			</div>
			<div className="flex px-3 gap-[3vw] items-center flex-row ml-auto ">
				<div className="rounded-full p-3 bg-surface border-border border-[1.2px] hidden xs:block">
					<Bell />
				</div>
				<div className="rounded-full p-3 bg-surface border-border border-[1.2px] hidden xs:block">
					{light ?
						<Moon className="" />
					:	<Sun />}
				</div>
				<div className="items-center hidden xs:flex">
					<div className=" rounded-full mr-1.5 p-3 bg-surface border-border border-[1.2px]">
						<CircleUserRound />
					</div>
					<div className="hidden sm:block">
						<div className="type-ui font-medium">name</div>
						<div className="text-text-primary">name@gmail.com</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
