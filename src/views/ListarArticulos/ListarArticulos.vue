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
          Entradas Proveedor
        </div>
      </template>

      <v-divider class="mt-3" />

      <template>
        <v-row>
            <v-col 
             cols="12"
             sm="6"
              >
                  <v-date-picker
                   v-model="dates"
                   range
                   scrollable
                   
                  ></v-date-picker>
              </v-col>
            <v-col
             cols="12"
             sm="6"
            >
                <v-text-field
                  v-model="dates"
                  label="Date range"
                  prepend-icon="mdi-calendar"
                  readonly
                  
                  ></v-text-field> 

                   model: {{ dates }}
              </v-col>
      </v-row>
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
            <th class="text-center">FECHA</th>
            <th class="text-center">FAMILIA</th>
            <th class="text-center">CANTIDAD</th>
            <th class="text-center">LOTE</th>
            </tr>
           </thead>
         <tbody>
            <tr v-for="(entrada, index) in entradas" :key="index">
                <td>{{entrada.ITEMID}}</td>
                <td>{{entrada.NAME}}</td>
                <td>{{entrada.NAMEALIAS}}</td> 
                <td>{{entrada.FECHAMYSQL}}</td>
                <td>{{entrada.PDWFAMILYID}}</td>
                <td>{{entrada.QTY}}</td>
                <td>{{entrada.INVENTBATCHID}}</td>
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
    /* name: 'DashboardDataTables', */
    name:'listarArticulos', 
    
    mounted(){
        this.obtenerArticulos();
        /* this.guardarArticulo(); */
    },

      computed: {
      dateRangeText () {
        return this.dates.join(' ~ ')
        
      },
      
    },
data(){


        return{            
            dates: ['2020-09-10', new Date().toISOString().substr(0,10)],
            fecha: new Date().toISOString().substr(0,10),
            rangofecha:'2020-02-21',
            rangofecha2:'2017-02-21',
            entradas:null,
            entrada:null,
            snackbar:false,
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
          
    
        /*,
    
         postdata(e){
              this.axios.post('http://localhost:8081/ListarArticulos/',this.fecha)
            .then(r => {
               console.warn(result);
              
            })
            .catch(function(error){
                console.log(error);
            })

        }, */
    },
    
  }

   
</script>
