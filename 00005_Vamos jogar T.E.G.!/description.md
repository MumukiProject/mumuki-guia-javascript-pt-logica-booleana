E se é suficiente com que uma das várias condições se cumpra para afirmar que uma expressão é verdadeira? Podemos usar outro dos operadors que você já conhece, a disjunção lógica! :bulb:

Lembre-se de que é representado com o símbolo `||` e também é conhecido como o operador `or`.

No famoso jogo T.E.G., um jogador pode ganhar de duas maneiras: cumprindo seu objetivo secreto ou alcançando o objetivo geral de conquistar 30 países.

``` javascript
function ganhou(cumpriuObjetivoSecreto, quantidadeDePaisesConquistados) {
  return cumpriuObjetivoSecreto || quantidadeDePaisesConquistados >= 30;
}
```

> Experimente as seguintes expressões no console:

> * `ム ganhou(true, 25)`
> * `ム ganhou(false, 30)`
> * `ム ganhou(false, 20)`
> * `ム ganhou(true, 31)`

> Você se anima a construir a tabela de verdade de disjunção lógica?
