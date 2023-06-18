import React from "react";
import S1 from "../../assets/img/S1.jpeg";
import S2 from "../../assets/img/S2.jpeg";
import S3 from "../../assets/img/S3.jpeg";
import S4 from "../../assets/img/S4.jpeg";

import Carousel from "react-bootstrap/Carousel";
import "../Slider/slider.css";

function slider() {
	return (
		<>
			<Carousel controls={false} indicators={false}>
				<Carousel.Item interval={6000}>
					<img
						className="d-block w-100"
						src={S1}
						alt="First slide"
						style={{ height: "460px" }}
					/>
					<Carousel.Caption
						style={{
							postion: "relative",
							top: "8rem",
							fontSize: "40px",
							fontWeight: "bold",
							color: "#3F71EA",
						}}>
						<h3 class="sliderText">Organic Veggies and Food</h3>
						<h3 class="sliderText">You cook healthy</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={4000}>
					<img
						className="d-block w-100"
						src={S2}
						alt="Second slide"
						style={{ height: "460px" }}
					/>
					<Carousel.Caption style={{ postion: "relative", top: "8rem" }}>
						<h3 class="sliderText">Organic Veggies and Food</h3>
						<h3 class="sliderText">You cook healthy</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={4000}>
					<img
						className="d-block w-100"
						src={S3}
						alt="Third slide"
						style={{ height: "460px" }}
					/>
					<Carousel.Caption style={{ postion: "relative", top: "8rem" }}>
						<h3 class="sliderText">Organic Veggies and Food</h3>
						<h3 class="sliderText">You cook healthy</h3>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={4000}>
					<img
						className="d-block w-100"
						src={S4}
						alt="Third slide"
						style={{ height: "460px" }}
					/>
					<Carousel.Caption style={{ postion: "relative", top: "8rem" }}>
						<h3 class="sliderText">Organic Veggies and Food</h3>
						<h3 class="sliderText">You cook healthy</h3>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</>
	);
}

export default slider;
