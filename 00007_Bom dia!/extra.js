const mariaDeLosRemedios = {
  nome: "María De Los Remedios"
};

const pedroTernera = {
  nome: "Pedro Ternera"
};

const sofiaMontiel = {
  nome: "Sofía Montiel"
};

const arturoDeLaPiedad = {
  nome: "Arturo De La Piedad"
};

const pilarTernera = {
  nome: "Pilar Ternera",
  madre: mariaDeLosRemedios,
  padre: pedroTernera
};

const ursulaIguaran = {
  nome: "Úrsula Iguarán"
};

const joseArcadioPadre = {
  nome: "José Arcadio"
};

const joseArcadio = {
  nome: "José Arcadio",
  mae: ursulaIguaran,
  pai: joseArcadioPadre
};

const coronelAureliano = {
  nome: "Coronel Aureliano",
  mae: ursulaIguaran,
  pai: joseArcadioPadre
};

const sofiaDeLaPiedad = {
  nome: "Sofía De La Piedad",
  mae: sofiaMontiel,
  pai: arturoDeLaPiedad
};

const arcadio = {
  nome: "Arcadio",
  mae: pilarTernera,
  pai: joseArcadio
};

const aurelianoJose = {
  nome: "Arcadio",
  mae: pilarTernera,
  pai: coronelAureliano
};

const aurelianoSegundo = {
  nome: "Aureliano Segundo",
  mae: sofiaDeLaPiedad,
  pai: arcadio
};

const remedios = {
  nome: "Remedios",
  mae: sofiaDeLaPiedad,
  pai: arcadio
};

function maeDe(pessoa) {
  return pessoa.mae.nome;
};

function paiDe(pessoa) {
  return pessoa.pai.nome;
};