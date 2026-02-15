function promedio(estudiante){
    let promedio = 0;
    promedio = (estudiante.notas1 + estudiante.nota2) /2
    console.log(promedio);
    return(promedio);
  
}
   let estudiante = {
       nombreCompleto: "Sebastian Sanchez",
       nota1: 3.0,
       nota2: 2.0

  }
  promedio(estudiante);

