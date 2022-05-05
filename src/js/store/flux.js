import { resolveConfig } from "prettier";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase:"http://127.0.0.1:3000/",
			people: JSON.parse(localStorage.getItem("people")) || [],
			planets: JSON.parse(localStorage.getItem("planets")) || [],
			natures:["people","planets"],
			favorites: JSON.parse(localStorage.getItem("favorites")) || [],
			token: JSON.parse(localStorage.getItem("token")) || ""
		},
		actions: {

			getApi: async ()=>{
				const store = getStore()
				if(!store.people.length){
					for(let nature of store.natures){
						try{
							let response = await fetch(`${store.urlBase}${nature}`)
							let data = await response.json()
							if(response.ok){
								setStore({
									...store,
									[nature]:[...store[nature],data]
								})
								localStorage.setItem(nature, JSON.stringify(store[nature]))
							
							}
						}catch(error){
							console.log(error)
						}
					} 
				}
			},

			addFavs: async (category, name) =>{
				const store = getStore()
				const actions = getActions()
				let tkn = store.token
				const body = {
					"category": category,
					"name": name
				}
				try{
					let response = await fetch(`${store.urlBase}favoritos`,{
						method: 'POST',
						body: JSON.stringify(body),
						headers:{
							"Content-Type":"application/json",
							"Authorization": `Bearer ${tkn}`
						}
					})
					if(response.ok){
					actions.getFavoritos()
					}
				}
				catch(error){
					console.log(error)
				}
			},

			deleteFavs: async (fav_name) =>{
				const store = getStore()
				const actions = getActions()
				let tkn = store.token
				let body = {
					"fav_name": fav_name
				}
				try{
					let response = await fetch(`${store.urlBase}favoritos`,{
						method: 'DELETE',
						body: JSON.stringify(body),
						headers:{
							'Content-Type':'application/json',
							'Authorization':`Bearer ${tkn}`
						}
					})
					if(response.ok){
						actions.getFavoritos()
					}
				}
				catch(error){
					console.log(error)
				}
			},

			logIn: async (email, password) => {
				const store = getStore()
				const actions = getActions()
				let body = {
					"email": email,
					"password": password
				}
				try{
					let response = await fetch(`${store.urlBase}login`,{
						method: 'POST',
						body: JSON.stringify(body),
						headers:{
							'Content-Type': 'application/json'
						}
					})
					if(response.ok){
						let data = await response.json()
						setStore({
							...store,
							token: data.token
						})
						localStorage.setItem("token", JSON.stringify(store.token))
						actions.getFavoritos()
					}
				}
				catch(error){
					console.log(error)
				}
			},

			signUp: async (email, password, nombre, apellido) => {
				const store = getStore()
				const actions = getActions()
				let data = {
					"email": email,
					"password": password,
					"nombre": nombre,
					"apellido": apellido
				}
				try{
					let response = await fetch(`${store.urlBase}/signup`,{
						method: 'POST',
						body: JSON.stringify(data),
						headers:{
							'Content-Type': 'application/json'
						}
					})
					if(response.ok){
						actions.logIn(email, password)
					}
				}
				catch(error){
					console.log(error)
				}
			},

			logOut: () => {
				const store = getStore()
				setStore({
					...store,
					token: ""
				})
				localStorage.setItem("token", JSON.stringify(""))
				setStore({
					...store,
					favorites: []
				})
				localStorage.setItem("favorites", JSON.stringify([]))
			},

			getFavoritos: async () => {
				const store = getStore()
				let tkn = store.token
				try{
					let response = await fetch(`${store.urlBase}favoritos`,{
						method: 'GET',
						headers:{
							"Content-Type": "application/json",
							"Authorization": `Bearer ${tkn}`
						}
					})
					if(response.ok){
						let data = await response.json()
						setStore({
									...store,
									favorites: data
								})
								localStorage.setItem("favorites", JSON.stringify(store.favorites))
							
						// for(let i = 0; i <= data.length; i++){
						// 	setStore({
						// 		...store,
						// 		favorites: data[i].name
						// 	})
						// 	localStorage.setItem("favorites", JSON.stringify(store.favorites))
						// }
					}
				}
				catch(error){
					console.log(error)
				}
			}

		}
	};
};

export default getState;
