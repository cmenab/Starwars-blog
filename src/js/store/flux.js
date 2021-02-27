const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			people: null,
			peopleDetail: null,
			planets: null,
			planetsDetail: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadPlanets: url => {
				fetch(url)
					.then(response => response.json())
					.then(response => setStore({ planets: response }));
			},
			loadPlanetsDetail: theid => {
				fetch("https://www.swapi.tech/api/planets/" + theid)
					.then(response => response.json())
					.then(response => setStore({ planetsDetail: response.result }));
			},
			loadPeople: url => {
				fetch(url)
					.then(response => response.json())
					.then(response => setStore({ people: response }));
			},
			loadPeopleDetail: theid => {
				fetch("https://www.swapi.tech/api/people/" + theid)
					.then(response => response.json())
					.then(response => setStore({ peopleDetail: response.result }));
			},
			addFavorites: like => {
				setStore({ favorites: getStore().favorites.concat(like) });
			},
			deleteFavorite: itemToDelete => {
				const arrayFilter = getStore().favorites.filter(item => {
					return item.uid != itemToDelete.uid;
				});
				setStore({ favorites: arrayFilter });
				console.log(itemToDelete);
			}
		}
	};
};

export default getState;
