import React from "react";
import S1 from "../../assets/img/S1.jpeg";
import S2 from "../../assets/img/S2.jpeg";
import S3 from "../../assets/img/S3.jpeg";
import Carousel from "react-bootstrap/Carousel";

import Menu from "../Menu/menu";

function slider() {
	return (
		<>
			<Carousel controls={false} indicators={false}>
				<Carousel.Item interval={1000}>
					<img
						className="d-block w-100"
						src={S1}
						alt="First slide"
						style={{ height: "400px" }}
					/>
				</Carousel.Item>
				<Carousel.Item interval={1000}>
					<img
						className="d-block w-100"
						src={S2}
						alt="Second slide"
						style={{ height: "400px" }}
					/>
				</Carousel.Item>
				<Carousel.Item interval={1000}>
					<img
						className="d-block w-100"
						src={S3}
						alt="Third slide"
						style={{ height: "400px" }}
					/>
				</Carousel.Item>
			</Carousel>
			<Menu />
		</>
	);
}

export default slider;
