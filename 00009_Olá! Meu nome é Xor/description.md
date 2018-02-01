Agora vamos mudar as funções `elesTemAMesmaMae`  e `elesTemOMesmoPai` por proposições genéricas **A** e **B**. Além disso, vamos representar a operação que faz `meioIrmaos` com o símbolo **⊻**. O que conseguimos é... uma nova tabela! :tada:

<table class="table table-striped table-bordered table-condensed text-center">
  <tr>
    <th class ="text-center" style="width: 75px">A</th>
    <th class ="text-center" style="width: 75px">B</th>
    <th class ="text-center" style="width: 100px">A ⊻ B</th>
  </tr>
  <tr>
    <td>V</td>
    <td>V</td>
    <td>F</td>
  </tr>
  <tr>
    <td>V</td>
    <td>F</td>
    <td>V</td>
  </tr>
  <tr>
    <td>F</td>
    <td>V</td>
    <td>V</td>
  </tr>
  <tr>
    <td>F</td>
    <td>F</td>
    <td>F</td>
  </tr>
</table>

Esse comportamento existe como um operador dentro da lógica e é chamado de `xor` ou _disjunção lógica exclusiva_.

À diferença do `and`, `or` e `not`, o `xor`, não esta geralmente definido em idiomas :cry:. No entanto, agora que você sabe como funciona, se você precisar, você pode defini-la à mão. :wink:

> Vamos ver se você vai entendendo: defina a função genérica `xor`, que pegue dois booleanos e devolva o valor de verdade correspondente.
