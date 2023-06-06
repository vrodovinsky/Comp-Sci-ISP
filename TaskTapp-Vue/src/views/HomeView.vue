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
          <p>
            Discover trusted professionals, compare prices, and schedule appointments on TaskTapp -
            all in one convenient place.
          </p>
          <router-link to="/search" class="cta">Search our Services</router-link>
        </div>
      </div>

      <div class="info-boxes">
        <div class="info-box">
          <h2>About Us</h2>
          <hr>
          <div id="info">
                <p>TaskTapp is your ultimate destination for finding the perfect service providers for all your needs. We understand that finding reliable professionals can often be a daunting task, and that's why we're here to simplify the process.</p>
                <br>
                <p>At TaskTapp, we've curated a vast network of highly skilled and trusted service providers across various industries, ensuring that you have access to top-quality professionals right at your fingertips. Whether you're looking for plumbers, electricians, tutors, photographers, or any other service, we've got you covered.</p>
              </div> 
        </div>
        <br>
        <div class="info-box">
          <h2>FAQ</h2>
          <hr>
          <div id="info">
            <p class="has-text-weight-semibold">How does TaspTapp work?</p>
              <br>
              <p>TaskTapp is a user-friendly platform that simplifies the process of finding service providers. To use our service, simply search for your desired service and we will provide you with the most suitable professionals in your area. You can browse through their profiles, read reviews, compare quotes, and make an informed decision.</p>
              <br>
            <p class="has-text-weight-semibold">Is TaskTapp free to use?</p>
              <br>
              <p>Yes, TaspTapp is completely free for users. There are no hidden charges or fees when using our platform to find service providers.</p>
              <br>
            <p class="has-text-weight-semibold">How do you ensure the reliability of service providers?</p>
              <br>
              <p>We prioritize reliability and quality. Every service provider listed on our platform undergoes a thorough screening process. We verify their credentials, check for licenses and certifications, and review their performance history. Additionally, users have the opportunity to leave reviews and ratings based on their experiences, helping to maintain a high standard of service.</p>
              <br>
            <p class="has-text-weight-semibold">How do I contact a service provider?</p>
              <br>
              <p>Once you've found a service provider you're interested in, you can contact them directly through the contact information provided on their profile. TaskTapp does not mediate the communication between users and service providers.</p>
            </div>
        </div>
      </div>
    </div>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="svgHeader"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="1800.97"
      height="2005.834"
      viewBox="0 0 1800.97 2005.834"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stop-color="#32279e" />
          <stop offset="1" stop-color="#b756a3" />
        </linearGradient>
      </defs>
      <path
        id="Path_381"
        data-name="Path 381"
        d="M2088.713,14.073c294,171.508,732.654,62.513,626.328,278.459s279.62,220.059,285.057,368.486c.741,104.145-370.172,123.271-370.172,123.271s-940.812-8.273-1090.866,366.966-339.931,405.316-339.931,405.316V-105.006s47.745-314.117,339.931-342.482S1794.718-157.435,2088.713,14.073Z"
        transform="translate(-1199.129 449.263)"
        fill="url(#linear-gradient)"
      />
    </svg>
  </body>
</template>

<style scoped>
#body {
  position: absolute;
  top: 140px;
  width: 100%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
}

body {
  height: 100%;
  background-color: #eec9f4;
  font-family: 'Montserrat';
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
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
  background-color: #32279e;
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

.info-boxes {
  align-items: center;
  width: 70%;
}

.info-box {
  width: 100%;
  background-color: white;
  margin: 20px 0;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  line-height: 1.6;
  }

  p{
    font-size: 17px;
  }

.info-box h2 {
  margin: 0;
  padding: 0;
  font-size: 30px;
}


</style>
