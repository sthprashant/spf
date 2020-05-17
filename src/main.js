import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
//import VueFire from 'vuefire';
import { rtdbPlugin } from 'vuefire';
//import * as firebase from 'firebase';

Vue.use(rtdbPlugin);

Vue.config.productionTip = false;



// // Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyDxrvoXcRjoF-_RKApXiiHsLtW_qkZANtQ",
//   authDomain: "smart-pharmacy-fridge.firebaseapp.com",
//   databaseURL: "https://smart-pharmacy-fridge.firebaseio.com",
//   projectId: "smart-pharmacy-fridge",
//   storageBucket: "smart-pharmacy-fridge.appspot.com",
//   messagingSenderId: "546895053677",
//   appId: "1:546895053677:web:a7f46cd96e2183d4e69064",
//   measurementId: "G-P2LRDF1V03"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
