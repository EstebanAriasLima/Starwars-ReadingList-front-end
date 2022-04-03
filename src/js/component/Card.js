import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Card = ({ item }) => {
    return (
        <div className="cardPrueba p-0 mx-2" style={{ minWidth: "250px" }}>
            <img src={"https://starwars-visualguide.com/assets/img/characters/" + `${item.id}.jpg`} className="card-img-top" alt="404 Not Found" />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text"></p>
                <div className="d-flex" style={{ justifyContent: "space-between" }}>
                    <Link to={"/people/" + `${item.id}`} >
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
Card.propTypes = {
    item: PropTypes.object,
};