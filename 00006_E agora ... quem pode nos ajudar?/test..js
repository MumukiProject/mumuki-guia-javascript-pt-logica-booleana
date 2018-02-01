it("um feriado de segunda-feira às 2 da tarde, o banco está fechado", function() {
  assert.equal(estaFechado(true, "segunda-feira", 14), true);
})

it("No feriado de quarta-feira às 8 horas da noite, o banco está fechado", function() {
  assert.equal(estaFechado(true, "quarta-feira", 20), true);
})

it("Na quinta-feira atual, às 13 horas, o banco não está fechado.", function() {
  assert.equal(estaFechado(false, "quinta-feira", 13), false);
})

it("um sábado ordinário às 11h, o banco está fechado", function() {
  assert.equal(estaFechado(false, "sabado", 11), true);
})

it("um domingo ordinário às 19h, o banco está fechado", function() {
  assert.equal(estaFechado(false, "domingo", 19), true);
})

it("uma terça-feira ordinária às 16h, o banco está fechado", function() {
  assert.equal(estaFechado(false, "terça-feira", 16), true);
})