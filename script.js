let registros = [
  {nombre:"Carol", apellido:"Pizarro", id:1043028444, email:"carol@gmail.com",telefono:3005487964, f_nacimiento:"1999-03-02", ciudad:"Barranquilla", carrera:"Psicología"},
  {nombre:"Andrés", apellido:"Ahumada", id:104302411, email:"andres@gmail.com",telefono:3048793012, f_nacimiento:"2001-07-05", ciudad:"Sabanalarga", carrera:"Trabajo Social"},
  {nombre:"Rosa", apellido:"Cerpa", id:1043012064, email:"rosa@gmail.com",telefono:3005481717, f_nacimiento:"2001-06-19", ciudad:"Barranquilla", carrera:"Licenciatura"}
];

function validar(){
  let validado = true;
  let formulario = document.querySelectorAll('#formularioRegistro input');
  Array.from(formulario).forEach(input =>{
    if(input.value.length == 0){
      validado = false;
    }
  })
  return validado;
}

function getData(){

  const validado = validar();
  let idRegistrado = false;
  let nombre = document.getElementById('nombre').value,
  apellido = document.getElementById('apellido').value,
  id = document.getElementById('id').value,
  email = document.getElementById('email').value,
  telefono = document.getElementById('telefono').value,
  f_nacimiento = document.getElementById('fnacimiento').value,
  ciudad = document.getElementById('ciudad').value,
  carrera = document.getElementById('carrera').value;
  
  registros.forEach(usuario => id == usuario.id ? idRegistrado = true : false);
  if(idRegistrado){
    alert("El usuario ya existe")
  }else{
    if(validado){ 
      añadirRegistros(nombre, apellido, id, email, telefono, f_nacimiento, ciudad, carrera);
      limpiar()
      alert("Usuario añadido correctamente")
    }else{
    alert("Por favor llenar todos los campos")
    }
  }
    
}
document.querySelector('#btn_registrar').addEventListener('click',getData);


function añadirRegistros(nombre, apellido, id, email, telefono, f_nacimiento, ciudad, carrera){
  
  let nuevoRegistro = {
    nombre : nombre,
    apellido : apellido,
    id : id,
    email : email,
    telefono : telefono,
    f_nacimiento : f_nacimiento,
    ciudad : ciudad,
    carrera : carrera
  };
  registros.push(nuevoRegistro);
}

function limpiar(){
  let formulario = document.querySelectorAll('#formularioRegistro input');
  Array.from(formulario).forEach(input => input.value = "");
}

function imprimir (){
  let tbody = document.querySelector('#tablaRegistros tbody');
  let contenido = "";
  registros.forEach(usuario=>contenido+="<tr><td>"+usuario.nombre+"</td><td>"+usuario.apellido+"</td><td>"+usuario.id+"</td><td>"+usuario.email+"</td><td>"+usuario.telefono+"</td><td>"+usuario.f_nacimiento+"</td><td>"+usuario.ciudad+"</td><td>"+usuario.carrera+"</td></tr>")
  tbody.innerHTML = contenido;
}

document.querySelector('#btn_listar').addEventListener('click', imprimir)
 