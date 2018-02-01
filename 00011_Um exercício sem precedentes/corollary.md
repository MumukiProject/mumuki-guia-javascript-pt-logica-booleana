E se delegamos? Poderíamos separar a lógica da seguinte maneira:

``` javascript
function podeSeAposentar(edade, sexo, anosContribuicoes) { 
  return atendeEdadeMinima(edade, sexo) && 
  temSuficientesContribuicoes (anosContribuicoes);
}
```

**Ao delegar corretamente**, há momentos em que não é necessário alterar a ordem de precedência, outro ponto a favor da delegação! :muscle:
