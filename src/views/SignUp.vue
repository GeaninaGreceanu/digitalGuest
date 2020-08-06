<template>
    <div>
        <Header/>
        <form @submit.prevent="signUp">
            <h2>Welcome to Digital Guest - Sign Up Page!</h2>
            <div class="email">
                <input type="email" v-model="email" placeholder="e-mail"/>
            </div>
            <div class="password">
                <input type="password" v-model="password" placeholder="password"/>
            </div>
            <button type="submit">Sign Up</button>
        </form>
        <p>{{error}}</p>
        <div class="logInUser">
            <h3>Already registered?</h3>
            <button @click="goToLogin">Log In</button>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header'
import * as firebase from "firebase/app";
import "firebase/auth";
    export default {
        methods: {
            async signUp() {
                try {
                    await firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
                    //console.log(result);
                    //this.error = error;
                    this.$router.replace({name: "user"});
                }catch(err) {
                    console.log(err);
                    this.error = err;
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
                error: ""

            }
        },
        components: {Header}
    }
</script>

<style lang="scss" scoped>

</style>