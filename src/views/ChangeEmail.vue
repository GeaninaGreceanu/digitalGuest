<template>
    <div>
        <form @submit.prevent="onSave">
            <h2>User Information - Change E-mail</h2>
            <div>
            <label>User ID:</label>
            <input class="infoField disbtn" type="text" :disabled="true" v-model="uid" />
            <label>E-mail:</label>
            <input class="infoField disbtn" type="email" :disabled="true" v-model="email" />
            <label>New e-mail:</label>
            <input class="infoField" type="email" v-model="newMail" />
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
            this.email = user.email;
        },
        data() {
            return {
                uid: "",
                email: "",
                newMail: ""
            }
        },
        methods: {
            onSave() {
                var self = this;
                var user = firebase.auth().currentUser;

                user.updateEmail(this.newMail).then(function() {
                    self.$alert("E-mail changed succesfully. Please login again");
                    firebase.auth().signOut();
                    self.$router.replace({name: "login"});
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