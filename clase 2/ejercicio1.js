function suma (a,b,callback){
    let c = a +b;
    callback();
}
//El tercer parámetro callback es una función que se pasa como argumento a la función suma. 
//Acá el callback espera que sea una función que se ejecutará después de que se realice la suma de a y b.

//Esto se conoce como "callback". 
//En JavaScript, las funciones son de primera clase, y pueden pasarse como argumentos a otras funciones. 
//El callback se utiliza para realizar alguna acción después de que se complete la operación principal de la función (suma).

//Ejemplo

function verMensaje() {
    console.log("La suma se ha completado.");
  }
  
  suma(2, 3, verMensaje);