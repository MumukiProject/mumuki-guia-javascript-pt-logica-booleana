it("arcadio e aurelianoJose são meio-irmãos", function() {
  assert.equal(meioIrmaos(arcadio, aurelianoJose), true);
})

it("aurelianoSegundo e remedios não são meio-irmãos", function() {
  assert.equal(meioIrmaos(aurelianoSegundo, remedios), false);
})

it("aurelianoSegundo e aurelianoJose não são meio-irmãos", function() {
  assert.equal(meioIrmaos(aurelianoSegundo, aurelianoJose), false);
})

it("remedios e arcadio não são meio-irmãos", function() {
  assert.equal(meioIrmaos(remedios, arcadio), false);
})