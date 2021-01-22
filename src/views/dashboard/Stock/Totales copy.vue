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
          Stock Terminados
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
            <tr v-for="(stock, index) in stock" :key="index">
                <td>{{stock.ITEMID}}</td>
                <td>{{stock.NAME}}</td>
                <td>{{stock.NAMEALIAS}}</td>
                <td>{{stock.PDWSUBFAMILYID}}</td>
                <td>{{stock.NSTOCK}}</td>
                <td>{{stock.INVENTSTATUSID}}</td>
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
    name:'Totales', mounted(){
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
            stock:null,
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
            axios.get('http://localhost/apirest/totales.php')
            .then(r => {
                this.stock = r.data;
                console.log(this.entradas);
            })
            .catch(function(error){
                console.log(error);
            })

        },
          
        
    },
    
  }

   
</script>
