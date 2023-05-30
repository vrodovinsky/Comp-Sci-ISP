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
    findProviders() {
      axios
        .get('https://api.tasktapp.com/service_providers', {
          params: { service_name: this.searchServices }
        })
        .then((response) => {
          const providers = response.data
          console.log(providers)
          this.providers = providers
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<template>
  <body>
    <Header></Header>
    <div class="box" id="body">
      <div id="search">
        <div class="field" id="searchBar">
          <div class="control">
            <input
              @keypress.enter="findProviders"
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

      <div id="filter" class="mb-3">
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
          <li
            v-for="provider in providers"
            :key="provider._id"
            class="card mb-3 has-background-link-light"
          >
            <div class="card-content">
              <h1 class="is-size-4 has-text-weight-semibold">{{ provider.Name }}</h1>
              <li v-for="service in provider.Services" :key="service._id">
                <p>
                  {{ service.Name }} - {{ service.Description }}
                  <br />
                  {{ service.Price }}
                </p>
              </li>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </body>
</template>

<style scoped>
body {
  background-color: #eec9f4;
}

#body {
  position: absolute;
  top: 140px;
  width: 80%;
  left: 10%;
  /* left: 0;
  right: 0; */
  /* margin-left: auto;
  margin-right: auto; */
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
  width: 80%;
  margin-right: 10px;
}
</style>
