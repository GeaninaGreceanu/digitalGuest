import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import firebase from 'firebase/app'
import VueSimpleAlert from 'vue-simple-alert'

Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.use(VueSimpleAlert);

const firebaseConfig = {
  apiKey: "AIzaSyAsXNojFGm3Epc3LaZvFFdX2NWJZQKkvbY",
  authDomain: "digitalguest-firebase.firebaseapp.com",
  databaseURL: "https://digitalguest-firebase.firebaseio.com",
  projectId: "digitalguest-firebase",
  storageBucket: "digitalguest-firebase.appspot.com",
  messagingSenderId: "602654489902",
  appId: "1:602654489902:web:ac0250bf649f2328c34ebf"
};

  firebase.initializeApp(firebaseConfig);

  let app;

  firebase.auth().onAuthStateChanged(user=> {
    console.log(user);
    if(!app) {
      app = new Vue({
        router,
        render: h => h(App)
      }).$mount('#app')
    }
  })

