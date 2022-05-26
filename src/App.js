/** @format */

import React from "react";

// Arrows
import ArrowLeft from "./assets/arrow-left.svg";
import ArrowRight from "./assets/arrow-right.svg";

//

// import "reset-css";
import "./App.scss";

const testimonials = [
	{
		name: "Julia Cameron",
		title: "Creative Director, VISA",
		image: `${require("./assets/image3.jpg")}`,
		quote: "It's all good. I was amazed at the quality of the Design. We've seen amazing results already.",
	},
	{
		name: "Mark Jacobs",
		title: "Tech Lead, Google",
		image: `${require("./assets/image.jpg")}`,
		quote: "The rebranding has really helped our business. Definitely worth the investment.",
	},
	{
		name: "Lisa Bearings",
		title: "Brand Coordinator, Facebook",
		image: `${require("./assets/image2.jpg")}`,
		quote: "The service was excellent. Absolutely wonderful! A complete redesign did it for us.",
	},
];

function App() {
	return (
		<div className="testimonial-section">
			<div className="testimonial-container">
				<div className="arrows left">
					<span>
						<img src={ArrowLeft} alt="Left arrow" />
					</span>
				</div>
				<div className="inner">
					<div className="t-image">
						<ul>
							<li>
								<img
									src={testimonials[0].image}
									alt={testimonials[0].name + " image"}
								/>
							</li>
							<li>
								<img
									src={testimonials[1].image}
									alt={testimonials[1].name + " image"}
								/>
							</li>
							<li>
								<img
									src={testimonials[2].image}
									alt={testimonials[2].name + " image"}
								/>
							</li>
						</ul>
					</div>
					<div className="t-content">
						<ul>
							<li>
								<div className="content-inner ">
									<p className="quote">
										{testimonials[0].quote}
									</p>
									<h3 className="name">
										{testimonials[0].name}
									</h3>
									<h4 className="title">
										{testimonials[0].title}
									</h4>
								</div>
							</li>
							<li>
								<div className="content-inner ">
									<p className="quote">
										{testimonials[0].quote}
									</p>
									<h3 className="name">
										{testimonials[0].name}
									</h3>
									<h4 className="title">
										{testimonials[0].title}
									</h4>
								</div>
							</li>
							<li>
								<div className="content-inner ">
									<p className="quote">
										{testimonials[0].quote}
									</p>
									<h3 className="name">
										{testimonials[0].name}
									</h3>
									<h4 className="title">
										{testimonials[0].title}
									</h4>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div className="arrows left">
					<span>
						<img src={ArrowRight} alt="Right arrow" />
					</span>
				</div>
			</div>
		</div>
	);
}

export default App;
