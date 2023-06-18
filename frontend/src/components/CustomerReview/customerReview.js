import React from "react";
import Customer from "../../assets/img/CustomerReview.avif";

const customerReview = () => {
	return (
		<>
			<div className="centerContent">
				<div className="centerTxt">
					<div className="innerTxt">
						<h6 className="smTxt"> Happy Customers</h6>
					</div>
					<h1 className="lgTxt">What people think about us</h1>
				</div>
			</div>

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
						src={Customer}
					/>
				</div>
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
		</>
	);
};

export default customerReview;
