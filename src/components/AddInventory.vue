<template>
  <v-row align="center" justify="center" class="ma-5 mb-1">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" v-on="on">Add Product</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add Inventory</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Product ID" required v-model="product.id"></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field label="Product Name" persistent-hint required v-model="product.name"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Weight (g)" required v-model="product.weight"></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-select
                  :items="['On', 'Off']"
                  label="Auto Order"
                  required
                  v-model="product.autoOrder"
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeModal">Close</v-btn>
          <v-btn color="blue darken-1" text @click="addInventoryData">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
import { db } from "../server/db";

let inventoryRef = db.ref("Inventory");

export default {
  name: "AddInventory",
  data() {
    return {
      dialog: false,
      product: {
        id: "",
        name: "",
        weight: "",
        totalWeight: 1000,
        stockLevel:"",
        autoOrder: false,
        threshold: ""
      }
    };
  },

  methods: {
    addInventoryData: function() {
      inventoryRef.push(this.product);
      this.dialog = false;
      this.product.id = "";
      this.product.name = "";
      this.product.weight = "";
      this.product.totalWeight = "";
      this.product.stockLevel = "";
      this.product.autoOrder = "";
      this.product.threshold = "";
    },
    closeModal: function() {
     this.dialog = false;
      this.product.id = "";
      this.product.name = "";
      this.product.weight = "";
      this.product.stockLevel = "";
      this.product.autoOrder = false;
      this.product.threshold = "";
    }
  }
};
</script>