<template>
	<main>
		

		

		<div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
			<div class="flex flex-col">

				<div class="grid grid-cols-3 gap-4">

					<form>
						<label for="default-search"
							class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
						<div class="relative">
							<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
									class="w-6 h-6">
									<path fill-rule="evenodd"
										d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
										clip-rule="evenodd" />
								</svg>

							</div>
							<input type="search" id="default-search"
								class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Search Stations..." required>

						</div>
					</form>




				</div>

			</div>

		</div>



		<main>
			<div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
				<!-- table -->
				<div class="flex flex-col">
					<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
							<div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
								<table class="min-w-full divide-y divide-gray-200">
									<thead class="bg-gray-50">
										<tr>
											<th scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												FID
											</th>
											
											<th scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Adress
											</th>
											<th scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												FID
											</th>
											<th scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Kapasiteet
											</th>
											<th scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Kaupunki
											</th>
											<th scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Name
											</th>
											<th scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Namn
											</th>
											<th scope="col"
												class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Nimi
											</th>
										</tr>
									</thead>
									<tbody class="bg-white divide-y divide-gray-200">
										<!-- check if loading -->
										<tr v-if="loading">
											<td colspan="5" class="text-center py-10">
												<span class="
												
												justify-center
												items-center
												flex
												overflow-hidden

												">
												<center>
													<svg class=" animate-spin -ml-1 mr-3 h-12 w-12 text-blue-500"
														xmlns="http://www.w3.org/2000/svg" fill="none"
														viewBox="0 0 24 24">
														<circle class="opacity-25" cx="12" cy="12" r="10"
															stroke="currentColor" stroke-width="4"></circle>
														<path class="opacity-75" fill="currentColor"
															d="M4 12a8 8 0 018-8v1a7 7 0 00-7 7h1z"></path>
													</svg>
												</center>
												</span>
											<span class="
											mt-2
											text-center
											text-sm
											text-gray-500

											">	Loading...</span>
											</td>
										</tr>
										<tr v-else  v-for="station in stations.results" :key="station.id">
											<td class="px-6 py-4 whitespace-nowrap">
												<div class="flex items">
													<div class="flex-shrink-0 h-10 w-10">
														
													</div>
													<div class="ml-4">
														<div class="text-sm font-medium text-gray-900">
															{{ station.FID }}
														</div>
														<div class="text-sm text-gray-500">
															
														</div>
													</div>

												</div>
											</td>
											<td class="px-6 py-4 whitespace-nowrap">
												<div class="flex items">
													<div class="flex-shrink-0 h-10 w-10">
														
													</div>
													<div class="ml-4">
														<div class="text-sm font-medium text-gray-900">
															{{ station.Adress }}
														</div>
														<div class="text-sm text-gray-500">
															
														</div>
													</div>

												</div>
											</td>
											<td class="px-6 py-4 whitespace-nowrap">
												<div class="flex items">
													<div class="flex-shrink-0 h-10 w-10">
													
													</div>
													<div class="ml-4">
														<div class="text-sm font-medium text-gray-900">
															{{ station.FID }}
														</div>
														<div class="text-sm text-gray-500">
															<!-- {{ formatDateandTime(journey.return_date) }} -->
														</div>
													</div>

												</div>
											</td>
											<td class="px-6 py-4 whitespace-nowrap">
												<div class="text-sm text-gray-900">
													<!-- {{formatDistance(journey.covered_distance_meters)}} -->
												</div>

											</td>

											<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
												<!-- {{ formatTime(journey.duration_in_sec) }} -->
											</td>
											<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
												<a href="#" class="text-indigo-600 hover:text-indigo-900">View
													Station</a>
											</td>
										</tr>
									</tbody>
								</table>

								<!-- paginate  -->

								<div
									class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
									<div class="flex-1 flex justify-between sm:hidden">
										<a href="#"
											class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
											Previous
										</a>
										<a href="#"
											class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
											Next
										</a>
									</div>
									<div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
										<div>
											<p class="text-sm text-gray-700">
												Showing page
												<span class="font-medium">
													{{ stations.next.page - 1 }}
												</span>
												of
												<span class="font-medium">
													{{ stations.results.length }}
												</span>

												<span class="font-medium">
												
												</span>
												results
											</p>
										</div>
										<div>
											<nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
												aria-label="Pagination">


												<!-- prev and next  -->
												<a href="#"
													class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
													@click="prevPage">
													<span class="sr-only">Previous</span>
													<!-- Heroicon name: solid/chevron-left -->
													<svg xmlns="http://www.w3.org/2000/svg" fill="none"
														viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
														class="w-6 h-6">
														<path stroke-linecap="round" stroke-linejoin="round"
															d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
													</svg>

												</a>
												<a href="#"
													class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
													@click="nextPage">
													<span class="sr-only">Next</span>
													<!-- Heroicon name: solid/chevron-right -->
													<svg xmlns="http://www.w3.org/2000/svg" fill="none"
														viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
														class="w-6 h-6">
														<path stroke-linecap="round" stroke-linejoin="round"
															d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
													</svg>

												</a>


											</nav>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>


			</div>
		</main>


	</main>
</template>

<script setup>
// import Header
import Header from '@/layout/Header.vue'
// import Filter


import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
// import store
import store from "@/stores/index.js";

// import { notify } from "notiwind"
import { computed } from "vue";

const route = useRoute();

const router = useRouter();


store.dispatch("getStations");

// paginate

const page = ref(1);
const limit = ref(10);


const stations = computed(() => store.getters.station);
// use getters



// loading 
const loading = ref(true);

// get req params

const nextPage = () => {
	loading.value = true;

	// set loading to false after 2 seconds

	setTimeout(() => {
		loading.value = false;
	}, 2000);
	page.value++;
	store.dispatch("getStations", page.value);

	// set loading to true
	
	console.log(page.value);
};

const prevPage = () => {
	loading.value = true;

	// set loading to false after 2 seconds

	setTimeout(() => {
		loading.value = false;
	}, 2000);
	page.value--;
	store.dispatch("getStations", page.value);
};


// load for 2 seconds

setTimeout(() => {
	loading.value = false;
}, 2000);








// format date




// pagination

















</script>


