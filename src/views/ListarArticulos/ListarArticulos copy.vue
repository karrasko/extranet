<template>
 <v-container>
   <div id="app">
  <input
    @input="input($event.target.value)"
    @change="change($event.target.value)"
    v-model="num"
    type="number"
  />
  <div>
    Changed: {{changed}}
    Input: {{inputed}}
  </div>
</div>
 <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="3">
            <v-text-field
              label="Outlined"
              placeholder="Placeholder"
              outlined
              @change="updateCategory($event, category)"
              @blur="updateCategory($event.target.value, category)"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
      <template>
        <v-row>
            <v-col 
             cols="12"
             sm="6"
              >
              <v-date-picker
                v-model="dates"
                range
              
              @change="getArticulos(dates)"
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
      icon="mdi-factory"
      inline
      class="px-5 py-3"
    >
      <template v-slot:after-heading>
        <div class="display-2 font-weight-light">
          Entradas Proveedor
        </div>
      </template>

      <v-divider class="mt-3" />


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
</v-container>
</template>


<script>
import axios from 'axios';
  export default {
    /* name: 'DashboardDataTables', */
    name:'listarArticulos', 
    
    
  data: {
category:'category text',
  },
      computed: {
      dateRangeText () {
        return this.dates.join(' ~ ')
      },
      
    },
   updated(){
        // this.obtenerArticulos();
        /* this.guardarArticulo(); */
        this.getArticulos();
    },
data(){
  
        return{            
            dates: ['2020-09-10', new Date().toISOString().substr(0,10)],
            id: null,
            index:null,
            entrada:null,
            snackbar:false,
            entradas:{
  
                  ITEMID: "",
                  NAME: "",
                  NAMEALIAS: "",
                  FECHAMYSQL: "",
                  PDWFAMILYID:"",
                  QTY:"",
                  INVENTBATCHID:"",
                  
                  },
          num: 0,
      changed: [],
      inputed: []
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
           // axios.get('http://extranet.vipmixer.es/apirest/articulos.php')
            axios.get('http://localhost/apirest/articulos.php')
            .then(r => {
                this.entradas = r.data;
                console.log(this.entradas);
            })
            .catch(function(error){
                console.log(error);
            })

        },
       getArticulos() {
        console.log(this.dates);
        axios
          .get("http://localhost/apirest/articulos.php?dates=" + this.dates)
          .then((r) => {
            this.entradas = r.data;
             console.log(this.entradas);
          })
          .catch(function (error) {
            console.log(error);
          });
       },

  //   async getArticulos(dates) {
  //   let data = await axios.get(
  //     `http://localhost/api/articulos.php/?dates=${dates}`
  //   );
  //   //console.log(this.dates);
  //   this.articulo = await data;
  //   console.log(this.articulo.descripcion);
  // },
        created() {
          this.getArticulos("2020-01-05");
      }, 
   },
    updateCategory(event, category) {
      console.log(event, category);
    },
    change(value){
      console.log(value)
      this.changed.push(value)
    }, 
    input(value){
      console.log(value)
      this.inputed.push(value)
    }
 }

   
</script>
