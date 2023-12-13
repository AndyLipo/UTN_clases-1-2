function sumar() {
    realizarOperacion((a, b) => a + b);
  }

  function restar() {
    realizarOperacion((a, b) => a - b);
  }

  function multiplicar() {
    realizarOperacion((a, b) => a * b);
  }

  function dividir() {
    realizarOperacion((a, b) => a / b);
  }

  function realizarOperacion(operacion) {
    const operand1 = parseFloat(document.getElementById('operand1').value);
    const operand2 = parseFloat(document.getElementById('operand2').value);

    if (!isNaN(operand1) && !isNaN(operand2)) {
      const resultado = operacion(operand1, operand2);
      document.getElementById('resultado').value = resultado;
    } else {
      alert('Ingrese números válidos en ambos campos.');
    }
  }