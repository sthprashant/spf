<template>
  <v-row align="center" justify="center">
    <v-col cols="6">
      <v-card class="mb-6">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="headline">Temperature</v-list-item-title>
            <v-list-item-subtitle>Threshold: 5&deg;C</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-text>
          <v-row align="center">
            <v-col class="display-3" cols="6">{{readTemperatureData}}&deg;C</v-col>
            <v-col cols="6">
              <v-sparkline labels="labels" value="value"></v-sparkline>
              <!-- <p class="display-2">Chart Placeholder</p> -->
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <v-card>
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title class="headline">Humidity</v-list-item-title>
            <v-list-item-subtitle>Threshold: 5&deg;C</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-card-text>
          <v-row align="center">
            <v-col class="display-3" cols="6">23&deg;C</v-col>
            <v-col cols="6">
              <v-sparkline labels="labels" value="value"></v-sparkline>
              <!-- <p class="display-2">Chart Placeholder</p> -->
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import firebase from "firebase";

var database = firebase.database();
var temperatureRef = database.ref("smart-pharmacy-fridge/Sensor_Data/temperature");

export default {
  name: "Readings",
  data() {
    return {
      sensorData: [{}]
    };
  },

  methods: {
    readTemperatureData() {
      //var read = firebase.database().ref('smart-pharmacy-fridge/Sensor_Data');
      temperatureRef.on('child_added', function(childSnapshot, prevChildKey) {
        return (childSnapshot.val()).temperature;
      });
    },
  },
 };
</script>