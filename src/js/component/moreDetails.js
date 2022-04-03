import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Title } from "../component/Title";
import { Context } from "../store/appContext";

export const MoreDetails = ({ item }) => {
    const {store, actions} = useContext(Context)
    return (
        <div className="container d-flex" >
            <div id="Image">
                <img src="" className="card-img-top" alt="404 Not Found" />
            </div>
            <div id="content">
                <div id="Title">
                {store.characters.map((character, index) => {
					return <Title 
                        text={character.name}
						key={character.id}
						item={character}/>
				})}
                </div>
                <div id="Content" className="text-center">
                
                </div>
            </div>
        </div>
    );
};
