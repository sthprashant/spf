<template>
  <v-row align="center" justify="center">
    <v-col cols="6">
      <v-card class="mb-6">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="headline">Temperature</v-list-item-title>
            <v-list-item-subtitle>Threshold: {{tempThreshold}}&deg;C</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-text>
          <v-row align="center">
            <v-col class="display-3" cols="6">
              <v-col class="display-1" cols="6">{{temperature}}&deg;C</v-col>
            </v-col>
            <v-col cols="6"></v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <v-card>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="headline">Humidity</v-list-item-title>
            <v-list-item-subtitle>Threshold: {{humidityThreshold}}&deg;C</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-text>
          <v-row align="center">
            <v-col class="display-1" cols="6">{{humidity}}&deg;C</v-col>
            <v-col cols="6"></v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { db } from "../server/db.js";

const sensorDataRef = db.ref("Sensor_Data");
export default {
  name: "Readings",
  data() {
    return {
      temperature: sensorDataRef
        .orderByChild("temperature")
        .on("child_added", snapshot => {
          this.updateTemp(snapshot.val().temperature);
          console.log(snapshot.val().temperature);
        }),
      humidity: sensorDataRef
        .orderByChild("humidity")
        .on("child_added", snapshot => {
          this.updateHumidity(snapshot.val().humidity);
          console.log(snapshot.val().humidity);
        }),
      tempThreshold:0,
      humidityThreshold:0,
    };
  },

  firebase: {
    sensorData: sensorDataRef
  },
  methods: {
    updateTemp: function(newTemp) {
      console.log(newTemp);
      this.temperature = newTemp;
    },
    updateHumidity: function(newHumidity) {
      console.log(newHumidity);
      this.humidity = newHumidity;
    }
  }
};
</script>