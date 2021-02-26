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
                          Stock Rechazados
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
                        :items="StockRechazados"
                        :search.sync="search"
                        :sort-by="['ITEMID', 'STOCK']"
                        :sort-desc="[false, true]"
                        multi-sort
                      />
                  </base-material-card>
              </v-container>
      </template>

    </template>
 
    <!--  <v-row class="text-center">
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
            <tr v-for="(StockRechazados, index) in StockRechazados" :key="index">
                <td>{{StockRechazados.ITEMID}}</td>
                <td>{{StockRechazados.NAME}}</td>
                <td>{{StockRechazados.NAMEALIAS}}</td>
                <td>{{StockRechazados.PDWSUBFAMILYID}}</td>
                <td class="dt-number">{{StockRechazados.STOCK}}</td>
                <td>{{StockRechazados.INVENTSTATUSID}}</td>
           </tr>
                 
         </tbody>   
        </template>
        </v-simple-table>
      </v-col>
    </v-row> -->
 

    </base-material-card>

  </v-container>

</template>


<script>
import axios from 'axios';
  export default {

          name:'StockRechazados', 

        /*   mounted(){
          
              this.obtenerTotales();
                } , */
          data(){
                return{            
                  
                    StockRechazados:null, 
                  
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
                text: 'FAMILIA',
                value: 'PDWSUBFAMILYID'
              },
              {
                text: 'STOCK',
                value: 'STOCK'
              },
              {
              //  sortable: false,
                text: 'ESTADO',
                value: 'INVENTSTATUSID'
              }
            ],
            
            StockRechazados: [],
            search: undefined
            
          }),
           created()
             {
            axios.get('http://extranet.vipmixer.es/apirest/stockrechazados.php')
            .then(r => {
                this.StockRechazados = r.data;
                console.log(this.StockRechazados);
            })
            .catch(function(error){
                console.log(error);
            })
            },
              /* methods:{
                  obtenerTotales(){
                      axios.get('http://localhost/apirest/StockRechazados.php')
                      .then(r => {
                          this.StockRechazados = r.data;
                          console.log(this.StockRechazados);
                      })
                      .catch(function(error){
                          console.log(error);
                      })

                  }
            } */
  }
   
</script>
