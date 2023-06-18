import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const List = (props) => {
	const { MainTitle, data } = props;

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
					<h1 className="lgTxt">{MainTitle}</h1>
				</div>
			</div>
			<div className="categorypDiv">
				<div class="row">
					{data.map((i) => (
						<div className="itmContainerCss">
							<img
								style={{
									height: "15rem",
									width: "100%",
								}}
								className="itmImgContainerCss"
								class="img-fluid"
								alt="100%x280"
								src={i.src}
							/>
							<div className="listTxt">
								<span>{i.title}</span>
							</div>
							<div className="listTxt">
								<span>{i.price}/kg</span>
							</div>
							<div className="cartTxt">
								<span>Add to cart</span>
							</div>
							<div className="reviewTxt">
								<span>Buy Now</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default List;
