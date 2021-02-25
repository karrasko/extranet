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
                    Entradas Proveedor <span class="body-1">— Entradas Proveedor</span>
                  </div>
                </template>

            </base-material-card>
          </v-col>
        </v-row>

     </template>

      <template>

        <v-container
          id="extended-forms"
          fluid
          tag="section"
        >
        <base-v-component
          heading="Date Pickers"
          link="components/date-pickers"
        />

        <v-row>
            <v-col 
              cols="12"
              sm="6"
              md="4"
              >
                    <base-material-card
                    color="success"
                    icon="mdi-calendar-today"
                    >

                   <template v-slot:after-heading>
                    <div class="display-1 mt-2 font-weight-light">
                       Date Picker <span class="body-1">— labeled</span>
                    </div>
                  </template>

                    <v-menu 
                       ref="menu"
                       v-model="menu"
                       :close-on-content-click="false"
                       :return-value.sync="dates"
                       transition="scale-transition"
                       min-width="290px"
                       offset-y
                    >
                     <template v-slot:activator="{on}">
                      <v-text-field
                      
                        v-model="dates"
                        color="secondary"
                        label="Select date"
                        prepend-icon="mdi-calendar-outline"
                        readonly
                        v-on="on"
                        />
                        </template>

                        <v-date-picker
                          v-model="dates"
                          color="secondary"
                          landscape
                          elevation="5"
                          locale="es-es"
                          range
                          scrollable
                          @change="obtenerArticulos(dates)"
                        ></v-date-picker>

                    </v-menu>
                  </base-material-card>
              </v-col>

              <v-col
              cols="12"
              sm="6"
             
              >
                model: {{ dates }}
              </v-col>
          </v-row>
        </v-container>
      </template>

     <v-data-table
        :headers="headers"
        :items="entradas" 
        :search.sync="search"
        :sort-by="['ITEMID', 'FECHAMYSQL']"
        :sort-desc="[false, true]"
        multi-sort
      />
        <!-- <v-row>
      <v-col>
        <form v-on:submit.prevent="obtenerArticulos()">
          <v-text-field
            v-model="entradas.ITEMID"
            label="CODIGO MIXER'"
            outlined
            
          ></v-text-field>
          <v-text-field
            v-model="entradas.NAME"
            label="DESCRIPCION"
            
            
            outlined
           
          ></v-text-field>
          <v-text-field
            v-model="entradas.NAMEALIAS"
            label="Codigo Cliente"
          
            outlined
            
          ></v-text-field>
          <v-text-field
            v-model="entradas.PDWFAMILYID"
            label="FAMILIA"
            
            outlined
            
          ></v-text-field>
          <v-card-actions>
            <v-btn color="warning" class="mr-4" type="submit">Guardar</v-btn>
          </v-card-actions>
        </form>
      </v-col>
    </v-row> -->
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
        return this.dates.join(' ~ ');
      },
    },
    updated() {
      //   console.log(this.dates);
      //   axios
      // //  .get("http://localhost/apirest/terminados.php")
      //      .get("http://localhost/apirest/articulos.php?dates=" + this.dates)
      //     .then((r) => {
      //       this.entradas = r.data;
      //        console.log(this.entradas);
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     });
       },
   mounted(){
     // this.obtenerArticulos();
        /* this.guardarArticulo(); */
       // this.getArticulos();
    },
     data(){
             
     },
        data: () => ({
            headers: [
              {
                text: 'CODIGO MIXER',
                value: 'ITEMID'
              },
              {
                text: 'DESCRIPCION',
                value: 'NAME'
              },
              {
                text: 'CODIGO CLIENTE',
                value: 'NAMEALIAS'
              },
              {
                text: 'FECHA',
                value: 'FECHAMYSQL'
              },
              {
                text: 'FAMILIA',
                value: 'PDWFAMILYID'
              },
              {
                text: 'CANTIDAD',
                value: 'QTY'
              },
              {
                text: 'LOTE',
                value: 'INVENTBATCHID'
              },
              /* {
                sortable: false,
                text: 'Actions',
                value: 'actions'
              } */
            ],
           dates: [],
            entradas: [],
             num: 0,
              changed: [],
              inputed: [],
              menu: false,
            search: undefined
          }),

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

         

      //        created()
      //        {
      //       console.log(this.dates);
      //   axios
      //     .get('http://localhost/apirest/articulos.php?dates="2020-01-09,2021-01-31"')
      //     .then((r) => {
      //       this.entradas = r.data;
      //        console.log(this.entradas);
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     });
      //  },

    
       ///     created() {
       //    this.getArticulos("2020-01-05");
        //    }, 
      methods:{
        obtenerArticulos(){
          console.log(this.dates);
          // axios.get('http://extranet.vipmixer.es/apirest/articulos.php?dates="2020-01-09,2021-01-31"')
            axios.get("http://localhost/apirest/articulos.php?dates=" + this.dates)
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
      },
    }
 }

   
</script>
