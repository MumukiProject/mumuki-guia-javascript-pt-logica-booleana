it("se a cama estivesse em alta, ao executar brincarNoHospital, isso está baixo", function() {
  brincarNoHospital ();
  assert.equal(camaCima, false);
})

it("se a cama estivesse abaixada, ao executar brincarNoHospital, isso está para cima", function() {
  camaCima = false;
  brincarNoHospital();
  assert.equal(camaCima, true);
})

it("se a cama estivesse em alta, ao executar brincarNoHospital duas vezes, isso está para cima", function() {
  brincarNoHospital();
  brincarNoHospital();
  assert.equal(camaCima, true);
})