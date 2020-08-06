<template>
  <div>
    <form @submit.prevent="onSave">
      <h2>User Information</h2>
      <div>
        <label>User ID:</label>
        <input class="infoField disbtn" type="text" :disabled="true" v-model="uid" />
        <label>Full name:</label>
        <input class="infoField" type="text" v-model="name" />
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
            this.uid = user.uid;
            this.name = user.displayName;
            this.email = user.email;
        },
        data() {
            return {
                uid: "",
                name: ""
            }
        },
        methods: {
            onSave() {
                var self = this;
                var user = firebase.auth().currentUser;

                user.updateProfile({
                    displayName: this.name
                }).then(function() {
                    self.$alert("User Information saved succesfully.");
                    self.$router.replace({name: "user"});
                }).catch(function(error) {
                    console.log(error);
                });
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