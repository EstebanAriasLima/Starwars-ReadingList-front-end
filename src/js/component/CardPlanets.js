// card que ha uedado inutilizado, ya que se ha optimizado el Card.js para que pueda ser utilizado para vehiculos y planetas


import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card } from "./Card"

export const CardPlanets = ({ item }) => {
    return (
        <div className="cardPrueba p-0 mx-2" style={{ minWidth: "250px" }}>
            <img src={"https://starwars-visualguide.com/assets/img/planets/" + `${item.uid}.jpg`} className="card-img-top" alt="404 Not Found" />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text"></p>
                <div className="d-flex" style={{ justifyContent: "space-between" }}>
                    <Link to={"/planets/" + `${item.id}`} >
                        <button className="btn btn-outline-primary">Learn more!</button>
                    </Link>
                    <button href="#" className="btn btn-outline-warning">
                        <i className="far fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
CardPlanets.propTypes = {
    item: PropTypes.object,
};