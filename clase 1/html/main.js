function calcularPrecio() {
    const tipoSeguro = document.getElementById('tipoSeguro').value;
    let precio;

    switch (tipoSeguro) {
      case 'basico':
        precio = 500;
        break;
      case 'intermedio':
        precio = 1000;
        break;
      case 'premium':
        precio = 1500;
        break;
      default:
        precio = 0;
    }

    alert(`El precio del seguro ${tipoSeguro.charAt(0).toUpperCase() + tipoSeguro.slice(1)} es: $${precio}`);
  }