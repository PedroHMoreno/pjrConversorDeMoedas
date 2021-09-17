function ConverterDolar() {
  var valorElemento = document.getElementById("valorDolar");
  var valorDolar = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valorDolar);

  // Convertendo
  var valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);

  var elementoValorConvertido1 = document.getElementById("valorConvertido1");
  var valorConvertido1 = "O resultado em REAL é R$ " + valorEmReal;
  elementoValorConvertido1.innerHTML = valorConvertido1;
}

function ConverterReal() {
  var valorElemento = document.getElementById("valorReal");
  var valorReal = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valorReal);

  // Convertendo
  var valorEmDolar = valorEmRealNumerico / 5;
  console.log(valorEmDolar);

  var elementoValorConvertido2 = document.getElementById("valorConvertido2");
  var valorConvertido2 = "O resultado em DOLAR é U$ " + valorEmDolar;
  elementoValorConvertido2.innerHTML = valorConvertido2;
}
