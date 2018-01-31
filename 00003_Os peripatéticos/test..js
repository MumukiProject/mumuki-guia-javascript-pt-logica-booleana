it("um filósofo grego que caminha 5kms por dia é um peripatético", function() {
  assert.equal((esPeripatetico("filosofo", "griego", 5) || esPeripatetico("filósofo", "griego", 5)), true);
})

it("Um filósofo grego que caminha 2kms por dia não é um peripatético", function() {
  assert.equal((esPeripatetico("filosofo", "griego", 2) || esPeripatetico("filósofo", "griego", 2)), false);
})

it("um filósofo argentino que caminha 5kms por dia não é um peripatético", function() {
  assert.equal(esPeripatetico("filosofo", "argentino", 5), false);
})

it("um atleta grego que caminha 10kms por dia não é um peripatético", function() {
  assert.equal(esPeripatetico("atleta", "griego", 10), false);
})

it("uma professora colombiana que caminha 1km por dia não é uma peripatética", function() {
  assert.equal(esPeripatetico("profesor", "colombiano", 1), false);
})