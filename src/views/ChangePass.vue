<template>
  <div>
    <form @submit.prevent="onSave">
      <h2>User Information - Change Password</h2>
      <div>
        <label>E-mail:</label>
        <input class="infoField disbtn" type="email" :disabled="true" v-model="email" />
        <label>New Password:</label>
        <input class="infoField" type="password" v-model="pass1" />
        <label>Re-type password:</label>
        <input class="infoField" type="password" v-model="pass2" />
      </div>
      <button class="btn savebtn" type="submit">Save</button>
      <button class="btn cancelbtn" @click="onCancel">Cancel</button>
    </form>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
    export default {
        created() {
            var user = firebase.auth().currentUser;
            console.log(user);
            this.email = user.email;
        },
        data() {
            return {
                email: "",
                pass1: "",
                pass2: ""
            }
        },
        methods: {
            onSave() {
                var self = this;
                if(this.pass1 === this.pass2) {
                    var user = firebase.auth().currentUser;
                    user.updatePassword(this.pass1).then(function() {
                        self.$alert("Password changed succesfully. Log In again");
                        firebase.auth().signOut();
                        self.$router.replace({name: "login"});
                    }).catch(function(error) {
                        console.log(error)
                    });
                } else { this.$alert("Passwords do not match")}
                
            },
            onCancel() {
                this.$router.replace({name: "user"});
            }
        }
    }
</script>

<style scoped>
label {
  width: 100%;
  display:block;
}
</style>