<template>
  <v-container
    id="data-tables"
    tag="section"
  >
    <base-v-component
      heading="Data Tables"
      link="components/data-tables"
    />

    <base-material-card
      color="indigo"
      icon="mdi-vuetify"
      inline
      class="px-5 py-3"
    >
      <template v-slot:after-heading>
        <div class="display-2 font-weight-light">
          Entradas Proveedor
        </div>
      </template>

      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        class="ml-auto"
        label="Search"
        hide-details
        single-line
        style="max-width: 250px;"
      />
     <template>
     <v-container>
        <v-card
           > <v-toolbar
        dense
        flat
        class="body-2 font-weight-bold"
        color="grey lighten-2"
        >Vuetify Date Picker Example</v-toolbar
      >
   
    <v-row class="ma-1">
      <v-col cols="12">
        Pick a date. Have fun.
      </v-col>
      <v-col cols="12" md="6">
        <v-menu
              
              v-model="fromDateMenu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y 
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  label="Desde"
                  prepend-icon="e"
                  readonly
                  :value="fromDateDisp"
                   v-on="on"
                 ></v-text-field>
              </template>
              <v-date-picker
                locale="en-in"
                v-model="fromDateVal"
                no-title
                @input="fromDateMenu = false"
                :min="minDate"
              ></v-date-picker>
            </v-menu>
        </v-col>
<v-col cols="12" md="6">
        <v-menu
              
              v-model="fromDateMenu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y 
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  label="From"
                  prepend-icon="event"
                  readonly
                  :value="fromDateDisp"
                   v-on="on"
                 ></v-text-field>
              </template>
              <v-date-picker
                locale="en-in"
                v-model="fromDateVal"
                no-title
                @input="fromDateMenu = false"
                :min="minDate"
              ></v-date-picker>
            </v-menu>
        </v-col>

       </v-row>
     </v-card>
  </v-container>
 </template>
      <v-divider class="mt-3" />

      <v-data-table
        :headers="headers"
        :items="items"
        :search.sync="search"
        :sort-by="['name', 'office']"
        :sort-desc="[false, true]"
        multi-sort
      />
    </base-material-card>
  </v-container>
</template>

<script>
import axios from 'axios';
  export default {
    name: 'DashboardDataTables',

 /*  methods:{
        listarEntradas(){
            axios.get('http://localhost/apirest/articulos.php')
            .then(r => {
                this.articulos = r.data;
                console.log(this.articulos);
            })
            .catch(function(error){
                console.log(error);
            })

        }, */


    data: () => ({
      headers: [
        {
          text: 'Name',
          value: 'name'
        },
        {
          text: 'Position',
          value: 'position'
        },
        {
          text: 'Office',
          value: 'office'
        },
        {
          text: 'Age',
          value: 'age'
        },
        {
          text: 'Date',
          value: 'date'
        },
        {
          sortable: false,
          text: 'Actions',
          value: 'actions'
        }
      ],
      
      items: [
        {
          name: 'Airi Satou',
          position: 'Accountant',
          office: 'Tokyo',
          age: 33,
          date: '2008/11/28'
        },
        {
          name: 'Angelica Ramos',
          position: 'Chief Executive Officer (CEO)',
          office: 'London',
          age: 47,
          date: '2009/10/09'
        },
        {
          name: 'Ashton Cox',
          position: 'Junior Technical Author',
          office: 'San Francisco',
          age: 66,
          date: '2009/01/12'
        },
        {
          name: 'Bradley Greer',
          position: 'Software Engineer',
          office: 'London',
          age: 41,
          date: '2012/10/13'
        },
        {
          name: 'Brenden Wagner',
          position: 'Software Engineer',
          office: 'San Francisco',
          age: 28,
          date: '2011/06/07'
        }
      ],
      search: undefined
    })
  }
</script>
