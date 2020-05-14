<template>
  <div>
    <v-app>
    <v-app-bar app color="primary" dark>

      <v-tabs centered>
        <v-tab to="/" >Dashboard</v-tab>
        <v-tab to="/inventory">Inventory</v-tab>
        <v-tab to="/activity">Activity Logs</v-tab>
        <v-tab to="/users">Users</v-tab>
        <v-tab to="/settings">Settings</v-tab>
        <v-tab to="/simulation">Simulation</v-tab>
      </v-tabs>

    </v-app-bar>

    <v-content>
        <router-view />
    </v-content>
    
  </v-app>
    
  </div>
</template>

<script>
//import Dashboard from "@/views/Dashboard.vue";

export default {
  name: "App",

  components: {
    //Dashboard
  },

  data: () => ({
    //
  })
};
</script>

<style scoped>
v-btn {
  margin: 10px;
}
</style>
