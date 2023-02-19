<template>
  <div class="container-md 
     px-6 mx-auto
     py-8
     mt-8
      sm:px-6 lg:px-8

     ">
    <!-- two grid -->
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div class="col-span-1">
        <div class="bg-red-100 overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Journey Overview Details
            </h3>
            <div>
              <div class="mt-2 max-w-xl text-sm text-gray-500">
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 inline-block text-green-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>

                  From {{ journeys.departure_station[0].Nimi }} - <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    class="w-6 h-6 inline-block text-red-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg> To {{ journeys.return_station[0].Nimi }}
                </p>
              </div>
              <div class="mt-2 max-w-xl text-sm text-gray-500">
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 inline-block">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                  </svg>


                  Distance: {{
                    formatDistance(journeys.journey.covered_distance_meters)
                  }}
                </p>
              </div>
              <div class="mt-2 max-w-xl text-sm text-gray-500">
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 inline-block">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>


                  Duaration: {{
                    formatTime(journeys.journey.duration_in_sec)
                  }}
                </p>
              </div>


            </div>

          </div>
        </div>
      </div>

    </div>

    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4">
      <!-- left grid -->
      <div class="col-span-1">
        <div class="bg-green-100 overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Depature Station Details
            </h3>
            <div>
              <div class="mt-2 max-w-xl text-sm text-gray-500">
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 inline-block text-green-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>

                  {{ journeys.departure_station[0].Nimi }}
                </p>
              </div>
              <div class="mt-2 max-w-xl text-sm text-gray-500">
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 inline-block">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                  </svg>


                  Kapasiteet: {{ journeys.departure_station[0].Kapasiteet }}
                </p>
              </div>
              <div class="mt-2 max-w-xl text-sm text-gray-500">
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 inline-block">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                  </svg>



                  lat: {{ journeys.departure_station[0].x }}

                  <!-- <a v-bind:href="journeys.departure_station[0].x">me</a> -->






                </p>
              </div>
              <div class="mt-2 max-w-xl text-sm text-gray-500">
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 inline-block">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                  </svg>



                  lon: {{ journeys.departure_station[0].y }}
                </p>
              </div>



            </div>

          </div>
        </div>
      </div>
      <!-- right grid -->
      <div class="col-span-1">
        <div class="bg-gray-200 overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Return Station Details
            </h3>
            <div class="mt-2 max-w-xl text-sm text-gray-500">
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6 inline-block text-red-400">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>

                {{ journeys.return_station[0].Nimi }}
              </p>
            </div>


            <div class="mt-2 max-w-xl text-sm text-gray-500">
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6 inline-block">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                </svg>


                Kapasiteet: {{ journeys.return_station[0].Kapasiteet }}
              </p>
            </div>

            <div class="mt-2 max-w-xl text-sm text-gray-500">
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6 inline-block">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                </svg>



                lat: {{ journeys.return_station[0].x }}
              </p>
            </div>
            <div class="mt-2 max-w-xl text-sm text-gray-500">
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6 inline-block">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                </svg>


                lon: {{ journeys.return_station[0].y }}
              </p>
            </div>


          </div>
        </div>

      </div>
    </div>

    <!-- map -->

    <!-- import map -->

    <div class="mt-2">
      <div class="">
       
       <GoogleMap
         api-key="AIzaSyDrc0vxfHl5QU3MxQDKPWSkPxbE1YJbGYA"
         style="width: 100%; height: 500px"
         :center="
           {
             lat: journeys.departure_station[0].y,
             lng: journeys.departure_station[0].x,
           }"
         :zoom="12"
       >
       <Marker :options="{ 
        position: 
           {
             lat: journeys.departure_station[0].y,
             lng: journeys.departure_station[0].x,
           },
           
            title: journeys.departure_station[0].Nimi
            
    
        
           
           }" />
           <Marker :options="{ 
        position: 
           {
             lat: journeys.return_station[0].y,
             lng: journeys.return_station[0].x,
           },
           
            title: journeys.return_station[0].Nimi
            
    
        
           
           }" />

           <!-- polyline -->
            <Polyline
            :path="[
              {
                lat: journeys.departure_station[0].y,
                lng: journeys.departure_station[0].x,
              },
              {
                lat: journeys.return_station[0].y,
                lng: journeys.return_station[0].x,
              },
            ]"
            :options="{
              strokeColor: '#0000',
              strokeOpacity: 1.0,
              strokeWeight: 2,
            }"
          />

       
       
       </GoogleMap>
       </div>
    </div>

  


  </div>
</template>


<script setup>


import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { GoogleMap, Marker,Polyline } from 'vue3-google-map'

import Map from "@/views/Map.vue";


// import store
import store from "@/stores/index.js";

// import { notify } from "notiwind"
import { computed } from "vue";
import { elements } from "chart.js";

const route = useRoute();

const router = useRouter();



// get parms from url

const { id } = useRoute().params


const getSingleJourney = store.dispatch('getSingleJourney', id)



// get data from store

const journeys = computed(() => store.getters.singlejourney)



















const formatTime = (sec) => {
  const minutes = Math.floor(sec / 60);
  const seconds = sec % 60;
  return `${minutes} minutes ${seconds} seconds`;
};


const formatDistance = (distance) => {
  const km = Math.floor(distance / 1000);
  const m = distance % 1000;
  return `${km} km ${m} m`;
};






</script>