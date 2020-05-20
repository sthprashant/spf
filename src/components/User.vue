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
          </v-data-table>
        </v-card>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import AddUser from './AddUser'
import {db} from '../server/db.js';

let usersListRef = db.ref("Users");

export default {
    name:'User',
    components:{AddUser,},
    data() {
    return {
      headers: [
        { text: "User ID", value: "userId", align: "left" },
        { text: "First Name", value: "firstName" },
         { text: "Last Name", value: "lastName" },
        { text: "Email", value: "email" },
        { text: "Role", value: "role" },
      ],
      usersList: [{}]
    };
  },
  firebase:{
      usersList: usersListRef,
  }
}
</script>