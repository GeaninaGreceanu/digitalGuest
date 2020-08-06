<template>
  <div>
    <Header />
    <form>
      <h2>Welcome to Digital Guest - Edit User Information Page!</h2>
      <div>
      <label>E-mail:</label>
      <input class="infoField disbtn" :disabled="true" type="email" v-model="email" />
      </div>
      <button class="btnUser" @click="onResendVer">Re-send E-mail Verification</button>
      <button class="btnUser" @click="onChangeEmail">Change E-mail</button>
      <button class="btnUser" @click="onChangePass">Change Password</button>
      <button class="btnUser delbtn" @click="onDeleteAccount">Delete Account</button>
    </form>

    <form>
      <h2>User Information</h2>
      <div>
      <label>User ID:</label>
      <input class="infoField disbtn" type="text" :disabled="true" v-model="uid" />
      <label>Full name:</label>
      <input class="infoField disbtn" :disabled="true" type="text" v-model="name" />
      <label>E-mail Verified:</label>
      <input class="infoField disbtn" type="text" :disabled="true" v-model="emailVer" />
      <label>Creation Account Date:</label>
      <input class="infoField disbtn" type="date-time" :disabled="true" v-model="creation" />
      </div>
      <button class="btn" @click="onEdit">Edit</button>
      <button class="btnUser delbtn" @click="onSignOut">Sign Out</button>
    </form>
  </div>
</template>

<script>
import Header from "../components/Header";
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  created() {
    var user = firebase.auth().currentUser;
    console.log(user);
    this.name = user.displayName;
    this.email = user.email;
    this.emailVer = user.emailVerified;
    this.uid = user.uid;
    this.creation = user.metadata.creationTime;
  },
  data() {
    return {
      name: "",
      email: "",
      emailVer: false,
      creation: "",
      uid: ""
    };
  },
  methods: {
    async onResendVer() {
      var self = this;
      var user = firebase.auth().currentUser;

      user
        .sendEmailVerification()
        .then(function() {
          console.log("send");
          self.$alert("E-mail verification send");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    onChangeEmail() {
      this.$router.replace({name: "changeemail"});
    },
    onChangePass() {
      this.$router.replace({name: "changepass"});
    },
    onDeleteAccount() {
      var self = this;
      var user = firebase.auth().currentUser;

      user
        .delete()
        .then(function() {
          console.log("deleted");
          self.$alert("Account deleted");
          self.$router.replace({ name: "login" });
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    onEdit() {
      this.$router.replace({name: "editinfo"});
    },
    onSignOut() {
      firebase.auth().signOut();
      this.$router.replace({name: "login"});
    }
  },
  components: {
    Header
  }
};
</script>

<style scoped>
.btnUser {
  cursor: pointer;
  border-radius: 5em;
  color: #fff;
  /* background: linear-gradient(to right, #9c27b0, #e040fb); */
  background: rgb(27, 73, 123);
  border: 0;
  width: 20%;
  margin: 0.5%;
  padding-bottom: 10px;
  padding-top: 10px;
  font-family: "Ubuntu", sans-serif;
  font-size: 13px;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
}
.delbtn {
  background: red;
}
label {
  width: 100%;
  display:block;
}
</style>