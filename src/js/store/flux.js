
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
								setStore({
									...store,
									[nature]:[...store[nature],dataTwo.result]
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

			addFavs: (name) =>{
				const store = getStore()
				let exist = store.favorites.find((item)=>{
					return(
						item == name
					)
				})
				if(!exist){
					setStore({
						...store,
						favorites:[...store.favorites,name]
					})
					localStorage.setItem("favorites" ,JSON.stringify(store.favorites))
				}
				
			},

			deleteFavs: (id) =>{
				const store = getStore()
				let newFavs = store.favorites.filter((item,index)=>{
					return(
						id != index
					)
				})
				store.favorites = newFavs
				setStore({
					...store,
					favorites: store.favorites
				})
				localStorage.setItem("favorites", JSON.stringify(store.favorites))
			}

		}
	};
};

export default getState;
