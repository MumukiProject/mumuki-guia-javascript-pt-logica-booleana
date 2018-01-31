Outro dos operadores com o que você já se encontrou é a conjunção lógica (também chamada _and_), que só retorna verdadeiro quando as duas expressões que ela opera são verdadeiras.

Podemos encadear várias delas usando o operador `&&` e, se alguma for falsa, toda a expressão será falsa.

Por exemplo, se eu tiver a função:

``` javascript
function eCantorProlifico (cdsEditados, recitaisFeitos, gravouAlgumDVD) {
  return cdsEditados >= 10 && recitaisFeitos > 25 && gravouAlgumDVD;
}
```

É suficiente com que um cantor não tenha gravado um DVD para não ser considerado prolífico, mesmo que ele tenha editado mais de 10 CDs e tenha dado mais de 25 recitais.

> Defina uma função `ePeripatetico` que pegue a profissão de uma pessoa, sua nacionalidade e o quantidade de quilômetros que ele anda por dia. Alguém é peripatético quando é filósofo grego e gosta de caminhar (ele caminha mais de 2 quilômetros por dia). Exemplo:

> ``` javascript
> ム ePeripatetico("filósofo", "grego", 5)
> true
> ム ePeripatetico("professor", "uruguaio", 1)
false 
```

