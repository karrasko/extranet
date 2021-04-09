<template>
  <v-card>
    <v-card-title>
      <v-text-field v-model="search" label="Search"></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="records" :search="search">
      <template slot="items" slot-scope="props">
        <tr>
          <td>{{ props.item.id }}</td>
          <td>{{ props.item.description }}</td>
          <td>{{ props.item.cost }}</td>
        </tr>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
 export default {
            name:'ProductoTerminado', 
  data() {
      
      return {
        search: "",

        headers: [
          { text: "Id", value: "id", sortable: "desc" },
          { text: "Description", value: "description", sortable: false },
          { text: "Cost", value: "cost", sortable: false }

        ],

        records: [
            {id:1, description: 'watch', cost: '100'},
            {id:2, description: 'clock', cost: '200'},
            {id:3, description: 'chronograph', cost: '300'}
            ],
      }
    }
 }
</script>
