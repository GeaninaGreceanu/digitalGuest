<template>
    <div>
        <Header/>
        <form @submit.prevent="signUp">
            <h2>Welcome to Digital Guest - Sign Up Page!</h2>
            <input class="infoField" type="email" v-model="email" placeholder="Enter E-mail address"/>
            <input class="infoField" type="password" v-model="password" placeholder="Enter password"/>
            <input class="infoField" type="password" v-model="password2" placeholder="Re-enter password"/>
            <br/>
            <button class="btn" type="submit">Sign Up</button>
            <h3>Already registered?</h3>
            <button class="btn loginbtn" @click="goToLogin">Log In</button>
        </form>
    </div>
</template>

<script>
import Header from '../components/Header'
import * as firebase from "firebase/app";
import "firebase/auth";
    export default {
        methods: {
            async signUp() {
                if(this.password === this.password2) {
                    var self = this;
                    await firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                    .then(function() {
                        self.$router.replace({name: "user"});
                    })
                    .catch(function(error) {
                        self.email = "";
                        self.password = "";
                        self.password2 = "";
                        self.$alert(error.message);
                    });
                    
                } else {
                    this.$alert("Passwords don't match");
                }
            },
            goToLogin() {
                this.$router.replace({name: "login"});
            }
        },
        data() {
            return {
                email: "",
                password: "",
                password2: ""

            }
        },
        components: {Header}
    }
</script>

<style scoped>
.loginbtn {
    background: linear-gradient(to right, darkgrey, lightgrey);
    color: black;
    }
</style>