import React from "react";
import "../Menu/menu.css";

const menu = () => {
	return (
		// <section class="menus" id="menus">
		<div class="menu-heading" md="4">
			<span>category</span>
			<ul class="filter">
				<li class="filter-btn active" style={{ width: "100px" }}>
					<h3>All</h3>
				</li>
				<li class="filter-btn">
					<h3> Fresh Vegetable</h3>
				</li>
				<li class="filter-btn">
					<h3> Fresh Fruits</h3>
				</li>
				<li class="filter-btn">
					<h3>Spices</h3>
				</li>
				<li class="filter-btn">
					<h3>Others</h3>
				</li>
			</ul>
		</div>
		// </section>
	);
};

export default menu;
