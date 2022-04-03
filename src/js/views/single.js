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
				<img src={params.resource == "planets" ? "https://starwars-visualguide.com/assets/img/planets/" + `${store.item.id}.jpg` : "https://starwars-visualguide.com/assets/img/characters/" + `${store.item.id}.jpg` } alt="404 Not Found" />
				{store.item && (
					<react.Fragment>
						<div className="d-flex justify-content-center row">
							<h1 id="Title" className="display-4 d-flex justify-content-center">{store.item.properties && store.item.properties.name}</h1>
							<p className="my-4 text-center">{store.item.description}</p>
						</div>
					</react.Fragment>
				)}
			</div>
			<div className="container d-flex" id="contenedorDeDatos">
				<div className="Datos"><p>
					<b>name</b>
					{store.item.properties && store.item.properties.name}</p>
				</div>
				<div className="Datos"><p>
					<b>{params.resource == "planets" ? "Climate" :  "Birth Year"}</b>
					{params.resource == "planets" ? store.item.properties && store.item.properties.climate : store.item.properties && store.item.properties.birth_year}</p>
				</div>
				<div className="Datos"><p>
					<b>{params.resource == "planets" ? "Population" : "Gender"}</b>
					{params.resource == "planets" ? store.item.properties && store.item.properties.population : store.item.properties && store.item.properties.gender}</p>
				</div>
				<div className="Datos"><p>
					<b>{params.resource == "planets" ? "Orbital period" : "Height"}</b>
					{params.resource == "planets" ? store.item.properties && store.item.properties.orbital_period : store.item.properties && store.item.properties.height}</p>
				</div>
				<div className="Datos"><p>
					<b>{params.resource == "planets" ? "Rotation period" : "Skin color"}</b>
					{params.resource == "planets" ? store.item.properties && store.item.properties.rotation_period :  store.item.properties && store.item.properties.skin_color}</p>
				</div>
				<div className="Datos"><p>
					<b>{params.resource == "planets" ? "Diameter" : "Eye color"}</b>
					{params.resource == "planets" ? store.item.properties && store.item.properties.diameter : store.item.properties && store.item.properties.eye_color}</p>
				</div>
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
