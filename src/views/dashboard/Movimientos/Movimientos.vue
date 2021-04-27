<template>
  <v-container
    id="data-tables"
    tag="section"
  >
    <base-material-card
      color="indigo"
      icon="mdi-truck-delivery"
      inline
      class="px-5 py-3"
    >
      <template v-slot:after-heading>
        <div class="display-2 font-weight-light">
        Movimientos
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
                          flat
                          icon="mdi-table-network"
                          inline
                          class="px-5 py-3"
                        >
                        <template v-slot:after-heading>
                           <div class="display-2 mt-2 font-weight-light">
                     Todos los Movimientos<span class="body-1">— Fecha</span>
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
                    <template v-slot:activator="{ on }">
                      <v-text-field
                      
                        v-model="dates"
                        color="secondary"
                        label="Selecciona Fecha"
                        prepend-icon="mdi-calendar-outline"
                        readonly
                        v-on="on"
                        />
                        </template>

                        <v-date-picker
                          v-model="dates"
                          color="secondary"
                          
                          
                          locale="es-es"
                          range
                          scrollable
                        @change="getArticulos(dates)"
                          >
                        </v-date-picker>
                    
                    </v-menu>
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        class="ml-auto"
                        label="Search"
                        hide-details
                        single-line
                        style="max-width: 250px;"
                            />
                    </base-material-card>
                    <v-divider class="mt-3" />
                      <v-data-table
                    :headers="headers"
                    :items="entradas" 
                    :search.sync="search"
                    :sort-by="['ITEMID', 'FECHAMYSQL']"
                    :sort-desc="[false, true]"
                    multi-sort
                  />
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
    name:'Movimientos', 
   
  data: () => ({
            dates:[],   
     }),


    computed: {
      dateRangeText () {
        return this.dates.join(' ~ ');
      },
    },
  

    // updated() {
    //     console.log(this.dates);
    //     axios
    //   //  .get("http://localhost/apirest/terminados.php")
    //        .get("http://localhost/apirest/articulos.php?dates=" + this.dates)
    //       .then((r) => {
    //         this.entradas = r.data;
    //          console.log(this.entradas);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    //    },
   mounted(){
   // this.obtenerArticulos();
        /* this.guardarArticulo(); */
     //  this.getArticulos();
    },
    //   created() {
    //   this.obtenerArticulos(['2021-03-01', new Date().toISOString().substr(0,10)]);
    //         }, 

    //  data(){
             
    //  },
        data: () => ({
            headers: [
              {
                text: 'FECHA FÍSICA',
                value: 'FECHA_FISICA'
              },
              {
                text: 'CÓDIGO CLIENTE',
                value: 'NAMEALIAS'
              },
              {
                text: 'CODIGO MIXER',
                value: 'ITEMID'
              },
              {
                text: 'NOMBRE',
                value: 'INVENTBATCHID'
              },
              {
                text: 'CANTIDAD',
                value: 'CANTIDAD'
              },
              {
                text: 'PEDIDO CLIENTE',
                value: 'REFERENCEID'
              },
              {
                text: 'CATEGORIA',
                value: 'REFERENCECATEGORY'
              },
              {
                text: 'CATEGORIA',
                value: 'PDWITEMSUBFAMILYID'
              },
              /* {
                sortable: false,
                text: 'Actions',
                value: 'actions'
              } */
            ],
           dates:[],
            entradas: [],
             num: 0,
              changed: [],
              inputed: [],
              menu: false,
            search: undefined
          }),

           created()
             {
            axios.get('http://extranet.vipmixer.es/apirest/movimientos.php')
            .then(r => {
                this.entradas = r.data;
               console.log(this.entradas);
            })
            .catch(function(error){
                console.log(error);
            })
            },

       watch: {
      period: function (newValue, oldValue) {
        if (newValue !== oldValue && this.dates.length === 2) {
          this.getActualizar() // i need to update some tables 
        }
      }
    },

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
         // axios.get('http://localhost/apirest/articulos.php?dates="2021-02-09,2021-02-11"')
           axios.get("http://extranet.vipmixer.es/apirest/articulos.php?dates=" + this.dates)
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
          .get("http://extranet.vipmixer.es/apirest/movimientos.php?dates=" + this.dates)
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
  

    }
 

     
}

   
</script>
