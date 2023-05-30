<template>
  <body>
    <!-- <div class="loader">
            <div class="loader-circle"></div>
          </div> -->

    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div>
            <a href="/"><img src="../assets/logo1.svg" alt="logo" /></a>
            <!--logo overlaps with the box??-->
          </div>

          <div class="box">
            <h3 class="title has-text-black">Sign Up</h3>
            <hr class="login-hr" />
            <Form @submit="signUp">
              <div class="field">
                <div class="control">
                  <div class="names" id="firstStyle">
                    <Field
                      style="font-family: Montserrat"
                      v-model="firstName"
                      :rules="validateName"
                      class="input is-medium"
                      name="firstName"
                      type="firstName"
                      placeholder="First Name"
                    />
                    <ErrorMessage name="firstName" />
                  </div>
                  <div class="names" id="lastStyle">
                    <Field
                      style="font-family: Montserrat"
                      v-model="lastName"
                      class="input is-medium"
                      :rules="validateName"
                      name="lastName"
                      type="lastName"
                      placeholder="Last Name"
                    />
                    <ErrorMessage name="lastName" />
                  </div>
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <Field
                    style="font-family: Montserrat"
                    class="input is-medium"
                    :rules="validateEmail"
                    v-model="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                  <ErrorMessage name="email" />
                </div>
              </div>

              <div class="field">
                <Field
                  style="font-family: Montserrat"
                  class="input is-medium"
                  name="phoneNumber"
                  v-model="phoneNumber"
                  :rules="validatePhoneNumber"
                  type="tel"
                  placeholder="Phone Number"
                />
                <ErrorMessage name="phoneNumber" />
              </div>

              <div class="field">
                <Field
                  style="font-family: Montserrat"
                  class="input is-medium"
                  name="password"
                  v-model="password"
                  :rules="validatePassword"
                  type="password"
                  placeholder="Password"
                />
                <ErrorMessage name="password" />
              </div>

              <div class="field">
                <h1>I want to use TaskTapp to</h1>
                <div id="selections">
                  <label for="">
                    <Field
                      v-model="userType"
                      id="serviceProvider"
                      value="Provider"
                      :rules="validateUserType"
                      type="radio"
                      name="accType"
                    />
                    Sell my services
                  </label>
                  <label for="">
                    <Field
                      v-model="userType"
                      id="customer"
                      value="Customer"
                      :rules="validateUserType"
                      type="radio"
                      name="accType"
                    />
                    <ErrorMessage name="accType" />
                    Find help
                  </label>
                </div>
              </div>

              <button
                class="button is-block is-dark is-large is-fullwidth"
                style="font-family: Montserrat"
              >
                Sign Up<i class="fa fa-sign-in" aria-hidden="true"></i>
              </button>
            </Form>
            <br />
            <a href="/logIn">Already have an account?</a>
          </div>
        </div>
      </div>
    </section>
  </body>
</template>

<style scoped>
/* .button{
            background-color: #d6a7de;
            /* color: #d6a7de;
        } */

.names {
  display: inline-block;
  /* margin: 0px 28px 0px 0px; */
}

#firstStyle {
  float: left;
}

/* #lastName{
            float: right;
        } */

#isProvider {
  margin: 0px 5px 0px 0px;
}
#isUser {
  margin: 0px 5px 0px 20px;
}

#selections {
  align-items: center;
}

h1 {
  font-size: large;
}

.login-hr {
  background-color: black;
  border: none;
  /* margin: 12px 0px; */
}
.box {
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
  background: -moz-linear-gradient(45deg, #32279e 0%, #b756a3 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    45deg,
    #32279e 0%,
    #b756a3 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    45deg,
    #32279e 0%,
    #b756a3 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#32279E', endColorstr='#B756A3',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100%;
}
</style>

<script>
import axios from 'axios'
import { Form, Field, ErrorMessage } from 'vee-validate'
import validator from 'validator'
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      userType: '',
      phoneNumber: '',
      password: ''
    }
  },

  components: {
    Form,
    Field,
    ErrorMessage
  },

  methods: {
    validateName(value) {
      if (validator.isEmpty(value)) return 'This field is required'

      if (!validator.isAlpha(value)) return 'This field can only letters'

      return true
    },
    validateEmail(value) {
      if (validator.isEmpty(value)) return 'This field is required'

      if (!validator.isEmail(value)) return 'Not a valid email'

      return true
    },
    validatePhoneNumber(value) {
      if (validator.isEmpty(value)) return 'This field is required'

      if (!validator.isMobilePhone(value, 'en-CA')) return 'Not a valid phone number'

      return true
    },
    validatePassword(value) {
      if (validator.isEmpty(value)) return 'This field is required'

      return true
    },
    validateUserType(value) {
      if (validator.isEmpty(value)) return 'Please select a user type'

      return true
    },

    signUp() {
      console.log('test')
      axios
        .post('https://api.tasktapp.com/signup', {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          user_type: this.userType
        })
        .then((response) => {
          const data = response.data
          console.log(data._id)
          const redirectPath = this.$route.query.redirect || '/logIn'
          this.$router.push(redirectPath)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
