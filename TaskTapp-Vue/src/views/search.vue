<script>
import Header from '../components/Header.vue'
import axios from 'axios'

export default {
  components: {
    Header
  },
  data() {
    return {
      searchServices: '',
      providers: []
    }
  },
  methods: {
    displayProviders() {
      let card = document.createElement("div");
      card.classList.add("card", "mb-3", "has-background-link-light");
      let cardContent = document.createElement("div");
      cardContent.classList.add("card-content");
      card.append(cardContent);
      let content = document.createElement("div");
      content.classList.add("content");
      cardContent.append(content);
      let cardContentPage = document.createElement("div");
      cardContentPage.classList.add("card-content");
      content.append(cardContentPage);
      let cardContentOpp = document.createElement("div");
      cardContentOpp.classList.add("card-content");
      content.append(cardContentOpp);

      let games = document.getElementById("displayProviders");
      games.append(card);
    },
    findProviders() {
      axios.get('http://127.0.0.1:3000/api/service_providers', { params: { service_name: this.searchServices }})
        .then(response => {
          const providers = response.data;
          console.log(providers);
          this.providers = providers
          this.displayProviders()
        })
        .catch(error => {
          console.log(error);
        });
    },
  
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
            <input
              style="font-family: Montserrat"
              class="input is-medium"
              v-model="searchServices"
              type="text"
              placeholder="Search services..."
            />
          </div>
        </div>
        <div id="searchBar">
          <button id="searchButton" @click="findProviders" class="button">Search</button>
        </div>
      </div>

      <div id="filter">
        <h1 style="font-family: Montserrat">Filter by</h1>
        <div class="select">
          <select>
            <option style="font-family: Montserrat">Select</option>
            <option style="font-family: Montserrat">Location</option>
            <option style="font-family: Montserrat">Rating</option>
            <option style="font-family: Montserrat">Price</option>
          </select>
        </div>
      </div>

      <div id="displayProviders">
        <ul>
                <li v-for="provider in providers" :key="provider._id">
                  {{ provider.Name }}
                  <li v-for="service in provider.Services" :key="service._id">
                    <p v-if="service.Name == searchServices">
                    - {{ service.Price }} - {{ service.Description }}
                    </p>
                  </li>
                </li>
                
              </ul>
      </div>
    </div>
  </body>
</template>

<style>
body {
  background-color: #eec9f4;
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
