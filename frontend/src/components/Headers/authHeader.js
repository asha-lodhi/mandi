import React from "react";
import VeggieBrand from "../../assets/img/veggie.png";

const authFooter = () => {
	return (
		<div>
			<nav class="navbar navbar-expand-lg navbar-dark bg-dark px-0 py-2">
				<div class="container-xl">
					{/* <!-- Logo --> */}
					<a class="navbar-brand" href="#">
						<img
							src={VeggieBrand}
							class="h-8 sm"
							alt="..."
							style={{ height: "4rem" }}
						/>
					</a>
					<span class="navbar-brand">Veggie</span>

					{/* <!-- Navbar toggle --> */}
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarCollapse"
						aria-controls="navbarCollapse"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					{/* <!-- Collapse --> */}
					<div class="collapse navbar-collapse" id="navbarCollapse">
						{/* <!-- Nav --> */}
						<div class="navbar-nav mx-lg-auto">
							<a class="nav-item nav-link active" href="#" aria-current="page">
								Home
							</a>
							<a class="nav-item nav-link active" href="#">
								Product
							</a>
							<a class="nav-item nav-link active" href="#">
								Shops
							</a>
							<a class="nav-item nav-link active" href="#">
								Offers
							</a>
						</div>
						{/* <!-- search navigation --> */}
						<div class="col-md-5 mx-auto">
							<div class="input-group border  rounded">
								<input
									class="form-control bg-transparent text-white"
									type="search"
									placeholder="search"
									id="example-search-input"
								/>
								<span class="input-group-append">
									<button
										class="btn btn-outline-light bg-transparent"
										type="button">
										<i class="fa fa-search" style={{ fontSize: "28px" }}></i>
									</button>
								</span>
							</div>
						</div>

						{/* <!-- Right navigation --> */}
						<div class="navbar-nav ms-lg-4 ">
							<a class="nav-item nav-link active" href="#">
								Sign in
							</a>
						</div>
						{/* <!-- Action --> */}
						<div class="d-flex align-items-lg-center mt-3 mt-lg-0 mx-4">
							<a href="#" class="btn btn-sm btn-primary w-full w-lg-auto">
								Register
							</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default authFooter;
