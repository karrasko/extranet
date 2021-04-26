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
                  
                     <v-card-actions class="justify-center">
              <v-btn 
               large
               color=""
               depressed
               class="v-btn--text success--text"
               rounded 
               type="submit"
               >Accede
                </v-btn>    
            <!-- <v-btn @click="showAlert">hello</v-btn>    -->
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
                   Credenciales incorrectas
                  </v-snackbar>
                  </v-card>  
               <!--      <v-card class>  
    <v-snackbar
                      v-model="snackbar2"
                      :timeout="1500"
                      :value="false"
                      color="red"
                      absolute
                      shaped
                      rounded="pill"
                 
                     >
                 hola
                  </v-snackbar>
                  </v-card>   -->
                  </v-col>
                    </v-row>
   </v-container>
</template>

<script>
import axios from 'axios';
//import Swal from 'sweetalert2';
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
      //snackbar2: false,
     // Object1:'',
      respuesta:'',
      firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'Falta el texto',
        v => v.length <= 10 || 'Como máximo 10 caracterres',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
    methods: {


      showAlert()

      {
        this.$swal('hello');
      },
         login(){
          /* const form = document.getElementById('inicioSesion')
            axios.post('http://localhost/apirest/login.php', new FormData(form)) */
            /* axios.post('http://localhost/apirest/login.php?id='+this.firstname+'&descripcion='+this.articulo.descripcion+'&precio='+this.articulo.precio+'&stock='+this.articulo.stock) */
           const formData = new FormData();
           formData.append('usuario',this.firstname);
           formData.append('password',this.lastname);
            axios.post('http://localhost:88/login.php', formData)
       //  axios.post('http://localhost/apirest/login.php', formData)
         // axios.post('http://extranet.vipmixer.es/apirest/login.php',formData)
          .then(r => {
                this.respuesta = r.data;
             console.log(this.respuesta);
                if (r.data.res=='success'){
               localStorage.setItem('token',JSON.stringify(r.data))
                let retrievedObject = localStorage.getItem('token');
    
 //   console.log('retrievedObject: ', JSON.parse(retrievedObject));
    let Object1 = JSON.parse(retrievedObject);
  // this.snackbar2 = true;
    //console.log(Object1.usuario);
  //   this.$swal(`
  //  Hola ${Object1.usuario}
  // `.trim())
    this.$swal.fire({
  position: 'top-end',
  icon: 'success',
  title: (`
   Hola ${Object1.usuario}
  `.trim()),
  showConfirmButton: false,
  timer: 2500
})
                //  JSON.parse(localStorage.getItem('token'))['token']
                //  this.$localStorage.set('token',JSON.stringify(res.data.token))
          //   console.log(localStorage)
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
   const token = JSON.parse(localStorage.getItem('token'))
 //localStorage.removeItem('token');
    console.log(token)
    //const usuario = localStorage.getItem('usuario')
   // const token = localStorage.getItem('token')
    
    if (token){
       this.$router.push('/')
     //alert(token)
     }
    }
  }
</script>