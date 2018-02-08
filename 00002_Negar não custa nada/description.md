Não parece uma ideia muito interessante, mas pode servir para reutilizar a lógica de uma função que já temos definida.

Por exemplo, se temos uma função `ePar`, basta com negar para saber se um número é ímpar.

``` javascript
function eImpar(numero) {
  return !ePar(numero);
}
```

> Agora é a sua vez! Defina `eMaiorDeIdade` e, logo depois, `eMenorDeIdade` a partir dela.