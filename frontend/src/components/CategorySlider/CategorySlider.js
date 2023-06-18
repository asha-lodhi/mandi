import React from "react";
import C1 from "../../assets/img/category/C1.png";
import C2 from "../../assets/img/category/C2.webp";
import C3 from "../../assets/img/category/C3.jpeg";
import C4 from "../../assets/img/category/C4.jpeg";
import C5 from "../../assets/img/category/C5.jpeg";
import C6 from "../../assets/img/category/C6.webp";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CategorySlider = () => {
	const arr = [C1, C2, C3, C4, C5, C6];
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 2000, min: 1024 },
			items: 5,
		},
		// tablet: {
		// 	breakpoint: { max: 1024, min: 464 },
		// 	items: 2,
		// },
		// mobile: {
		// 	breakpoint: { max: 464, min: 0 },
		// 	items: 1,
		// },
	};
	return (
		<>
			<div className="centerContent">
				<div className="centerTxt">
					<div className="innerTxt">
						<h6 className="smTxt">...FRESH FROM OUR FARM...</h6>
					</div>
					<h1 className="lgTxt">All Categories</h1>
				</div>
			</div>
			<div className="categorypDiv">
				<Carousel
					responsive={responsive}
					arrows={false}
					autoPlay={true}
					infinite={true}
					autoPlaySpeed={5000}
					transitionDuration={3000}>
					{arr.map((i) => (
						<div className="imgContainerCss">
							<img
								style={{
									height: "13rem",
									width: "13rem",
									borderRadius: "10rem",
								}}
								class="img-fluid"
								alt="100%x280"
								src={i}
							/>
							<div className="sliderCategoryTxt">
								<span>Fruits & Vegetables</span>
							</div>
						</div>
					))}
				</Carousel>
			</div>

			{/* <div className="imgContainerCss">
				<img
					style={{ height: "16rem", width: "16rem", borderRadius: "10rem" }}
					class="img-fluid"
					alt="100%x280"
					src={S3}
				/>
				<div className="sliderCategoryTxt">
					<span>Fruits & Vegetables</span>
				</div>
			</div> */}
		</>
	);
};

export default CategorySlider;
