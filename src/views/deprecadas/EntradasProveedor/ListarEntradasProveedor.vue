<template>
  <v-container
    id="data-tables"
    tag="section"
  >
 <!--    <base-v-component
      heading="Entradas"
      link="components/data-tables"
    /> -->

    <base-material-card
      color="indigo"
      icon="mdi-calendar-today"
      inline
      class="px-5 py-3"
    >
      <template v-slot:after-heading>
        <div class="display-2 font-weight-light">
          Entradas Proveedor
        </div>
      </template>

      

      <v-divider class="mt-3" />

      <template>

          <v-row>
                 <v-col
        cols="12"
        sm="6"
        md="6"
      >
        <base-material-card
          color="success"
          icon="mdi-calendar-today"
        >
          <template v-slot:after-heading>
            <div class="display-1 mt-2 font-weight-light">
              Date Picker <span class="body-1">— date selected</span>
            </div>
          </template>

          <v-menu
            ref="menu2"
            v-model="menu2"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            min-width="290px"
            offset-y
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date2"
                color="secondary"
                label="Select date"
                prepend-icon="mdi-calendar-outline"
                readonly
                v-on="on"
              />
            </template>

            <v-date-picker
              v-model="date"
              color="secondary"
              landscape
              scrollable
            >
              <v-spacer />
              <v-btn
                color="secondary"
                large
                @click="menu2 = false"
              >
                Cancel
              </v-btn>
            </v-date-picker>
          </v-menu>
        </base-material-card>
      </v-col>
  <v-col
        cols="12"
        sm="6"
        md="6"
      >
        <base-material-card
          color="success"
          icon="mdi-calendar-today"
        >
          <template v-slot:after-heading>
            <div class="display-1 mt-2 font-weight-light">
              Date Picker <span class="body-1">— date selected</span>
            </div>
          </template>

          <v-menu
            ref="menu2"
            v-model="menu2"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            min-width="290px"
            offset-y
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date2"
                color="secondary"
                label="Select date"
                prepend-icon="mdi-calendar-outline"
                readonly
                v-on="on"
              />
            </template>

            <v-date-picker
              v-model="date"
              color="secondary"
              landscape
              scrollable
            >
              <v-spacer />
              <v-btn
                color="secondary"
                large
                @click="menu2 = false"
              >
                Cancel
              </v-btn>
            </v-date-picker>
          </v-menu>
        </base-material-card>
      </v-col>



          </v-row>
     </template>

      <v-data-table
        :headers="headers"
        :items="items" 
        :search.sync="search"
        :sort-by="['name', 'office']"
        :sort-desc="[false, true]"
        multi-sort
      />

   
      <v-row class="text-center">
    <v-col cols="12">
        <v-simple-table fixed-header class="elevation-3">
        <template v-slot:default>
        <thead>
            <tr>
            <th class="text-center">ITEMID</th>
            <th class="text-center">NAME</th>
            <th class="text-center">NAMEALIAS</th>
            <th class="text-center">PDWFAMILYID</th>
            <th class="text-center">FECHAMYSQL</th>
            <th class="text-center">QTY</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="entrada in entradas" :key="entrada">
                <td>{{entrada.ITEMID}}</td>
                <td>{{entrada.NAME}}</td>
                <td>{{entrada.NAMEALIAS}}</td>
                <td>{{entrada.PDWFAMILYID}}</td>
                <td>{{entrada.FECHAMYSQL}}</td>
                <td>{{entrada.QTY}}</td>
                <td>
                    <!-- <v-btn :to="{name:'editarArticulo', params:{id:articulo.id}}" fab small color="primary"><v-icon>mdi-pencil</v-icon></v-btn>
                    <v-btn @click.stop="dialog=true" @click="id=articulo.id" fab small color="error"><v-icon>mdi-delete</v-icon></v-btn> -->
                </td>
            </tr>
         </tbody>   
        </template>
        </v-simple-table>
    </v-col>
    </v-row>
 

    </base-material-card>

  </v-container>

</template>


<script>
import axios from 'axios';
  export default {
    name: 'DashboardDataTables',
    name:'listarArticulos', mounted(){
        this.obtenerArticulos();
    },


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
        /*  testado */
       /*  methods:{
        obtenerArticulos(){
            axios.get('http://localhost/apirest/articulos.php')
            .then(r => {
                this.entradas = r.data;
                console.log(this.entradas);
            })
            .catch(function(error){
                console.log(error);
            })

        },
 */
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
