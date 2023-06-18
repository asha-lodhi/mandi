import React from "react";
import Slider from "../../components/Slider/slider";
import CategorySlider from "../../components/CategorySlider/categorySlider";
import CustomerReview from "../../components/CustomerReview/customerReview";
import List from "../../components/ItemLIist/list";
import Offer from "../../components/Offers/offer";
import VL1 from "../../assets/img/list/Vegetable/Tomato.jpeg";
import VL2 from "../../assets/img/list/Vegetable/Brinjal.jpeg";
import VL3 from "../../assets/img/list/Vegetable/Broccoli.jpeg";
import VL4 from "../../assets/img/list/Vegetable/Cauliflower.webp";
import VL5 from "../../assets/img/list/Vegetable/ShimlaMirch.avif";
import FL1 from "../../assets/img/list/Fruits/Apple.jpeg";
import FL2 from "../../assets/img/list/Fruits/Banana.jpeg";
import FL3 from "../../assets/img/list/Fruits/Mango.jpeg";
import FL4 from "../../assets/img/list/Fruits/Strawberry.jpeg";
import FL5 from "../../assets/img/list/Fruits/Cherries.webp";
import FL6 from "../../assets/img/list/Fruits/Guava.webp";
import FL7 from "../../assets/img/list/Fruits/Dragon.webp";

const LandingPage = () => {
	const Varr = [
		{ src: VL1, title: "Tomato", price: "10rs" },
		{ src: VL2, title: "Brinjal", price: "20rs" },
		{ src: VL3, title: "Broccoli", price: "40rs" },
		{ src: VL4, title: "Cauliflower", price: "25rs" },
		{ src: VL5, title: "ShimlaMirch", price: "15rs" },
	];
	const Farr = [
		{ src: FL1, title: "Apple", price: "10rs" },
		{ src: FL2, title: "Banana", price: "20rs" },
		{ src: FL3, title: "Mango", price: "40rs" },
		{ src: FL4, title: "Strawberry", price: "25rs" },
		{ src: FL5, title: "Cherries", price: "15rs" },
		{ src: FL6, title: "Guava", price: "15rs" },
		{ src: FL7, title: "Dragon Fruit", price: "15rs" },
	];
	return (
		<>
			<Slider />
			{/* <Menu /> */}
			<Offer />
			<CategorySlider />
			<List MainTitle={"Fresh Vegetable"} data={Varr} />
			<Offer />
			<List MainTitle={"Fresh Fruits"} data={Farr} />
			<CustomerReview />
		</>
	);
};

export default LandingPage;
