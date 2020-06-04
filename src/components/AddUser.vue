<template>

   <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Add User</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add User</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
                <v-col cols="12" sm="6" md="4">
                <v-text-field label="User ID" required v-model="user.userId"></v-text-field>
              </v-col>
             <v-row>
                  <v-col cols="12">
                <v-text-field label="First name" required v-model="user.firstName"></v-text-field>
              </v-col>
              <!-- <v-col cols="12" sm="6" md="4">
                <v-text-field label="Middle name" hint="if any" v-model="lastName"></v-text-field>
              </v-col> -->
              <v-col>
                <v-text-field
                  label="Last name"
                  persistent-hint
                  required
                  v-model="user.lastName"
                ></v-text-field>
              </v-col>
             </v-row>
              <v-col cols="12">
                <v-text-field label="Email" required v-model="user.email"></v-text-field>
              </v-col>
              <!-- <v-col cols="12">
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-col> -->
              <v-col cols="12" sm="6">
                <v-select
                  :items="['User', 'Manager']"
                  label="Role"
                  required
                  v-model="user.role"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                  <!-- <v-btn disabled>Add Face</v-btn> -->
                <!-- <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete> -->
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeModal">Close</v-btn>
          <v-btn color="blue darken-1" text @click="addUserData">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>


<script>
import { db } from "../server/db";

let usersRef = db.ref("Users");

export default {
  name: "AddUser",
  data() {
    return {
      dialog: false,
      user: {
        userId: "",
        firstName: "",
        lastName: "",
        role: "",
        email:""
        //image:"",
      }
    };
  },

  methods: {
    addUserData: function() {
      usersRef.push(this.user);
      this.dialog = false;
      this.user.userId = "";
      this.user.firstName = "";
      this.user.lastName = "";
      this.user.role = "";
      //this.product.image = "";
    },
    closeModal: function() {
      this.dialog = false;
      this.user.userId = "";
      this.user.firstName = "";
      this.user.lastName = "";
      this.user.role = "";
    }
  }
};
</script>