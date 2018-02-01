it("a disjunção lógica exclusiva entre true e true dá false", function() {
  assert.equal(xor(true, true), false);
})

it("a disjunção lógica exclusiva entre true e false dá true", function() {
  assert.equal(xor(true, false), true);
})

it("a disjunção lógica exclusiva entre false e true dá true", function() {
  assert.equal(xor(false, true), true);
})

it("a disjunção lógica exclusiva entre false e false dá false", function() {
  assert.equal(xor(false, false), false);
})