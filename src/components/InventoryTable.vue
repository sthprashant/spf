<template>
  <v-row>
    <v-col cols="12">
      <v-row align="center" justify="center" class="ma-5 mb-1">
        <AddInventory />
      </v-row>
    </v-col>
    <v-col>
      <v-row align="center" justify="center" class="ma-5 mt-1">
        <v-card color="primary" width="1000">
          <v-data-table hide-actions :headers="headers" :items="inventoryList" class="elevation-1">
            <template v-slot:item.stockLevel="{ item }">
              <v-chip>{{item.totalWeight/item.weight}}</v-chip>
            </template>
          </v-data-table>
        </v-card>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import AddInventory from "./AddInventory";
import { db } from "../server/db.js";

let inventoryListRef = db.ref("Inventory");
console.log(inventoryListRef.orderByChild("totalWeight"));

export default {
  name: "InventoryTable",
  components: {
    AddInventory
  },
  data() {
    return {
      headers: [
        { text: "id", value: "id", align: "left" },
        { text: "Name", value: "name" },
        { text: "Stock Level", value: "stockLevel" },
        { text: "Auto Order", value: "autoOrder" },
        { text: "Auto order threshold", value: "threshold" }
      ],
      inventoryList: [{}]
    };
  },
  firebase: {
    inventoryList: inventoryListRef,
  },
};
</script>