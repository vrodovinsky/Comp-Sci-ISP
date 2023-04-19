<template>
     <body>
        <!-- <div class="loader">
            <div class="loader-circle"></div>
          </div> -->
           
        <section class="hero is-fullheight">
            <div class="hero-body">
               <div class="container has-text-centered">
                <div>
                    <img src = "../assets/logo1.svg" alt="logo"/> <!--logo overlaps with the box??-->
                </div>
                
                    <div class="box">
                        <h3 class="title has-text-black">Sign Up</h3>
                        <hr class="login-hr">
                        <form @submit.prevent="signUp">

                            <div class="field">
                                <div class="control"> 
                                    <input style="font-family: Montserrat" class="input is-medium" v-model="name" type="name" placeholder="Name">
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <input style="font-family: Montserrat" class="input is-medium" v-model="email" type="email" placeholder="Email">
                                </div>
                            </div>

                            <div class="field">
                                <input style="font-family: Montserrat" class="input is-medium" id="phoneNumber" type="tel" placeholder="Phone Number"> 
                            </div>

                            <div class="field">
                                <input style="font-family: Montserrat" class="input is-medium" id="password" type="password" placeholder="Password">
                            </div>

                            <div class="field">
                                <h1>I want to use TaskTapp to</h1>
                                <div id="selections">
                                    <label  for="">
                                        <input v-model="userType" id="serviceProvider" value="Provider" type="radio" name="accType">
                                        Sell my services
                                    </label>
                                    <label for="">
                                        <input v-model="userType" id="customer" value="Customer" type="radio" name="accType">
                                        Find help
                                    </label>
                                </div>
                            </div>

                            <button class="button is-block is-dark is-large is-fullwidth" style="font-family: Montserrat">Sign Up<i class="fa fa-sign-in"
                                aria-hidden="true"></i></button>
                            </form>
                            <br>
                            <a href="/logIn">Already have an account?</a>
                    </div>
                </div>
            </div>
        </section>
    </body>
</template>

<style>
    /* .button{
            background-color: #d6a7de;
            /* color: #d6a7de; 
        } */

        .names{
            display: inline-block;
            /* margin: 0px 28px 0px 0px; */
        }

        #firstStyle{
            float: left;
        }

        /* #lastName{
            float: right;
        } */

        #isProvider{
            margin: 0px 5px 0px 0px;
        }
        #isUser{
            margin: 0px 5px 0px 20px;
        }

        #selections{
            align-items: center;
        }

        h1{
            font-size: large;
        }

        .login-hr{
            background-color: black;
            border: none;
            /* margin: 12px 0px; */
        }
        .box{
            width: 60%;
            margin: auto;
        }

        main {
            background: #fff;
            padding: 1em 1.4em;
        }

        /* body, html {npm
            height: calc(100% - 2em);
            margin: 0;
            font-family: 'Montserrat';
        } */

        /* body > *:not(.loader) {
            opacity: 0;
        } */
  

        body {
            background: #823696; /* Old browsers */
            background: -moz-linear-gradient(45deg, #32279E 0%, #B756A3 100%); /* FF3.6-15 */
            background: -webkit-linear-gradient(45deg, #32279E 0%,#B756A3 100%); /* Chrome10-25,Safari5.1-6 */
            background: linear-gradient(45deg, #32279E 0%,#B756A3 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#32279E', endColorstr='#B756A3',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
            background-repeat: no-repeat;
            background-attachment: fixed;
            height: 100%;
        }
</style>

<script>
import axios from 'axios'
export default {
   
   data() {
    return{
        name: '',
        email:'',
        userType:''
    }
   },

   methods: {
    signUp () {
        console.log('test');
         axios
        .post("http://localhost:3000/api/signup", {
          Name: this.name,
          Email: this.email,
          User_type: this.userType
        })
        .then((response) => {
          const data = response.data;
          console.log(data._id)
    }).catch(err => {
        console.log(err)
})
    }
   }
}
</script>
