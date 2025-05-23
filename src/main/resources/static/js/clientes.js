const apiUrl = 'http://localhost:8080/api/clientes'; // Substitua pela URL real da sua API
const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
};

let clienteSelecionado = null;
// Listar Clientes
function carregarClientes() {
    fetch(`${apiUrl}/listarClientes`, {
        method: 'GET',
        headers: headers
    })
    .then(response => {
        if (!response.ok) {
            alert('Erro ao conectar com a API: ' + response.statusText);
            throw new Error('Erro na rede');
        }
        return response.json();
    })
    .then(data => {
        const tbody = document.querySelector('#tabelaClientes tbody');
        tbody.innerHTML = '';
        data.forEach(cliente => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><input type="checkbox" class="selecionar-cliente" data-codigo="${cliente.codigo}"></td>
                <td>${cliente.codigo}</td>
                <td>${cliente.loja}</td>
                <td>${cliente.razao}</td>
                <td>${cliente.tipo}</td>
                <td>${cliente.nomefantasia}</td>
                <td>${cliente.finalidade}</td>
                <td>${cliente.cnpj}</td>
                <td>${cliente.cep}</td>
                <td>${cliente.pais}</td>
                <td>${cliente.estado}</td>
                <td>${cliente.codmunicipio}</td>
                <td>${cliente.cidade}</td>
                <td>${cliente.endereco}</td>
                <td>${cliente.bairro}</td>
                <td>${cliente.ddd}</td>
                <td>${cliente.telefone}</td>
                <td>${cliente.abertura}</td>
                <td>${cliente.contato}</td>
                <td>${cliente.email}</td>
                <td>${cliente.homepage}</td>
            `;
            tbody.appendChild(row);
        });

        ativarCheckboxes();

    })
    .catch(error => console.error('Erro:', error));
}

window.onload = carregarClientes;

        // Controla checkboxes para seleção única
        function ativarCheckboxes() {
            const excluirBtn = document.getElementById("excluirSelecionado");
            const checkboxes = document.querySelectorAll(".selecionar-cliente");

            checkboxes.forEach((cb) => {
                cb.addEventListener("change", function () {
                    if (this.checked) {
                        checkboxes.forEach((otherCb) => {
                            if (otherCb !== this) otherCb.checked = false;
                        });
                        clienteSelecionado = this.getAttribute("data-codigo");
                        excluirBtn.disabled = false;
                    } else {
                        clienteSelecionado = null;
                        excluirBtn.disabled = true;
                    }
                });
            });
        }

// Buscar Cliente
document.getElementById('buscarCliente').addEventListener('click', function () {
const codigo = document.getElementById('codigoBusca').value;

if (!codigo) {
alert("Digite um código para buscar.");
return;
}

fetch(`${apiUrl}/buscarCliente/${codigo}`, {
method: 'GET',
headers: headers
})
.then(response => {
    if (!response.ok) {
        alert('Cliente não encontrado!');
        throw new Error('Cliente não encontrado');
    }
    return response.json();
})
.then(cliente => {
    const clientesDiv = document.getElementById('clientes');
    clientesDiv.innerHTML = ''; // limpa resultados anteriores

    const clienteItem = document.createElement('div');
    clienteItem.className = 'list-group-item list-group-item-action';
    clienteItem.innerHTML = `
        <strong>Código:</strong> ${cliente.codigo}<br>
        <strong>Loja:</strong> ${cliente.loja}<br>
        <strong>Razão Social:</strong> ${cliente.razao}<br>
        <strong>Tipo:</strong> ${cliente.tipo}<br>
        <strong>Nome Fantasia:</strong> ${cliente.nomefantasia}<br>
        <strong>Finalidade:</strong> ${cliente.finalidade}<br>
        <strong>CNPJ:</strong> ${cliente.cnpj}<br>
        <strong>CEP:</strong> ${cliente.cep}<br>
        <strong>País:</strong> ${cliente.pais}<br>
        <strong>Estado:</strong> ${cliente.estado}<br>
        <strong>Código Município:</strong> ${cliente.codmunicipio}<br>
        <strong>Cidade:</strong> ${cliente.cidade}<br>
        <strong>Endereço:</strong> ${cliente.endereco}<br>
        <strong>Bairro:</strong> ${cliente.bairro}<br>
        <strong>DDD:</strong> ${cliente.ddd}<br>
        <strong>Telefone:</strong> ${cliente.telefone}<br>
        <strong>Abertura:</strong> ${cliente.abertura}<br>
        <strong>Contato:</strong> ${cliente.contato}<br>
        <strong>Email:</strong> ${cliente.email}<br>
        <strong>Homepage:</strong> ${cliente.homepage}<br>
    `;
    clientesDiv.appendChild(clienteItem);

    alert('Cliente buscado com sucesso!');
})
.catch(error => {
    console.error('Erro:', error);
    document.getElementById('clientes').innerHTML = '';
});
});

//Excluir Cliente
        document
            .getElementById("excluirSelecionado")
            .addEventListener("click", function () {
                if (!clienteSelecionado) {
                    alert("Nenhum cliente selecionado.");
                    return;
                }

                const confirmacao = confirm(
                    `Você tem certeza que deseja excluir o cliente ${clienteSelecionado}?`
                );
                if (!confirmacao) return;

                fetch(`${apiUrl}/deletarCliente/${clienteSelecionado}`, {
                    method: "DELETE",
                    headers: headers,
                })
                    .then((response) => {
                        if (!response.ok) {
                            alert("Cliente não encontrado!");
                            throw new Error("Cliente não encontrado");
                        }
                        return response.text();
                    })
                    .then((mensagem) => {
                        alert(mensagem);
                        clienteSelecionado = null;
                        this.disabled = true;
                        carregarClientes();
                    })
                    .catch((error) => console.error("Erro:", error));
            });

/*
document.getElementById('excluirCliente').addEventListener('click', function () {
const codigo = document.getElementById('codigoExcluir').value;

if (!codigo) {
alert("Digite um código para excluir.");
return;
}

// Confirmação antes de excluir
const confirmacao = confirm("Você tem certeza que deseja excluir este cliente?");
if (!confirmacao) {
return; // Se o usuário clicar em Cancelar, a ação não é executada
}

fetch(`${apiUrl}/deletarCliente/${codigo}`, {
method: 'DELETE',
headers: headers
})
.then(response => {
    if (!response.ok) {
        alert('Cliente não encontrado!');
        throw new Error('Cliente não encontrado');
    }
    return response.text();
})
.then(mensagem => {
    alert(mensagem);
    document.getElementById('clientes').innerHTML = '';
})
.catch(error => console.error('Erro:', error));
});
*/

//Atualizar Cliente