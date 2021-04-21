




export default{
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