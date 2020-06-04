<template>
  <div>
    <v-row >
      <v-col>
        <Readings />
      </v-col>
    </v-row>

    <v-row align="center"
      justify="center">
      <v-col cols="6">
          <Alerts />
      </v-col>

      

    </v-row>

  </div>
</template>

<script>
import Readings from "../components/Readings.vue";
import Alerts from "../components/Alerts.vue";
import axios from 'axios';

export default {
  name: "Dashboard",
  components: {
    Readings,
    Alerts
  },
  data (){
    return{
      random:0,
    }
  },
  methods:{
    testRandom() {
       this.random = this.randomNumber()

       console.log(this.random);
    },
    randomNumber () {
      const path = 'http://localhost:5000/api/random'
      axios.get(path)
      .then(response => {
        this.random = response.data.randomNumber
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
};
</script>
