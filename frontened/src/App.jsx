import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

function App() {
	return (
		<div className="min-h-screen flex p-2 flex-col justify-start items-center bg-base">
      <SideBar/>
			<div>
				<Navbar />
				<Routes>
					<Route path="/" element={<HeroSection />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
