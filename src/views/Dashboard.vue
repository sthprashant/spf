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

export default {
  name: "Dashboard",
  components: {
    Readings,
    Alerts
  }
};
</script>
