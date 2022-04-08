const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase:"https://www.swapi.tech/api/",
			character:[],
			planets:[],
			vehicles:[]
		},
		actions: {
			getCharacter: async ()=>{
				try {
					const store = getStore()
					let response = await fetch(`${store.urlBase}people`);
					let data = await response.json();
					setStore({...store, character: data.results });
				} catch (error) {
					console.log(error);
				}
			},
			getPlanets: async ()=>{
				try {
					const store = getStore()
					let response = await fetch(`${store.urlBase}planets`);
					let data = await response.json();
					setStore({...store, planets: data.results });
				} catch (error) {
					console.log(error);
				}
			},
			getVehicles: async ()=>{
				try {
					const store = getStore()
					let response = await fetch(`${store.urlBase}vehicles`);
					let data = await response.json();
					setStore({...store, vehicles: data.results });
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
