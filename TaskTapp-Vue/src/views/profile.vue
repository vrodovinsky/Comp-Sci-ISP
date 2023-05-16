<script>
import Navbar from '../components/Navbar.vue'

export default {
    components: {
        Navbar
    }
}
</script>

<template>
    <body>
        <div class="box p-0" id="box">
            <aside>
                <Navbar></Navbar>
            </aside>

            <div id="main">
            <h1 id="title" class="is-size-1 has-text-weight-bold">Account</h1>
            <!-- <section id="section-1"> -->
                <div class="userInfo">
                    <div id="username">
                        <h2>Username</h2>
                        <div id="info">
                            <h3>*their user*</h3>
                            <button id="edit"><i class="fas fa-edit" style="color: #000000;"></i></button>
                        </div>
                    </div>
                    <div id="number">
                        <h2>Phone Number</h2>
                        <div id="info">
                            <h3>*their number*</h3>
                            <button id="edit"><i class="fas fa-edit" style="color: #000000;"></i></button>
                        </div>
                    </div>
                    <div id="email">
                        <h2>Email</h2>
                        <div id="info">
                            <h3>*their email*</h3>
                            <button id="edit"><i class="fas fa-edit" style="color: #000000;"></i></button>
                        </div>
                    </div>
                    <div id="postal">
                        <h2>Postal Code</h2>
                        <div id="info">
                            <h3>*their postal*</h3>
                            <button id="edit"><i class="fas fa-edit" style="color: #000000;"></i></button>
                        </div>
                    </div>
                    <div id="showPass">
                        <h2>Password</h2>
                        <div id="info">
                            <h3>*their pass*</h3>
                            <button id="edit"><i class="fas fa-edit" style="color: #000000;"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>                
    </body>
</template>

<style>
    body {
        background: #823696; /* Old browsers */
        background: -moz-linear-gradient(45deg, #32279E 0%, #B756A3 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(45deg, #32279E 0%,#B756A3 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(45deg, #32279E 0%,#B756A3 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#32279E', endColorstr='#B756A3',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
        background-repeat: no-repeat;
        background-attachment: fixed;
    }

    #box {
        top: 60px;
        margin: auto;
        width: 90%;
        display: grid;
        grid-template-columns: 1fr 4fr;
        height: 70%;
    }
    
    aside {
        color: #fff;
        display: grid;
        grid-column: 1/2;
        /* padding: 2em; */        
    }

    body, html {
        height: calc(100% - 2em);
        margin: 0;
        font-family: 'Montserrat';
        background-color: lightgray;
    }

    #main {
        background: #fff;
        padding: 1em 1.4em;
        grid-column: 2/3;
        
    }

    .userInfo{
        display: grid;  
        grid-template-columns:1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }

    #info{
        display: flex;
        align-items: center;
    }

    #edit{
        margin: auto;
    }

    #username{
        grid-column: 1/2;
    }

    #number{
        grid-column:2/3;
    }

    #email{
        grid-row: 2/3;
        grid-column: 1/2;
    }

    #postal{
        grid-column:3/4;
    }

    img {
        width: 40px;
        cursor: pointer;
    }

    figure {
        margin: 0;
    }

    figcaption {
        font-size: 1.3em;
        font-weight: bold;
    }

    .active {
        position: absolute;
        display: block;
        background: #fff;
        width: 50%;
        left: 0;
        top: 0;
        height: 100%;
    }

    .activeList{
        background-color: white;
    }

    main {
        background: #fff;
        padding: 1em 1.4em;
    }

    #title {
        /* margin: 0; */
        padding: 20px 0px;
    }

</style>
<template>
  <Header />
  <div class="content-layout" id="">
    <h1 id="page-title" class="content__title">Profile Page</h1>
    <div class="content__body">
      <p id="page-description">
        <span
          >You can use the <strong>ID Token</strong> to get the profile information of an
          authenticated user.</span
        >
        <span><strong>Only authenticated users can access this page.</strong></span>
      </p>
      <div class="profile-grid">
        <div class="profile__header">
          <img :src="user.picture" alt="Profile" class="profile__avatar" />
          <div class="profile__headline">
            <h2 class="profile__title">{{ user.name }}</h2>
            <span class="profile__description">{{ user.email }}</span>
          </div>
        </div>
        <div class="profile__details">
          <span title="Decoded ID Token" :code="code"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import { useAuth0 } from '@auth0/auth0-vue'

const { user } = useAuth0()

const code = JSON.stringify(user.value, null, 2)
</script>
