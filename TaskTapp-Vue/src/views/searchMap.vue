<script>
import Header from '../components/Header.vue'

export default {
    components: {
        Header
    },

    name: 'App',
    data() {
        return {
            center: { lat: 	43.651070, lng: -79.347015 },
            markers: [
                {
                    id: 'dfsldjl3r',
                    position: {
                        lat: 43.651070, lng: -79.347015
                    },
                },
                {
                    id: 'dfsldjl3r',
                    position: {
                        lat: 45.651070, lng: -80.347015
                    },
                }

            ],
        }
    }
    
    
}


</script>

<template>
    <body>
        <Header></Header>
        <div class="container box" id="body">
            <!-- <h1>Search Service Providers</h1> -->
            <div id="search">
                <div class="field" id="searchBar">
                    <div class="control">
                        <input style="font-family: Montserrat" class="input is-medium" type="text"
                            placeholder="Search locations...">
                    </div>
                </div>
                <div id="searchBar">
                    <button id="searchButton" class="button">Search</button>
                </div>
            </div>
        </div>
        
        <GMapMap
          :center="center"
          :zoom="7"
          map-type-id="terrain"
          style="width: 100vw; height: 900px"
      >
      <GMapMarker
            :key="marker.id"
            v-for="marker in markers"
            :position="marker.position"
        />
      </GMapMap>

    </body>
</template>

<style>
body {
    background-color: #EEC9F4;
}

#body {
    position: absolute;
    top: 140px;
    width: 100%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
}

#searchBar {
    display: inline-block;
}

#search {
    margin-left: 10%;
    margin-right: 10%;
    width: 80%;
}

#searchButton {
    margin: 5px 0px;
}

.field {
    width: 90%;
}


</style>