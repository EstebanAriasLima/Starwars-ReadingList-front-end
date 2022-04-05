import React, { useContext, useEffect, useState } from "react";
// import { StaticRouter } from "react-router-dom";
// import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Card } from "../component/Card";
// import { CardPlanets } from "../component/CardPlanets";
// import { CardVehicles } from "../component/CardVehicles";
import { Title } from "../component/Title";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context)


	return (
		<div className="text-center container mt-5">
			<Title text="Characters" />
			<div className="prueba">
				{store.characters.map((character, index) => {
					return <Card
						key={character.id}
						item={character}
						resource={"people"}/>
				})}
			</div>
			<Title text="Planets" />
			<div className="prueba">
				{store.planet.map((planet, index) => {
					return <Card
						key={planet.id}
						item={planet}
						resource={"planets"} />
				})}
			</div>
			<Title text="Vehicles"/>
			<div className="prueba">
				{store.vehicle.map((vehicle, index) => {
					return <Card
					key={vehicle.id} item={vehicle} resource={"vehicles"} />
				})}
			</div>
		</div>
	)
}