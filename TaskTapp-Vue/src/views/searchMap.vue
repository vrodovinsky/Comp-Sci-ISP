<template>
  <body>
    <Header></Header>
    <div class="container box" id="body">
      <!-- <h1>Search Service Providers</h1> -->
      <div id="search">
        <div class="field" id="searchBar">
          <div class="control">
            <input
            @keypress.enter='findProviders()'
            v-model="provider_query"
              style="font-family: Montserrat"
              class="input is-medium"
              id="userInput"
              type="text"
              placeholder="Search locations..."
            />
          </div>
        </div>

        <div id="searchBar">
          <button id="searchButton" class="button" @click="findProviders()">Search</button>
        </div>
      </div>
    </div>

    <GMapMap
      :center="center"
      :zoom="9.5"
      map-type-id="terrain"
      style="width: 100vw; height: 900px"
      class="gm"
    >
      <div id="allMarkers">
        <GMapMarker
          :key="marker._id"
          v-for="marker in filteredMarkers"
          :position="marker.position"
          @click="showInfoWindow(marker)"

          id="allMarkers"
        >
          <GMapInfoWindow :options="{ maxWidth: 200 }" :opened="marker.showInfoWindow">
            <div class="descriptionBox">
              <br />
              <div id="info">
                <div class="nameplusservice">
                  <p class="name">Name: {{marker.Name}} </p>
                  <br>
                  <p> Email: {{marker.Login_email}}</p>

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

  </body>
</template>

<script>
import Header from '../components/Header.vue'
import axios from 'axios'

//
export default {
  components: {
    Header
  },

  name: 'App',

methods: {

      getMarkers(){
        axios
        .get('https://api.tasktapp.com/service_providers', {
        })
        .then((response) => {
          const providers = response.data
          console.log(providers)
          providers.forEach((m) => (m.showInfoWindow = false))
          this.filteredMarkers = providers
        })
        .catch((error) => {
          console.log(error)
        })
      },
      findProviders() {
        axios.get('https://api.tasktapp.com/service_providers', {
          params: { service_name: this.provider_query }
        })
        .then((response) => {
          const providers = response.data
          console.log(providers)
          providers.forEach((m) => (m.showInfoWindow = false))
          this.filteredMarkers = providers
        })
        .catch((error) => {
          console.log(error)
        })
    },

    showInfoWindow(marker) {
      // close all other info windows
      this.filteredMarkers.forEach((m) => (m.showInfoWindow = false))
      // show the clicked marker's info window
      marker.showInfoWindow = true
    },
  
  created() {
    this.filteredMarkers = this.markers.slice()
  },
},
  data() {
    return {
      provider_query: '',
      center: { lat: 43.651070, lng: -79.347015 },
      filteredMarkers: [], 
       markers: [
       ]}
  },
  beforeMount(){
    this.getMarkers();
  }
  }
</script>
<style scoped>
body {
  background-color: #eec9f4;
}

#body {
  width: 100%;
  top: 20vh;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  position: absolute;
}

#searchBar {
  display: inline-block;
}

#search {
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
}

.serviceName {
  font-weight: bold;
}
#searchButton {
  margin: 5px 0px;
  margin-left: 10px;
}

.field {
  width: 90%;
}
.containerplus {
  position: relative;
  bottom: 0px;
}
.gm {
  position: absolute;
  top: 40vh;
}
.descriptionBox {
  width: 115%;
}
#info {
  display: flex;
}


</style>

