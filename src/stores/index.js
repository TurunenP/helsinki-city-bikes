// store to get journey details

import ApiClient from "@/../Axios";

import { createStore } from "vuex";



export default createStore({
	state: {
		dept_lat: '',
		dept_long: '',
		arr_lat: '',
		arr_long: '',
		journey: [],
		singlejourney: [],
		station: [],
		loading: true,
		error: false,
		errorMessage: '',
	},
	mutations: {
		setjourney(state, journey) {
			state.journey = journey;

		},
		setLoading(state, loading) {
			state.loading = loading;
		},
		setStations(state, station) {
			state.station = station;
		},
		setSingleJourney(state, singlejourney) {
			state.singlejourney = singlejourney;
			state.dept_lat = singlejourney.departure_station;
			state.dept_long = singlejourney.departure_station;
			state.arr_lat = singlejourney.arrival_station;
			state.arr_long = singlejourney.arrival_station;

			console.log(state.arr_long)
		}


	},
	actions: {
		async getjourney({ commit, state }, page ) {

			try {
				
				if (!page){
					
					page = 1;
				}
			
				const response = await ApiClient.get(`/journeys?page=${page}`);
				console.log(page)
				commit('setjourney', response.data);
                // set loading to falsepayloadpage
                commit('setLoading', false);

				console.log(response.data.results);

				
			} catch (error) {
				console.log(error);
			}
		}
		,
		async getStations({ commit, state }, page ) {
			
			try {
				
				if (!page){
					page = 1;

				}
				const response = await ApiClient.get(`/stations?page=${page}`);
				console.log(page)
				commit('setStations', response.data);
				// set loading to falsepayloadpage
				commit('setLoading', false);

				console.log(response.data.results);

				
			} catch (error) {
				console.log(error);
			}
		},

		async  getSingleJourney({ commit, state }, id) {
			try {
				const response = await ApiClient.get(`/journeystations/${id}`);
				commit('setSingleJourney', response.data);

				


				
				commit('setLoading', false);
				// console.log(response.data);
			} catch (error) {
				console.log(error);
			}
		}



	},
	modules: {
	},
	getters: {
		journey: state => state.journey,
		singlejourney: state => state.singlejourney,
		
		loading: state => state.loading,
		station: state => state.station,

	}
});



