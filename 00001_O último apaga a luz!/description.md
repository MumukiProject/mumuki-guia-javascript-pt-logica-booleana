Vamos começar com algo simples, você se lembra do operador `!`? É chamado de _negação_, _not_ ou _complemento lógico_ e serve para **negar** um valor booleano.

Se eu tiver o booleano representado por `temFome` o complemento será `!temFome`.

E para que isto? :thought_balloon: Por exemplo, para modelar casos alternados.

``` javascript
let lampadaAcesa = true;
 
function apertarInterruptor() {
  lampadaAcesa = !lampadaAcesa;
}
```

> Defina o procedimento para `brincarNoHospital` para que os pacientes impacientes possam se divertir subindo e abaixando a cama.
