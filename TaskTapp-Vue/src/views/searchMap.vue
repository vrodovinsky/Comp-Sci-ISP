<template>
  <body>
      <div class="containerplus">
      <div>
<Header></Header>
        <div class="container box" id="body">

            <!-- <h1>Search Service Providers</h1> -->
            <div id="search">
                <div class="field" id="searchBar">
                    <div class="control">
                        <input style="font-family: Montserrat" class="input is-medium" id="userInput" type="text"
                            placeholder="Search locations...">
                    </div>
                </div>

                <div id="searchBar">
                    <button id="searchButton" class="button" @click="searchForMarker">Search</button>
                </div>
            </div>
        </div>


      
      </div>


    <GMapMap :center="center" :zoom="9.5" map-type-id="terrain" style="width: 100vw; height: 900px" class="gm">
<div id="allMarkers">
      <GMapMarker :key="marker.id" v-for="marker in filteredMarkers" :position="marker.position" @click="showInfoWindow(marker)" id="allMarkers">
        <GMapInfoWindow :options="{ maxWidth: 200 }" :opened="marker.showInfoWindow">
          <div class="descriptionBox">
              <br>
         
  
    <div id="info">
    <img src="https://pbs.twimg.com/profile_images/909810540632989701/euLZVIXL_400x400.jpg"  alt="photo" width="50" height="50">

<div class="nameplusservice">
            <p class="name">Name: {{marker.name}} </p>
            <br>

            <p> Service: {{marker.service}}</p>
</div>
    

            </div>

            

          </div>
        </GMapInfoWindow>
      </GMapMarker>
    </div>
      <!-- <GMapMarker :key="marker.id" :position="marker.position" :icon="userIcon">
        <GMapInfoWindow :options="{ maxWidth: 200 }">
          <div class="userPositionMarker">Your Location</div>
        </GMapInfoWindow>
      </GMapMarker> -->
    </GMapMap>

      </div>

  </body>
</template>

<script>
import Header from '../components/Header.vue'
//
export default {
  components: {
    Header
  },

  name: 'App',
   

methods: {
    showInfoWindow(marker) {
      // close all other info windows
      this.markers.forEach((m) => (m.showInfoWindow = false));
      // show the clicked marker's info window
      marker.showInfoWindow = true;
    },

searchForMarker() {
  const userInput = document.querySelector("#userInput").value;
  const inputArray = userInput.split(",").map((item) => item.trim().toLowerCase());

  if (inputArray.length === 0) {
    this.filteredMarkers = this.markers.slice();
  } else {
    const filteredMarkers = this.markers.filter((marker) => {
      const markerService = marker.service.toLowerCase();
      for (const input of inputArray) {
        if (markerService.includes(input)) {
          return true;
        }
      }
      return false;
    });

    this.filteredMarkers = filteredMarkers.slice();
  }
}},
created() {
  this.filteredMarkers = this.markers.slice();
},

  data() {
    return {
      center: { lat: 43.651070, lng: -79.347015 },
      filteredMarkers: [], 
       markers: [
  // Plumber Markers
  {
    id: 'dfsldjl3r',
    position: { lat: 43.650810, lng: -79.346949 },
    info: 'Marker 1 info window content',
    service: 'plumbing',
    name: 'Joe Blow',
    showInfoWindow: false
  },
  {
    id: 'dffdflksj',
    position: { lat: 43.781564, lng: -79.312485 },
    info: 'New Marker 1 info window content',
    service: 'plumbing',
    name: 'Johnny Appleseed',
    showInfoWindow: false
  },
  {
    id: 'dfkldjsdf',
    position: { lat: 43.884325, lng: -79.179215 },
    info: 'New Marker 2 info window content',
    service: 'plumbing',
    name: 'Tom Sawyer',
    showInfoWindow: false
  },
  // Electrician Markers
  {
    id: 'dffdflksj',
    position: { lat: 43.982903, lng: -79.346674 },
    info: 'Marker 2 info window content',
    service: 'electrician',
    name: 'Saul Hudson',
    showInfoWindow: false
  },
  {
    id: 'dfldjsf84',
    position: { lat: 43.875245, lng: -79.533089 },
    info: 'New Marker 1 info window content',
    service: 'electrician',
    name: 'Jimmy Page',
    showInfoWindow: false
  },
  {
    id: 'dfkldjsdf',
    position: { lat: 43.778508, lng: -79.419578 },
    info: 'New Marker 2 info window content',
    service: 'electrician',
    name: 'Eric Clapton',
    showInfoWindow: false
  },
  {
    id: 'dfdj938df',
    position: { lat: 43.681193, lng: -79.607079 },
    info: 'New Marker 3 info window content',
    service: 'electrician',
    name: 'Jimi Hendrix',
    showInfoWindow: false
  },
  // Toilets Exclusively Markers
  {
    id: 'dfkldjsdf',
    position: { lat: 44.126406, lng: -79.193745 },
    info: 'Marker 3 info window content',
    service: 'toilets_exclusively',
    name: 'Burt Kobain',
    showInfoWindow: false
  },
  {
    id: 'dflsdkfjk',
    position: { lat: 44.019250, lng: -79.297792 },
    info: 'New Marker 1 info window content',
    service: 'toilets_exclusively',
    name: 'Elvis Potsley',
    showInfoWindow: false
  },
  {
    id: 'dfkdf9034',
    position: { lat: 43.915346, lng: -79.401454 },
    info: 'New Marker 2 info window content',
    service: 'toilets_exclusively',
    name: 'John Flushman',
    showInfoWindow: false
},
      // Masseuse Markers
  {
    id: 'dsjfkl9i3',
    position: { lat: 43.636645, lng: -79.495582 },
    info: 'Marker 6 info window content',
    service: 'masseuse',
    name: 'Perrell Laquarius Brown',
    showInfoWindow: false
  },
  {
    id: 'dsjfkl12i3',
    position: { lat: 43.706413, lng: -79.544233 },
    info: 'New Marker 1 info window content',
    service: 'masseuse',
    name: 'Serenity Spa',
    showInfoWindow: false
  },
  {
    id: 'dsjfkl34i3',
    position: { lat: 43.776006, lng: -79.592814 },
    info: 'New Marker 2 info window content',
    service: 'masseuse',
    name: 'Relaxation Retreat',
    showInfoWindow: false
  },
  {
    id: 'dsjfkl56i3',
    position: { lat: 43.845431, lng: -79.641331 },
    info: 'New Marker 3 info window content',
    service: 'masseuse',
    name: 'Tranquil Touch',
    showInfoWindow: false
  },
  // Landscaping Markers
  {
    id: 'dfdkljf83',
    position: { lat: 43.650810, lng: -79.346949 },
    info: 'Marker 7 info window content',
    service: 'landscaping',
    name: 'Jamal Huggins',
    showInfoWindow: false
  },
  {
    id: 'dfdkljf12r',
    position: { lat: 43.690332, lng: -79.307238 },
    info: 'New Marker 1 info window content',
    service: 'landscaping',
    name: 'Garden Guy',
    showInfoWindow: false
  },
  {
    id: 'dfdkljf56r',
    position: { lat: 43.768357, lng: -79.227630 },
    info: 'New Marker 3 info window content',
    service: 'landscaping',
    name: 'Green Thumb',
    showInfoWindow: false
  },
  {
    id: 'dfdkljf78r',
    position: { lat: 43.806874, lng: -79.187734 },
    info: 'New Marker 4 info window content',
    service: 'landscaping',
    name: 'Lush Landscapes',
    showInfoWindow: false
  },
  // Automobiles Markers
  {
    id: 'dsfkldj38r',
    position: { lat: 43.789606, lng: -79.655637 },
    info: 'Marker 8 info window content',
    service: 'automobiles',
    name: 'Illene Dover',
    showInfoWindow: false
  },
  {
    id: 'dsfkldj12r',
    position: { lat: 43.846069, lng: -79.619930 },
    info: 'New Marker 1 info window content',
    service: 'automobiles',
    name: 'Auto Pro',
    showInfoWindow: false
  },
   // Automobiles Markers
  {
    id: 'dsfkldj38r',
    position: { lat: 43.789606, lng: -79.655637 },
    info: 'Marker 8 info window content',
    service: 'automobiles',
    name: 'Illene Dover',
    showInfoWindow: false
  },
  {
    id: 'dsfkldj12r',
    position: { lat: 43.846069, lng: -79.619930 },
    info: 'New Marker 1 info window content',
    service: 'automobiles',
    name: 'Auto Pro',
    showInfoWindow: false
  },
    {
    id: 'dsfkldj34r',
    position: { lat: 43.902202, lng: -79.584060 },
    info: 'New Marker 2 info window content',
    service: 'automobiles',
    name: 'Speedy Wheels',
    showInfoWindow: false
  },
  {
    id: 'dsfkldj56r',
    position: { lat: 43.958013, lng: -79.548026 },
    info: 'New Marker 3 info window content',
    service: 'automobiles',
    name: 'Car Care Center',
    showInfoWindow: false
  },
  {
    id: 'dsfkldj78r',
    position: { lat: 44.013511, lng: -79.511827 },
    info: 'New Marker 4 info window content',
    service: 'automobiles',
    name: 'Auto Repair Shop',
    showInfoWindow: false
  }


      ]}}}
      
</script>
  <style>

body {
    background-color: #EEC9F4;
}

#body {
    position: absolute;

    width: 100%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    position: relative;
     bottom: 565px;
}

#searchBar {
    display: inline-block;
}

#search {
    margin-left: 10%;
    margin-right: 10%;
    width: 80%;
    
}

.serviceName{
font-weight: bold;
}
#searchButton {
    margin: 5px 0px;
    margin-left: 10px;
}

.field {
    width: 90%;
}
.containerplus{
    position:relative;
    bottom:0px;

}
.gm{
    position: relative;
    bottom: 580px;
}
.descriptionBox{
    width: 115%;
}
#info{
    display: flex;
}
</style>
          

      
