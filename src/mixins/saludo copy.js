

import swal from 'sweetalert'


export default{
saludar();
  methods:{
    eliminar(id){
        swal({
            title:'Seguro que deseas eliminar el post',
            text:'Al eliminarlo no podras recuperarlo',
            icon:'warning',
            buttons:true,
            dangerMode:true,
        })
        .then((aceptar)=>{
            if (aceptar) {
                axios.get('http://localhost/snippetWebpack/api/crud/eliminar.php?id=' + id )
                .then(res =>{
                 if (res.data == 'success') {
                     swal('post eliminado')
                     this.getCategoria()
                 }else{
                    swal('post no eliminado')
                 }
                })
            }else{
                return false
            }
        })
    }
},
      created(){
      //  var testObject = { 'one': 1, 'two': 2, 'three': 3 };

    
    // Put the object into storage
  //  localStorage.setItem('testObject', JSON.stringify(testObject));
    
    // Retrieve the object from storage
    let retrievedObject = localStorage.getItem('token');
    
 //   console.log('retrievedObject: ', JSON.parse(retrievedObject));
    let Object1 = JSON.parse(retrievedObject);
    console.log(Object1.usuario);
    alert(Object1.usuario);
    }
     
}