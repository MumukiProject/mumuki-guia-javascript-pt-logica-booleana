Agora, vamos pensar como seria a tabela de verdade que representa o comportamento da função que você acabou de fazer.

As proposições serão `elesTemAMesmaMae` e `elesTemOMesmoPai`, e os valores de verdade que elas tenham dependerão de quais duas pessoas estejam avaliando.

O booleano final resultará de operá-las mediante de `meioIrmaos`:

<table class="table table-striped table-bordered table-condensed text-center">
  <tr>
    <th class ="text-center" style="padding: 5px 8px">eles têm a mesma mãe</th>
    <th class ="text-center" style="padding: 5px 8px">Eles têm o mesmo pai</th>
    <th class ="text-center" style="padding: 5px 8px">São meio-irmãos</th>
  </tr>
  <tr>
    <td>true</td>
    <td>true</td>
    <td>false</td>
  </tr>
  <tr>
    <td>true</td>
    <td>false</td>
    <td>true</td>
  </tr>
  <tr>
    <td>false</td>
    <td>true</td>
    <td>true</td>
  </tr>
  <tr>
    <td>false</td>
    <td>false</td>
    <td>false</td>
  </tr>
</table>

> Experimente a sua função `meioIrmaos` com os seguintes valores e verifique se ela se comporta como a tabela:

>* `ム meioIrmaos(arcadio, aurelianoJose)`
>* `ム meioIrmaos(aurelianoSegundo, remedios)`
>* `ム meioIrmaos(aurelianoJose, remedios)`
