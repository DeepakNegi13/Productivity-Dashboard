import { Bell, CircleUserRound, Moon, Sun } from "lucide-react";
import { useState } from "react";
function Navbar() {
	const [light, setLight] = useState(true);
	return (
		<div className="bg-subtle  max-w-360 w-full h-19 p-2.5 flex  items-center  justify-between rounded-(--radius) m-2 ">
			<div className="hidden xs:block">DASHBOARD</div>
			<div className="flex px-3 gap-[3vw] items-center flex-row ml-auto">
				<div className="rounded-full p-3 bg-surface">
					<Bell />
				</div>
				<div className="rounded-full p-3 bg-surface">
					{light ?
						<Moon className=""/>
					:	<Sun />}
				</div>
				<div className="flex items-center">
					<div className=" rounded-full mr-1.5 p-3 bg-surface">
						<CircleUserRound />
					</div>
					<div  className="hidden sm:block">
						<div>name</div>
						<div className="text-surface">name@gmail.com</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
