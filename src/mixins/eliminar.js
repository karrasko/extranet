import axios from 'axios'
import swal from 'sweetalert'
export default {
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
    }
}