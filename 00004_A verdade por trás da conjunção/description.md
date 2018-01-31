Na lógica booleana, você pode definir o comportamento de um operador com uma _tabela de verdade_ onde **A** e **B** são as expressões ou valores da verdade a serem operados e o símbolo **^** representa a conjunção.

<table class="table table-striped table-bordered table-condensed text-center">
  <tr>
    <th class ="text-center" style="width: 75px">A</th>
    <th class ="text-center" style="width: 75px">B</th>
    <th class ="text-center" style="width: 100px">A ^ B</th>
  </tr>
  <tr>
    <td>V</td>
    <td>V</td>
    <td>V</td>
  </tr>
  <tr>
    <td>V</td>
    <td>F</td>
    <td>F</td>
  </tr>
  <tr>
    <td>F</td>
    <td>V</td>
    <td>F</td>
  </tr>
  <tr>
    <td>F</td>
    <td>F</td>
    <td>F</td>
  </tr>
</table>

No mundo da lógica, essas expressões são chamadas _proposições_. Mas... que coisas podem ser uma proposição? :thought_balloon: Eles só precisam ter um valor de verdade, ou seja, qualquer expressão booleana pode ser uma proposição.

> Você acredita em nós? Teste no console a função `ePeripatetico` com os seguintes valores e verifique se ele se comporta como na tabela:

> * `ム ePeripatetico("filosofo", "grego", 5)`
> * `ム ePeripatetico("atleta", "brasileiro", 10)`
> * `ム ePeripatetico("filosofo", "brasileiro", 3)`
> * `ム ePeripatetico("professor", "canadense", 1)`

