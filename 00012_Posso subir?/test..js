it("uma pessoa que mede 1.5m, não é acompanhada por um adulto e não tem condições cardíacas que possam entrar na atração", function() {
  assert.equal(podeSubir(1.5, false, false), true);
})

it("Uma pessoa que mede 1,7 m, não é acompanhada por um adulto e tem condições cardíacas que não podem obter a atração", function() {
  assert.equal(podeSubir(1.7, false, true), false);
})

it("uma pessoa que mede 1,2 m, é acompanhada por um adulto e não tem condições cardíacas que possam entrar na atração", function() {
  assert.equal(podeSubir(1.2, true, false), true);
})

it("uma pessoa que mede 1,2 m, não é acompanhada por um adulto e não tem condições cardíacas não pode entrar na atração", function() {
  assert.equal(podeSubir(1.2, false, false), false);
})

it("uma pessoa que mede 1.1m, é acompanhada por um adulto e não tem condições cardíacas não pode entrar na atração", function() {
  assert.equal(podeSubir(1.1, true, false), false);
})