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
                    Entradas Proveedor <span class="body-1">— Entradas Proveedor</span>
                  </div>
                </template>
                <!--   <v-menu
                    ref="dates"
                    v-model="dates"
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
                        label="Date Range"
                        prepend-icon="mdi-calendar-outline"
                        readonly 
                        v-on="on"
                      />
                    </template>

                    <v-date-picker
                      v-model="dates"
                      range
                      color="secondary"
                      landscape
                      scrollable
                      @change="getEntradasProveedor(dates)"
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
                  </v-menu> -->

            </base-material-card>
          </v-col>
        </v-row>

     </template>
       <!--   <v-divider class="mt-3" /> -->
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
     <!--  <v-divider class="mt-3" /> -->
      <v-data-table
        :headers="headers"
        :items="entradas" 
        :search.sync="search"
        :sort-by="['ITEMID', 'FECHAMYSQL']"
        :sort-desc="[false, true]"
        multi-sort
      />

    </base-material-card>
  </v-container>
</template>

<script>
import axios from 'axios';
  export default {
   
    name:'ListarEntradasProveedor',


    computed:{
      daterangeText(){
        return this.dates.join(' ~ ');
      },

          },
          /*   dropdown: [
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
         data(){
                return{            
                  
                  entradas:null, 
                  dates: ['2020-09-10', new Date().toISOString().substr(0,10)],
                 //   menu:false,
                }
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
            
            entradas: [],
            search: undefined
          }),
           created()
             {
            axios.get('http://extranet.vipmixer.es/apirest/articulos.php')
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
         .get('http://extranet.vipmixer.es/apirest/articulos.php' + this.dates)
        .then((r) => {
          this.articulo = r.data;
        
        })
        .catch(function (error) {
         console.log(error);
      });
  },
  created() {
    this.getArticulos("2020-01-05");
 }
 

  }
</script>
