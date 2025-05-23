const apiUrl = 'http://localhost:8080/api/clientes'; // Substitua pela URL real da sua API
const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
};

let clienteTemp = null;

document.getElementById('formCliente').addEventListener('submit', function(event) {
  event.preventDefault();

  clienteTemp = {
    codigo: document.getElementById('codigo').value,
    loja: document.getElementById('loja').value,
    razao: document.getElementById('razao').value,
    tipo: document.getElementById('tipo').value,
    nomefantasia: document.getElementById('nomefantasia').value,
    finalidade: document.getElementById('finalidade').value,
    cnpj: document.getElementById('cnpj').value,
    cep: document.getElementById('cep').value,
    pais: document.getElementById('pais').value,
    estado: document.getElementById('estado').value,
    codmunicipio: document.getElementById('codmunicipio').value,
    cidade: document.getElementById('cidade').value,
    endereco: document.getElementById('endereco').value,
    bairro: document.getElementById('bairro').value,
    ddd: document.getElementById('ddd').value,
    telefone: document.getElementById('telefone').value,
    abertura: document.getElementById('abertura').value,
    contato: document.getElementById('contato').value,
    email: document.getElementById('email').value,
    homepage: document.getElementById('homepage').value
  };

  $('#confirmarSalvarModal').modal('show'); // Usa jQuery para exibir o modal
});

document.getElementById('confirmarSalvarBtn').addEventListener('click', function() {
  // Aqui você faz o POST usando clienteTemp
  fetch(`${apiUrl}/criarCliente`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(clienteTemp)
  })
  .then(response => {
    if (!response.ok) throw new Error("Erro ao salvar");
    return response.json();
  })
  .then(data => {
    $('#confirmarSalvarModal').modal('hide');
    alert("Cliente salvo com sucesso!");
    document.getElementById('formCliente').reset();
  })
  .catch(error => {
    $('#confirmarSalvarModal').modal('hide');
    alert("Erro ao salvar cliente.");
    console.error(error);
  });
});