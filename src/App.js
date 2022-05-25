/** @format */
import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import { TweenMax, gsap, Power3 } from "gsap";

function App() {
	let circle = useRef(null);
	let circleRed = useRef(null);
	let circleBlue = useRef(null);

	const [state, setState] = useState[false];

	const handleExpand = () => {
		TweenMax.to(circleRed, 0.8, {
			width: 200,
			height: 200,
			opacity: 0.2,
			x: 200,
			ease: Power3.easeOut,
			delay: 0.2,
		});
		setState(true);
	};

	useEffect(() => {
		TweenMax.from(circle, 0.8, {
			opacity: 0.2,
			x: 200,
			ease: Power3.easeOut,
		});
		TweenMax.from(circleRed, 0.8, {
			opacity: 0.2,
			x: 200,
			ease: Power3.easeOut,
			delay: 0.2,
		});
		TweenMax.from(circleBlue, 0.8, {
			opacity: 0.2,
			x: 200,
			ease: Power3.easeOut,
			delay: 0.4,
		});
	}, []);
	return (
		<div className="App">
			<header className="App-header">
				<div className="circle-container">
					<div
						ref={(el) => {
							circle = el;
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
