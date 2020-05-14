<template>
  <v-row >
    <v-col cols="12">
      <v-row align="center" justify="center" class="ma-5 mb-1">
        <v-btn color="primary">Add Product</v-btn>
      </v-row>
    </v-col>
    <v-col>
      <v-row align="center" justify="center" class="ma-5 mt-1">
        <v-card color="primary" width="1000">
          <v-data-table hide-actions :headers="headers" :items="inventoryList" class="elevation-1" >
            <template v-slot:item.stockLevel="{ item }">
              <v-chip :color="getColor(item.stockLevel)" dark>{{ item.stockLevel }}</v-chip>
            </template>
            <!-- <template v-slot:items="props">
          <td>{{ props.item.id }}</td>
          <td class="text-xs-right">{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.itemWeight }}</td>
          <td class="text-xs-right">{{ props.item.stockLevel }}</td>
          <td class="text-xs-right">{{ props.item.autoOrder }}</td>
          <td class="text-xs-right">{{ props.item.threshold }}</td>
            </template>-->
          </v-data-table>
        </v-card>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "InventoryTable",
  data() {
    return {
      headers: [
        { text: "id", value: "id", align: "left" },
        { text: "Name", value: "name" },
        { text: "Stock Level", value: "stockLevel" },
        { text: "Auto Order", value: "autoOrder" },
        { text: "Auto order threshold", value: "threshold" }
      ],
      inventoryList: [
        {
          id: 1,
          name: "test",
          itemWeight: 100,
          totalWeight: 600,
          stockLevel: 6,
          autoOrder: true,
          threshold: 5
        },
        {
          id: 2,
          name: "test1",
          itemWeight: 200,
          totalWeight: 600,
          stockLevel: 3,
          autoOrder: true,
          threshold: 5
        },
        {
          id: 3,
          name: "test2",
          itemWeight: 300,
          totalWeight: 600,
          stockLevel: 2,
          autoOrder: true,
          threshold: 5
        },
        {
          id: 4,
          name: "test3",
          itemWeight: 100,
          totalWeight: 600,
          stockLevel: 6,
          autoOrder: true,
          threshold: 5
        }
      ]
    };
  },
  methods: {
    getColor(stockLevel) {
      if (stockLevel < 3) return "red";
      else if (stockLevel < 4) return "orange";
      else return "green";
    }
  }
};
</script>