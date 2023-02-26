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
                Station Overview Details
              </h3>
              <div>
                <div class="mt-2 max-w-xl text-sm text-gray-500">
                  <p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
</svg>

  
                     {{ station.Name}} 
                  </p>
                </div>
                <div class="mt-2 max-w-xl text-sm text-gray-500">
                  <p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6  inline-block">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>

  
                    {{ station.Adress}}
                  
                  </p>
                </div>
                <div class="mt-2 max-w-xl text-sm text-gray-500">
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 inline-block">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                  </svg>



                  lat: {{ station.x }}

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



                  lon: {{ station.y }}
                </p>
              </div>

              
  
  
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
               lat: station.y,
               lng: station.x,
             }"
           :zoom="12"
         >
         <Marker :options="{ 
          
          position: 
             {
               lat: station.y,
               lng: station.x,
             },
  
            //  icon : 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
             
              title: station.Name,
              
      
          
             
             }" />
            
  
             <!-- polyline -->
             
  
           
  
         
         
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
  
  
  const getSingleStation = store.dispatch('getSingleStation', id)
  
  
  
  // get data from store
  
  const station = computed(() => store.getters.singlestation);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
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