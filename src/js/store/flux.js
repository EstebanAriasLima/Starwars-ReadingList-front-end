import { useState } from "react/cjs/react.development";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			item: {},
			currentItem: [],
			characters: [],
			planet: [],
			vehicle: [],
			baseUrl: "http://127.0.0.1:5000/",
			baseUrlSWAPI: "https://www.swapi.tech/api/",
			list:[],
			favorite: undefined,
		},
		actions: {
			getSingle: async (id, resource) => {
				console.log("getSingle se ejecuto")
				const store = getStore();
				const response = await fetch(
					`${store.baseUrl}${resource}/${id}`
				);
				const body = await response.json();
				if(!response.ok) return;
				setStore({
					item: body
				})
			},
			getCharacters: async () => {
				const store = getStore();
				const response = await fetch(
					`${store.baseUrl}people`
				);
				const body = await response.json();
				setStore({
					characters: body, 
				});
				if (response.ok) {
					(body)
				}
			},
			getPlanets: async () => {
				const store = getStore();
				const response = await fetch(
					`${store.baseUrl}planets`
				);
				const body = await response.json();
				setStore({
					planet: body,
				})
				if (response.ok) {
					(body)
				}
			},
			getVehicles: async () => {
				const store = getStore();
				const response = await fetch(
					`${store.baseUrl}vehicles`
				);
				const body = await response.json();
				setStore({
					vehicle: body,
				})
				if (response.ok) {
					(body)
				}
			},
			getCharactersSWAPI: async () => {
				const store = getStore();
				const response = await fetch(
					`${store.baseUrlSWAPI}people`
				);
				const body = await response.json();
				setStore({
					characters: body,
				});
				if (response.ok) {
					(body.results)
				}
			},

			getFavorites: async (resource, id) => {
				const store = getStore();
				const response = await fetch(
					`${store.baseUrl}${resource}/${id}`
				)
				const body = await response.json();
				if (!response.ok) return;
				setStore({
					favorite: Object.assign({resource},body),
					list: [...store.list, {...body, resource}],
				});

			},
			deleteFavorite: (deleteFavorite) => {
				const store = getStore();
				setStore({
					list: deleteFavorite,
				});
				console.log(store.list);
			},















			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
