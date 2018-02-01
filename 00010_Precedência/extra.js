function parcelas(cartao) {
  switch(cartao) {
    case "visa":
      return 6;
    case "mastercard":
      return 2;
    default:
      return 1;
  }
}

function pagaComCartao(seCobramInteresses, cartao, dinheiroDisponivel) {
  return !seCobramInteresses && parcelas(cartao) >= 3 || dinheiroDisponivel < 100;
}