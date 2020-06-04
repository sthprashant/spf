<template>
  <v-row>
    <v-col cols="12">
      <v-row align="center" justify="center" class="ma-5 mb-1">
        <AddUser />
      </v-row>
    </v-col>
    <v-col>
      <v-row align="center" justify="center" class="ma-5 mt-1">
        <v-card color="primary" width="1000">
          <v-data-table hide-actions :headers="headers" :items="usersList" class="elevation-1">
            <template v-slot:item.stockLevel="{ item }">
              <v-chip>{{item.totalWeight/item.weight}}</v-chip>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon small class="mr-2" @click="addFace(item)">mdi-plus</v-icon>
              <!-- <v-icon class="mr-2" @click="alert('clikced',item)">mdi-pencil</v-icon> -->
              <!-- <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon> -->
              <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
            </template>
          </v-data-table>
        </v-card>
<v-card>
        <v-btn color="primary" dark @click="testRandom">Add User</v-btn>
        <p>{{random}}</p>
      </v-card>
      
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import AddUser from "./AddUser";
import { db } from "../server/db.js";
//import {child} from "../server/index.js"
//import '../server/index.js'
import axios from 'axios';

//import ffrom '../../vue-temp/vue-editor-bridge';

let usersListRef = db.ref("Users");

export default {
  name: "User",
  components: { AddUser },
  data() {
    return {
      headers: [
        { text: "User ID", value: "userId", align: "left" },
        { text: "First Name", value: "firstName" },
        { text: "Last Name", value: "lastName" },
        { text: "Email", value: "email" },
        { text: "Role", value: "role" },
        { text: "Actions", value: "actions" }
      ],
      usersList: [{}],
      random:0,
      
    };
  },
  firebase: {
    usersList: usersListRef
  },
  methods: {
    addFace: function(item) {
      console.log(item);

    },
    deleteItem: function(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },
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
    },
  }
};
</script>