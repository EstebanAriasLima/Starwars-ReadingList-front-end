import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import react from "react";

export const Single = (props) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		if (params.id && params.resource) {
			console.log("hello")
			console.log(params.resource)
			actions.getSingle(params.id, params.resource);
		}
	}, [])
	return (
		<div className="jumbotron">
			<div id="Contenedor" className="container d-flex">
				<img src={params.resource == "planets" ? "https://starwars-visualguide.com/assets/img/planets/" + `${store.item.uid}.jpg` : params.resource == "vehicles" ? "https://starwars-visualguide.com/assets/img/vehicles/" + `${store.item.uid}.jpg` : "https://starwars-visualguide.com/assets/img/characters/" + `${store.item.uid}.jpg`} alt="404 Not Found" />
				{store.item && (
					<react.Fragment>
						<div className="d-flex justify-content-center row">
							<h1 id="Title" className="display-4 d-flex justify-content-center">{store.item && store.item.name}</h1>
							<p className="my-4 text-center">{store.item.description}</p>
						</div>
					</react.Fragment>
				)}
			</div>
			<div className="container d-flex" id="contenedorDeDatos">
				<div className="Datos">
					<b className="px-2">name</b>
					<p>
					{store.item && store.item.name}</p>
				</div>
				<div className="Datos">
					<b className="px-2">{params.resource == "planets" ? "Climate" : params.resource == "vehicles" ? "model" :  "Birth Year"} </b>
					<p>
					{params.resource == "planets" ? store.item && store.item.climate : params.resource == "vehicles" ? store.item && store.item.model : store.item && store.item.birth_year}</p>
				</div>
				<div className="Datos">
					<b className="px-2">{params.resource == "planets" ? "Population" :params.resource == "vehicles" ? "consumables" : "Gender"}</b>
					<p>
					{params.resource == "planets" ? store.item && store.item.population : params.resource == "vehicles" ? store.item && store.item.consumables : store.item && store.item.gender}</p>
				</div>
				<div className="Datos">
					<b className="px-2">{params.resource == "planets" ? "Orbital period" :params.resource == "vehicles" ? "vehicle_class" : "Height"}</b>
					<p>
					{params.resource == "planets" ? store.item && store.item.orbital_period :params.resource == "vehicles" ? store.item.vehicle_class : store.item && store.item.height}</p>
				</div>
				<div className="Datos">
					<b className="px-2">{params.resource == "planets" ? "Rotation period" : params.resource == "vehicles" ? "crew" : "Skin color"}</b>
					<p>
					{params.resource == "planets" ? store.item && store.item.rotation_period : params.resource == "vehicles" ? store.item && store.item.crew : store.item && store.item.skin_color}</p>
				</div>
				<div className="Datos">
					<b className="px-2">{params.resource == "planets" ? "Diameter" : params.resource == "vehicles" ? "passengers" : "Eye color"}</b>
					<p>
					{params.resource == "planets" ? store.item && store.item.diameter : params.resource == "vehicles" ? store.item && store.item.passengers : store.item && store.item.eye_color}</p>
				</div>
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
