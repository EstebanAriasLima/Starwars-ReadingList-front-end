import PropTypes from "prop-types";
import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const Card = ({ item, resource }) => {

const { store, actions } = useContext(Context);
    return (
        <div className="cardPrueba p-0 mx-2" style={{ minWidth: "250px" }}>
            <img src={`https://starwars-visualguide.com/assets/img/${resource == "people" ? "characters" : resource}/` + `${item.uid}.jpg`} className="card-img-top" alt="404 Not Found" />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text"></p>
                <div className="d-flex" style={{ justifyContent: "space-between" }}>
                    <Link to={`/${resource}/${item.id}`} >
                        <button className="btn btn-outline-primary">Learn more!</button>
                    </Link>
                    <button
                        type="button"
                        className="btn btn-outline-warning"
                        onClick={(e) => {
                            console.log(resource, item.id);
                            actions.getFavorites(resource, item.id);
                        }}>
                        <i className="fas fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};
Card.propTypes = {
    item: PropTypes.object,
    resource: PropTypes.string,
};