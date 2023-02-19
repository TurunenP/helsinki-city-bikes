<template>

    <div class="">
       
    <GoogleMap
      api-key="AIzaSyDrc0vxfHl5QU3MxQDKPWSkPxbE1YJbGYA"
      style="width: 100%; height: 500px"
      :center="
        {
          lat: journeys.departure_station[0].y,
          lng: journeys.departure_station[0].x,
        }"
      :zoom="3"
    >
    <Marker :options="{ position: 
        {
          lat: journeys.departure_station[0].y,
          lng: journeys.departure_station[0].x,
        } 
        
        }" />
    
    
    </GoogleMap>
    </div>  
  </template>
  
  <script>
  import { defineComponent,computed } from 'vue'
  import { GoogleMap, Marker } from 'vue3-google-map'
  import { useRoute, useRouter } from "vue-router";
  import store from "@/stores/index.js";

  const route = useRoute();

const router = useRouter();




// get parms from url



//   strore

  
  export default defineComponent({
    components: { GoogleMap, Marker },
    setup() {
    //   
     
      

      const  id  = route.params.id;

      store.dispatch('getSingleJourney',id)

      const journeys = computed(() => store.getters.singlejourney);


     
  
      return {journeys}

      


    },
  })
  </script>