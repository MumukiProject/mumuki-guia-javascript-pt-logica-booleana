it("uma mulher de 62 anos com 40 anos de contribuições pode se aposentar", function() {
  assert.equal(podeSeAposentar(62, 'F', 40), true);
})

it("uma mulher de 63 anos com 25 anos de contribuições não pode se aposentar", function() {
  assert.equal(podeSeAposentar(63, 'F', 25), false);
})

it("uma mulher de 58 anos com 35 anos de contribuições não pode se aposentar", function() {
  assert.equal(podeSeAposentar(58, 'F', 35), false);
})

it("uma mulher de 69 anos com 40 anos de contribuições pode se aposentar", function() {
  assert.equal(podeSeAposentar(69, 'F', 40), true);
})

it("um homem de 66 anos com 40 anos de contribuições pode se aposentar", function() {
  assert.equal(podeSeAposentar(66, 'M', 40), true);
})

it("um homem de 63 anos com 35 anos de contribuições não pode se aposentar", function() {
  assert.equal(podeSeAposentar(63, 'M', 35), false);
})

it("um homem de 68 anos com 26 anos de contribuições não pode se aposentar", function() {
  assert.equal(podeSeAposentar(68, 'M', 26), false);
})

it("um homem de 58 anos com 35 anos de contribuições não pode se aposentar", function() {
  assert.equal(podeSeAposentar(58, 'M', 35), false);
})