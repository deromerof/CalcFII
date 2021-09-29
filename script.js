function resultadoFormula() {
  var valorCompraElemento = document.getElementById("valorCompra");
  var valorCompra = valorCompraElemento.value;

  var valorDivElemento = document.getElementById("valorDiv");
  var valorDiv = valorDivElemento.value;

  var valorInvestido = (valorCompra * valorCompra) / valorDiv;
  var valorInvestido = valorInvestido.toFixed(2);

  console.log(valorInvestido);

  var valorCota = valorInvestido / valorCompra;
  var valorCota = valorCota.toFixed();

  console.log(valorCota);

  var elementoResultado = document.getElementById("resultado");
  var resultado = "O valor a investir em Reais (R$) é: " + valorInvestido;
  elementoResultado.innerHTML = resultado;

  var elementoCota = document.getElementById("valorCota");
  var valorCota = "A quantidade de cotas necessárias é: " + valorCota;
  elementoCota.innerHTML = valorCota;
}