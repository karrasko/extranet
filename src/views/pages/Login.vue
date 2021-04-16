<template>
 <v-container
    id="login"
    fill-height
    tag="section"
  >
<v-row justify="center">
      <v-slide-y-transition appear>
        <base-material-card
          color="success"
          light
          max-width="100%"
          width="400"
          class="px-5 py-3"
        >
       
        <template v-slot:heading>
            <div class="text-center">
              <h1 class="display-2 font-weight-bold mb-2">
                Login
              </h1>
            </div>
          </template>
   
                <v-card-text class="text-center">       
            <form v-on:submit.prevent="login()">
              <v-container>
                <v-row>
                 
                    <v-text-field
                      v-model="firstname"
                      :rules="nameRules"
                      color="secondary"
                      :counter="10"
                      label="Usuario"
                      required
                      prepend-icon="mdi-face"
                        class="mt-10"
                    ></v-text-field>
                 
                   <v-text-field
                      v-model="lastname"
                      :rules="nameRules"
                      color="secondary"
                      :counter="10"
                      label="Contraseña"
                      required
                      prepend-icon="mdi-lock-outline"
                        class="mt-10"
                    ></v-text-field>
                 
                     <!-- componente snackbar para mostrar mensaje de eliminación -->
              <!--       <v-snackbar v-model="snackbar" color="success"> {{textsnack}}
                        <template v-slot:action="{attrs}">
                            <v-btn text v-bind="attrs" @click="snackbar = false">Usuario Incorrecto</v-btn>
                        </template>
                    </v-snackbar> -->


               <!--  :timeout="-1" -->

                 

                     <!--<v-text-field
                      v-model="email"
                      :rules="emailRules"
                       
                      label="E-mail"
                      required
                       prepend-icon="mdi-email-outline"
                    ></v-text-field> -->
                  
                   </v-row>
                     <v-card-actions>
              <v-btn 
               large
               color=""
               depressed
               class="v-btn--text success--text"
               rounded 
               type="submit"
               >Accede
                </v-btn>    
            </v-card-actions>
              </v-container>
             </form>

      </v-card-text>
   </base-material-card>
  </v-slide-y-transition>
  </v-row>
  <v-row justify="center">
    <v-col class="">
      <v-card class>  
    <v-snackbar
                      v-model="snackbar"
                      :timeout="1500"
                      :value="false"
                      color="red"
                    absolute
                      shaped
                      rounded="pill"
                 
                     >
                      Comprueba ususario y contraseña
                  </v-snackbar>
                  </v-card>  
                  </v-col>
                    </v-row>
   </v-container>
</template>

<script>
import axios from 'axios';
  export default {
    name: 'PagesLogin',
     components: {
      PagesBtn: () => import('./components/Btn')
    },
     mounted(){
        this.dialog = true;
        this.snackbar = false
     },
    data: () => ({
      valid: false,
      snackbar: false,
      respuesta:'',
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
    methods: {
         login(){
          /* const form = document.getElementById('inicioSesion')
            axios.post('http://localhost/apirest/login.php', new FormData(form)) */
            /* axios.post('http://localhost/apirest/login.php?id='+this.firstname+'&descripcion='+this.articulo.descripcion+'&precio='+this.articulo.precio+'&stock='+this.articulo.stock) */
           const formData = new FormData();
           formData.append('usuario',this.firstname);
           formData.append('password',this.lastname);
         axios.post('http://localhost/apirest/login.php', formData)
         //  axios.post('http://extranet.vipmixer.es/apirest/login.php',formData)
          .then(r => {
                this.respuesta = r.data;
             console.log(this.respuesta);
                if (r.data.res=='success'){
               localStorage.setItem('token', JSON.stringify(r.data))
                //  JSON.parse(localStorage.getItem('token'))['token']
                //  this.$localStorage.set('token',JSON.stringify(res.data.token))
              // console.log(localStorage)
                  this.$router.push('/')
                }
                
                else{
                //  console.log('now');
                 //  alert('No existe Usuario')
                  this.snackbar = true;
                 // showAlert('error');
                  this.firstname='';
                  this.lastname= ''

                }
               
            })
            .catch(function(error){
                // 
                console.log(error);
            })

        },
    },
     created(){
   //const token = JSON.parse(this.$localStorage.get('token'))
//localStorage.removeItem('token');
    const token = localStorage.getItem('token')
    if (token){
       this.$router.push('/')
     //alert(token)
     }

  }
  }
</script>