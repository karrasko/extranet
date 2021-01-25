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
      icon="mdi-amazon-alexa"
      inline
      class="px-5 py-3"
    >
      <template v-slot:after-heading>
        <div class="display-2 font-weight-light">
          ProductoTerminadoDeposito
        
        </div>
      </template>

      

      <v-divider class="mt-3" />

      <template>

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
                          DataTables
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

      <!--       <v-row>

                  <v-col
            cols="12"
            sm="6"
          >
            <v-date-picker
              v-model="dates"
              range
            ></v-date-picker>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              >
              <v-text-field
                v-model="dateRangeText"
                label="Date range"
                prepend-icon="mdi-calendar"
                readonly
            ></v-text-field>
            model: {{ dates }}
          </v-col>

          -->

              <!-- <v-col
                  cols="6"
                  sm="6"
                  md="6"
              >
                  <base-material-card
                  color="success"
                  icon="mdi-calendar-today"
                  >
                <template v-slot:after-heading>
                  <div class="display-1 mt-2 font-weight-light">
                    Fecha de entrada <span class="body-1">— seleccione dato</span>
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
            </v-col> -->
            <!-- <v-col
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
                    Fecha limite <span class="body-1">— seleccione dato</span>
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
            </v-col> -->



          <!--  </v-row>-->
    </template>
 
    

   
       <v-row class="text-center">
         <v-col cols="12">
          <v-simple-table fixed-header class="elevation-3">
          <template v-slot:default>
          <thead>
            <tr>
            <th class="text-center">CODIGO MIXER</th>
            <th class="text-center">DESCRIPCION</th>
            <th class="text-center">CODIGO CLIENTE</th>
            <th class="text-center">FAMILIA</th>
            <th class="text-center">STOCK</th>
            <th class="text-center">ESTADO</th>
            </tr>
           </thead>
         <tbody>
            <tr v-for="(ProductoTerminadoDeposito, index) in ProductoTerminadoDepositado" :key="index">
                <td>{{ProductoTerminado.ITEMID}}</td>
                <td>{{ProductoTerminado.NAME}}</td>
                <td>{{ProductoTerminado.NAMEALIAS}}</td>
                <td>{{ProductoTerminado.PDWSUBFAMILYID}}</td>
                <td>{{ProductoTerminado.STOCK}}</td>
                <td>{{ProductoTerminado.INVENTSTATUSID}}</td>
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
    /* name: 'DashboardDataTables', */
    name:'ProductoTerminadoDeposito', mounted(){
     /*  this.dividirpalets(); */
        this.obtenerTotales();
    } ,/*
      computed: {
      dateRangeText () {
        return this.dates.join(' ~ ')
        
      },
    }, */
data(){
        return{            
          /*   dates: ['2019-09-10', '2019-09-20'], */
             ProductoTerminadoDeposito:null, 
          /*   index:null,
            snackbar:false, */
           /*  date: '',
            date2: '2019-09-26',
            date3: '',
            dropdown: [
                {
                id: 1,
                text: 'Action'
                },
                {
                id: 2,
                text: 'Another Action'
                },
                {
                id: 3,
                text: 'A Third Action'
                }
            ], */
        }
},
/* no se ni lo que es el primero el sdegundo testado */
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


    methods:{

 

        obtenerTotales(){
            axios.get('http://localhost/apirest/productoterminadodeposito.php')
            .then(r => {
                this.ProductoTerminadoDeposito = r.data;
                console.log(this.ProductoTerminadoDeposito);
            })
            .catch(function(error){
                console.log(error);
            })

        }
  }
  }
   
</script>
