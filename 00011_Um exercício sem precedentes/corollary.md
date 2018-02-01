E se delegamos? Poderíamos separar a lógica da seguinte maneira:

``` javascript
function podeSeAposentar(idade, sexo, anosContribuicoes) { 
  return atendeIdadeMinima(idade, sexo) && 
  temSuficientesContribuicoes (anosContribuicoes);
}
```

**Ao delegar corretamente**, há momentos em que não é necessário alterar a ordem de precedência, outro ponto a favor da delegação! :muscle:
