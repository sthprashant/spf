<template>
  <v-row>
    <v-col>
      <v-row align="center" justify="center">
        <v-card width="950" min-height="300" >
          <v-list-item-title class="headline mx-4 mt-4">Alerts</v-list-item-title>

          <v-card-text >
            <v-row align="center" justify="center" class="pa-12">
              <v-col class="display-1">
                <v-row align="center" justify="center">No Alerts</v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Alerts"
};
</script>
