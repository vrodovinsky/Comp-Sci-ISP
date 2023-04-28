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

    <div id="body">
      <div class="banner-wrapper">
        <div class="welcome-banner">
          <h1>Find and Book Local Services with Ease</h1>
          <p>Discover trusted professionals, compare prices, and schedule appointments on TaskTapp - all in one convenient place.</p>
          <a href="/logIn" class="cta">Get Started Now</a>
        </div>
      </div>
    
      <div class="info-boxes">
        <div class="info-box">
          <h2>About Us</h2>
        </div>
        <div class="info-box">
          <h2>FAQ</h2>
        </div>
        <div class="info-box">
          <h2>What We Do</h2>
        </div>
      </div>
    </div>


      <svg xmlns="http://www.w3.org/2000/svg" class="svgHeader" xmlns:xlink="http://www.w3.org/1999/xlink" width="1800.97" height="2005.834" viewBox="0 0 1800.97 2005.834">
        <defs>
          <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#32279e"/>
            <stop offset="1" stop-color="#b756a3"/>
          </linearGradient>
        </defs>
        <path id="Path_381" data-name="Path 381" d="M2088.713,14.073c294,171.508,732.654,62.513,626.328,278.459s279.62,220.059,285.057,368.486c.741,104.145-370.172,123.271-370.172,123.271s-940.812-8.273-1090.866,366.966-339.931,405.316-339.931,405.316V-105.006s47.745-314.117,339.931-342.482S1794.718-157.435,2088.713,14.073Z" transform="translate(-1199.129 449.263)" fill="url(#linear-gradient)"/>
      </svg>
  </body>    
</template>

<style scoped> 
  #body{
    position: absolute;
    top: 140px;
    width: 100%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }


  body, html {
    height: calc(100% - 2em);
    margin: 0;
    font-family: 'Montserrat';
  }


  body {
    background-color: #EEC9F4;
  }

  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }
  
  .svgHeader {
    display: block;
    width: 100%;
    height: auto;
  }

  nav {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 200;
    padding-right: 5vw;
  }
  
  nav ul {
    display: flex;
    justify-content: flex-end;
    list-style: none;
    padding: 20px 0;
  }
  
  nav a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    padding-left: 5vw;
  }
  
  nav a:hover {
    color: #ccc;
  }
  
.welcome-banner {
  /* position: absolute; */
  /* top: 50%; */
  left: 50%;
  margin-top: 250px;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 1);
  padding: 60px;
  padding-left: 75px;
  padding-right: 75px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 200;
  display: inline-block;
  text-align: center;
  width: 50%;
}

.welcome-banner h1,
.welcome-banner p {
  margin: 0;
  padding: 0;
}

.welcome-banner h1 {
  margin-bottom: 10px;
  font-size: 45px;
}

.welcome-banner p {
    font-size: 25px;
    padding-top: 25px;
}


.cta {
    position: absolute;
    bottom: -25px;
    display: inline-block;
    padding: 15px 24px;
    font-size: 1rem;
    color: #ffffff;
    text-decoration: none;
    background-color: #32279E;
    border-radius: 5px;
    width: 50%;
    text-align: center;
    box-sizing: border-box;
    left: 25%;
    
  }

  .cta a {
    font-weight: 500;
  }

  .info-boxes {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    /* top: calc(50% + 50vh); */
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 200;
    width: 100%;
  }

  .info-box {
    width: 80%;
    max-width: 600px;
    background-color: white;
    margin: 20px 0;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .info-box h2 {
    margin: 0;
    padding: 0;
    font-size: 28px;
  }

</style>