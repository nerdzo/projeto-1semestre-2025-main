function mascaraCNPJ(v) {
    v = v.replace(/\D/g, "").slice(0, 14);
    v = v.replace(/^(\d{2})(\d)/, "$1.$2");
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
    v = v.replace(/(\d{4})(\d)/, "$1-$2");
    return v
}

function mascaraCEP(v) {
    v = v.replace(/\D/g, "").slice(0, 8);
    v = v.replace(/^(\d{5})(\d)/, "$1-$2");
    return v;
}

function mascaraTelefone(v) {
    v = v.replace(/\D/g, "").slice(0, 8);
    v = v.replace(/(\d{4})(\d)/, "$1-$2");
    return v;
}

function adicionarPatternCNPJ(input) {
    const cnpj = input.value;
    const regex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
    if (regex.test(cnpj)) {
      input.removeAttribute('pattern');
      input.removeAttribute('title');
    } else {
      input.setAttribute('pattern', '\\d{2}\\.\\d{3}\\.\\d{3}/\\d{4}-\\d{2}');
      input.setAttribute('title', 'CNPJ inválido. Exemplo: XX.XXX.XXX/XXXX-XX');
    }
  }

 function adicionarPatternCEP(input) {
    const cep = input.value;
    const regex = /^\d{5}-\d{3}$/;
    if (regex.test(cep)) {
      input.removeAttribute('pattern');
      input.removeAttribute('title');
    } else {
      input.setAttribute('pattern', '\\d{5}-\\d{3}');
      input.setAttribute('title', 'CEP inválido. Exemplo: XXXXX-XXX');
    }
  }

  function adicionarPatternPais(input) {
    const pais = input.value;
    const regex = /^\d{3}$/;
    if (regex.test(pais)) {
      input.removeAttribute('pattern');
      input.removeAttribute('title');
    } else {
      input.setAttribute('pattern', '\\d{3}');
      input.setAttribute('title', 'Código do país inválido. Exemplo: XXX');
    }
  }

  function adicionarPatternDDD(input) {
    const ddd = input.value;
    const regex = /^\d{3}$/;
    if (regex.test(ddd)) {
      input.removeAttribute('pattern');
      input.removeAttribute('title');
    } else {
      input.setAttribute('pattern', '\\d{3}');
      input.setAttribute('title', 'DDD inválido. Exemplo: XXX');
    }
  }

  function adicionarPatternCodMunicipio(input) {
    const codMunicipio = input.value;
    const regex = /^\d{7}$/;
    if (regex.test(codMunicipio)) {
      input.removeAttribute('pattern');
      input.removeAttribute('title');
    } else {
      input.setAttribute('pattern', '\\d{7}');
      input.setAttribute('title', 'Código do Município inválido. Exemplo: XXXXXXX');
    }
  }

 function adicionarPatternTelefone(input) {
    const telefone = input.value;
    const regex = /^\d{4}-\d{4}$/;
    if (regex.test(telefone)) {
      input.removeAttribute('pattern');
      input.removeAttribute('title');
    } else {
      input.setAttribute('pattern', '\\d{4}-\\d{4}');
      input.setAttribute('title', 'Telefone inválido. Exemplo: XXXX-XXXX');
    }
  }