it("alguém com idade de 20 anos é de idade legal", function() {
  assert.equal(eMaiorDeIdade(20), true);
})

it("alguém com idade de 18 anos é de idade legal", function() {
  assert.equal(eMaiorDeIdade(18), true);
})

it("alguém com idade de 17 anos não tem idade legal", function() {
  assert.equal(eMaiorDeIdade(17), false);
})

it("alguém com idade de 16 anos não tem idade legal", function() {
  assert.equal(eMaiorDeIdade(16), false);
})

it("alguém com 20 anos não é menor", function() {
  assert.equal(eMenorDeIdade(20), false);
})

it("alguém com 18 anos não é menor", function() {
  assert.equal(eMenorDeIdade(18), false);
})

it("alguém de 17 anos é menor", function() {
  assert.equal(eMenorDeIdade(17), true);
})

it("alguém de 16 anos é menor", function() {
  assert.equal(eMenorDeIdade(16), true);
})