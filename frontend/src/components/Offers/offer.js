import React from "react";
import Offer from "../../assets/img/Offer.jpeg";

const offer = () => {
	return (
		<div
			style={{
				height: "300px",
				width: "100%",
				margin: "2px",
			}}
			class="row">
			<div class="col">
				<img
					style={{
						height: "30rem",
						width: "90%",
						// paddingBottom: "4rem",
					}}
					className="itmImgContainerCss"
					class="img-fluid"
					alt="100%x280"
					src={Offer}
				/>
			</div>

			<div
				class="col"
				style={{
					paddingTop: "5rem",
					marginBottom: "2rem",
					fontFamily: "Times New Roman",
				}}>
				<h2>Offer! Offer! Offer!</h2>
				<h1 style={{ color: "#81c435", fontWeight: "bold" }}>Sale 68% Off</h1>
				<h1 style={{ fontWeight: "bold" }}>All fresh products</h1>
				<div class="d-flex align-items-lg-center mt-3 mt-lg-0">
					<a href="#" class="btn btn-sm btn-primary w-full w-lg-auto">
						Order Now
					</a>
				</div>
			</div>
		</div>
	);
};

export default offer;
