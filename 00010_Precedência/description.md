Quando uma expressão matemática tem vários operadores, sabemos que as multiplicações e divisões serão feitas antes da adição e subtração:

``` javascript
5 * 3 + 8 / 4 - 3 = 14
```

Como em matemática, quando usamos operadores lógicos, as expressões são avaliadas numa ordem determinada chamada de _precedência_.

Qual é essa ordem? Vamos fazer o teste!

Tendo definido a função:

``` javascript
function pagaComCartao(seCobramInteresses, cartao, dinheiroDisponivel) {
  return !seCobramInteresses && parcelas(cartao) >= 3 || dinheiroDisponivel < 100;
}
```

> Teste no console com os valores:

>* `ム pagaComCartao(true, "visa", 320)`
>* `ム pagaComCartao(false, "visa", 80)`
>* `ム pagaComCartao(true, "mastercard", 215)`
>* `ム pagaComCartao(true, "mastercard", 32)`