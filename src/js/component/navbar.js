import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Navbar = (item, resource) => {
	const { store, actions, context } = useContext(Context);
	const params = useParams();
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">
					<img className="logo mx-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png" />
				</Link>
				<div className="dropdown mx-5">
					<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
						<span className="badge badge-pill badge-light">
							{store.list.length}
						</span>
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{store.favorite && (
							store.list.map((favorite, index) => {
								return (
									<li className="dropdown-item" key={favorite.id}>
										<Link to={`${favorite.resource}/${favorite.id}`}>
											{favorite.name}
										</Link>
										<i
											className="fas fa-solid fa-trash close"
											onClick={(e) => {
												const deleteFavorite = store.list.filter(
													(deleteFavorite, i) => {
														if (index == i) {
															return false;
														} else {
															return true;
														}
													}
												);
												console.log(deleteFavorite);
												actions.deleteFavorite(deleteFavorite);
											}}>
										</i>
									</li>
								);
							})
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};
Navbar.propTypes = {
	item: PropTypes.object,
	resource: PropTypes.string,
};