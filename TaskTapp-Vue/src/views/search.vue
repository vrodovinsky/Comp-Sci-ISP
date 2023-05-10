<script>
import Header from '../components/Header.vue'

export default {
  components: {
    Header
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
              type="text"
              placeholder="Search services..."
            />
          </div>
        </div>
        <div id="searchBar">
          <button id="searchButton" class="button">Search</button>
        </div>
      </div>

      <div id="filter">
        <h1 style="font-family: Montserrat">Filter by</h1>
        <div class="select">
          <select>
            <option style="font-family: Montserrat">Select</option>
            <option style="font-family: Montserrat">Location</option>
            <option style="font-family: Montserrat">Rating</option>
          </select>
        </div>
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
