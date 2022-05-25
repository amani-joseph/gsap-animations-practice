/** @format */
import React, { useRef, useEffect } from "react";
import "./App.css";
import { TweenMax, Power3 } from "gsap";

function App() {
	let circleYellow = useRef(null);
	let circleRed = useRef(null);
	let circleBlue = useRef(null);

	useEffect(() => {
		TweenMax.from(circleYellow, 0.7, {
			opacity: 0,
			x: 40,
			ease: Power3.easeOut,
		});
	}, []);
	return (
		<div className="App">
			<header className="App-header">
				<div className="circle-container">
					<div
						ref={(el) => {
							circleYellow = el;
						}}
						className="circle"></div>
					<div
						ref={(el) => {
							circleRed = el;
						}}
						className="circle red"></div>
					<div
						ref={(el) => {
							circleBlue = el;
						}}
						className="circle blue"></div>
				</div>
			</header>
		</div>
	);
}

export default App;
