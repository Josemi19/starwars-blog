const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase:"https://www.swapi.tech/api/",
			people: JSON.parse(localStorage.getItem("people")) || [],
			planets: JSON.parse(localStorage.getItem("planets")) || [],
			vehicles: JSON.parse(localStorage.getItem("vehicles")) || [],
			natures:["people","planets","vehicles"],
			favorites: JSON.parse(localStorage.getItem("favorites")) || []
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
							data.results.map(async (item) => {
								let responseTwo = await fetch(`${store.urlBase}${nature}/${item.uid}`)
								let dataTwo = await responseTwo.json()
								console.log(dataTwo.results)
								setStore({
									...store,
									[nature]:[...store[nature],dataTwo.results]
								})
								localStorage.setItem(nature, JSON.stringify(store[nature]))
							})
							}
						}catch(error){
							console.log(error)
						}
					} 
				}
			},

			addFavs: (item) =>{
				const store = getStore()
				setStore({
					...store, 
					favorites: [...store[favorites], item]
				})
				localStorage.setItem(favorites, JSON.stringify(store[favorites]))
			}
			// getCharacter: async ()=>{
			// 	try {
			// 		const store = getStore()
			// 		let response = await fetch(`${store.urlBase}people`);
			// 		let data = await response.json();
			// 		setStore({...store, character: data.results });
			// 	} catch (error) {
			// 		console.log(error);
			// 	}
			// },
			// getPlanets: async ()=>{
			// 	try {
			// 		const store = getStore()
			// 		let response = await fetch(`${store.urlBase}planets`);
			// 		let data = await response.json();
			// 		setStore({...store, planets: data.results });
			// 	} catch (error) {
			// 		console.log(error);
			// 	}
			// },
			// getVehicles: async ()=>{
			// 	try {
			// 		const store = getStore()
			// 		let response = await fetch(`${store.urlBase}vehicles`);
			// 		let data = await response.json();
			// 		setStore({...store, vehicles: data.results });
			// 	} catch (error) {
			// 		console.log(error);
			// 	}
			// }
		}
	};
};

export default getState;
