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
      icon="mdi-stocking"
      inline
      class="px-5 py-3"
    >
      <template v-slot:after-heading>
        <div class="display-2 font-weight-light">
          Stock
           <!-- {{PALETS}} -->
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
                      heading=" PYD"
                      link="components/data-tables"
                    />

                    <base-material-card
                      color="success"
                      icon="mdi-table-network"
                      inline
                      class="px-5 py-3"
                    >
                      <template v-slot:after-heading>
                        <div class="display-2 font-weight-light">
                          Producto Terminado
                        </div>
                      </template>

                      <!-- <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        class="ml-auto"
                        label="Search"
                        hide-details
                        single-line
                        style="max-width: 250px;"
                      /> -->

                      <v-divider class="mt-3" />
       
          <v-simple-table 
          fixed-header class=""
          :search.sync="search">
          <template v-slot:default>
          <thead>
            <tr>
            <th class="text-center">CODIGO MIXER</th>
            <th class="text-center">DESCRIPCION</th>
            <th class="text-center">CODIGO CLIENTE</th>
            <th class="text-center">FAMILIA</th>
            <th class="text-center">LOTE</th>
            <th class="text-center">STOCK</th>
            <th class="text-center">ESTADO</th>
            <th class="text-center">UNIDADES PALET</th>
            <th class="text-center">NUMERO PALETS</th>
            </tr>
           </thead>
         <tbody>
            <tr v-for="(ProductoTerminado, index) in ProductoTerminado" :key="index"
            
            >
                <td>{{ProductoTerminado.ITEMID}}</td>
                <td>{{ProductoTerminado.NAME}}</td>
                <td>{{ProductoTerminado.NAMEALIAS}}</td>
                <td>{{ProductoTerminado.PDWSUBFAMILYID}}</td>
                <td>{{ProductoTerminado.INVENTBATCHID}}</td>
                <td>{{ProductoTerminado.NSTOCK2}}</td>
                <td>{{ProductoTerminado.INVENTSTATUSID}}</td>
                <td>{{ProductoTerminado.NUMERATOR}}</td>
                <td style= display:none >{{PALETS = ProductoTerminado.NSTOCK2 / ProductoTerminado.NUMERATOR}}</td>
                <td>{{Math.ceil(PALETS)}}</td>
               
                
            </tr>
                 
         </tbody>   
        </template>
        </v-simple-table>


                      <!-- <v-data-table
                        :headers="headers"
                        :items="items"
                        :search.sync="search"
                        :sort-by="['name', 'office']"
                        :sort-desc="[false, true]"
                        multi-sort
                      /> -->


                  </base-material-card>
              </v-container>
      </template>

    
    </template>
 
    

 

    </base-material-card>

  </v-container>

</template>


<script>
import axios from 'axios';
  export default {
    /* name: 'DashboardDataTables', */
    name:'ProductoTerminado', 
    mounted(){
     /*  this.dividirpalets(); */
        this.obtenerTotales();
    } ,/*
      computed: {
      dateRangeText () {
        return this.dates.join(' ~ ')
        
      },
    }, */
   
      computed: { 
        dividirpalets(){
          /*  v-for="(ProductoTerminado, index) in ProductoTerminado" :key="index" */
                let PALETS = ProductoTerminado.NSTOCK2 / ProductoTerminado.NUMERATOR;
                 return this.PALETS;
                 console.log (this.PALETS)
                  },  
      },
    
data(){


        return{            
          /*   dates: ['2019-09-10', '2019-09-20'], */
             ProductoTerminado:null, 
             search:""
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
            axios.get('http://extranet.vipmixer.es/apirest/productoterminado.php')
            .then(r => {
                this.ProductoTerminado = r.data;
                console.log(this.ProductoTerminado);
            })
            .catch(function(error){
                console.log(error);
            })

        }
  }
  }
   
</script>
