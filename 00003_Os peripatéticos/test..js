it("um filósofo grego que caminha 5kms por dia é um peripatético", function() {
  assert.equal((ePeripatetico("filosofo", "grego", 5) || ePeripatetico("filósofo", "grego", 5)), true);
})

it("Um filósofo grego que caminha 2kms por dia não é um peripatético", function() {
  assert.equal((ePeripatetico("filosofo", "grego", 2) || ePeripatetico("filósofo", "grego", 2)), false);
})

it("um filósofo argentino que caminha 5kms por dia não é um peripatético", function() {
  assert.equal(ePeripatetico("filosofo", "argentino", 5), false);
})

it("um atleta grego que caminha 10kms por dia não é um peripatético", function() {
  assert.equal(ePeripatetico("atleta", "griego", 10), false);
})

it("uma professora colombiana que caminha 1km por dia não é uma peripatética", function() {
  assert.equal(ePeripatetico("profesor", "colombiano", 1), false);
})