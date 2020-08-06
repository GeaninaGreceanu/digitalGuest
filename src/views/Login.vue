<template>
  <div>
    <Header />
    <form @submit.prevent="logIn">
      <h2>Welcome to Digital Guest - Log In Page!</h2>
      <input class="infoField" type="email" v-model="email" placeholder="Enter E-mail address" />
      <input class="infoField" type="password" v-model="password" placeholder="Enter password" />
      <br />
      <button class="btn" type="submit">Log In</button>
      <h3>Don't have an account?</h3>
      <button class="btn signup" @click="goToSignup">Sign Up</button>
    </form>
  </div>
</template>

<script>
import Header from "../components/Header";
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  methods: {
    async logIn() {
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        //console.log(result);
        //this.error = error;
        this.$router.replace({ name: "user" });
      } catch (err) {
        console.log(err);
        this.error = err;
      }
    },
    goToSignup() {
      this.$router.replace({ name: "signup" });
    }
  },
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  components: { Header }
};
</script>

<style scoped>
    .infoField {
    width: 55%;
    color: rgb(38, 50, 56);
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1px;
    background: rgba(136, 126, 126, 0.04);
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    outline: none;
    box-sizing: border-box;
    border: 2px solid rgba(0, 0, 0, 0.02);
    margin-bottom: 50px;
    text-align: center;
    margin-bottom: 27px;
    font-family: "Ubuntu", sans-serif;
    }
    .infoField:focus {
    border: 2px solid rgba(0, 0, 0, 0.18) !important;
    }
    .btn {
    cursor: pointer;
    border-radius: 5em;
    color: #fff;
    background: linear-gradient(to right, #9c27b0, #e040fb);
    border: 0;
    width: 25%;
    padding-bottom: 10px;
    padding-top: 10px;
    font-family: "Ubuntu", sans-serif;
    font-size: 13px;
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
    }

    .signup {
    background: linear-gradient(to right, darkgrey, lightgrey);
    color: black;
    }
    form {
    background-color: #ffffff;
    width: 50%;
    padding: 2.5%;
    margin: 7em auto;
    border-radius: 1.5em;
    box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
    }
</style>