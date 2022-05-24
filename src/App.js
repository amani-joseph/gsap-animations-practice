/** @format */
import React, { useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TweenMax, Power3 } from "gsap";

function App() {
	let logoItem = useRef(null);
	let textItem = useRef(null);
	console.log(logoItem);

	useEffect(() => {
		TweenMax.to(logoItem, 2, {
			opacity: 1,
			y: -50,
			ease: Power3.easeInOut,
		});

		TweenMax.to(textItem, 0.9, {
			opacity: 1,
			y: -50,
			ease: Power3.easeInOut,
			delay: 0.3,
		});
	});
	return (
		<div className="App">
			<header className="App-header">
				<img
					ref={(el) => {
						logoItem = el;
					}}
					src={logo}
					className="App-logo"
					alt="logo"
				/>
				<p
					ref={(el) => {
						textItem = el;
					}}>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
