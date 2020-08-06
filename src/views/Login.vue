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
      var self = this;
      await firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(function() {
          self.$router.replace({ name: "user" });
        })
        .catch(function(error) {
          self.email = "";
          self.password = "";
          self.$alert(error.message);
        });
    },
    goToSignup() {
      this.$router.replace({ name: "signup" });
    }
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  components: { Header }
};
</script>

<style scoped>
.signup {
  background: linear-gradient(to right, darkgrey, lightgrey);
  color: black;
}
</style>