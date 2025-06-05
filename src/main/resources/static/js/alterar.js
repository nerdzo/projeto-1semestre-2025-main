    const apiUrl = 'http://localhost:8080/api/clientes';
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    };

    const codigo = localStorage.getItem('clienteCodigo');

    // Buscar Cliente
    window.addEventListener('DOMContentLoaded', () => {
        if (!codigo) {
            alert("Nenhum cliente selecionado para edição.");
            return;
        }

        fetch(`${apiUrl}/buscarCliente/${codigo}`, {
            method: 'GET',
            headers: headers
        })
        .then(response => {
            if (!response.ok) throw new Error('Cliente não encontrado');
            return response.json();
        })
        .then(cliente => {
            document.getElementById('codigo').value = cliente.codigo;
            document.getElementById('loja').value = cliente.loja;
            document.getElementById('razao').value = cliente.razao;
            document.getElementById('tipo').value = cliente.tipo;
            document.getElementById('nomefantasia').value = cliente.nomefantasia;
            document.getElementById('finalidade').value = cliente.finalidade;
            document.getElementById('cnpj').value = cliente.cnpj;
            document.getElementById('abertura').value = cliente.abertura;
            document.getElementById('cep').value = cliente.cep;
            document.getElementById('endereco').value = cliente.endereco;
            document.getElementById('bairro').value = cliente.bairro;
            document.getElementById('cidade').value = cliente.cidade;
            document.getElementById('estado').value = cliente.estado;
            document.getElementById('codmunicipio').value = cliente.codmunicipio;
            document.getElementById('pais').value = cliente.pais;
            document.getElementById('ddd').value = cliente.ddd;
            document.getElementById('telefone').value = cliente.telefone;
            document.getElementById('contato').value = cliente.contato;
            document.getElementById('email').value = cliente.email;
            document.getElementById('homepage').value = cliente.homepage;
        })
        .catch(error => {
            alert("Erro ao carregar cliente.");
            console.error(error);
        });
    });

    // Atualizar Cliente
    let clienteTemp = null;

    document.getElementById('formCliente').addEventListener('submit', function (event) {
        event.preventDefault();

        if (!isFormEdited) {
            alert('Nenhuma alteração feita para salvar.');
            return;
        }

        clienteTemp = {
            codigo: document.getElementById('codigo').value,
            loja: document.getElementById('loja').value,
            razao: document.getElementById('razao').value,
            tipo: document.getElementById('tipo').value,
            nomefantasia: document.getElementById('nomefantasia').value,
            finalidade: document.getElementById('finalidade').value,
            cnpj: document.getElementById('cnpj').value,
            abertura: document.getElementById('abertura').value,
            cep: document.getElementById('cep').value,
            endereco: document.getElementById('endereco').value,
            bairro: document.getElementById('bairro').value,
            cidade: document.getElementById('cidade').value,
            estado: document.getElementById('estado').value,
            codmunicipio: document.getElementById('codmunicipio').value,
            pais: document.getElementById('pais').value,
            ddd: document.getElementById('ddd').value,
            telefone: document.getElementById('telefone').value,
            contato: document.getElementById('contato').value,
            email: document.getElementById('email').value,
            homepage: document.getElementById('homepage').value
        };

        $('#confirmarAlterarModal').modal('show');
    });

    document.getElementById('confirmarAlterarBtn').addEventListener('click', function () {
        const codigo = document.getElementById('codigo').value;
        if (!codigo) {
            alert("Código do cliente não encontrado.");
            return;
        }
        if (!clienteTemp) {
            alert("Erro: Nenhum dado do cliente encontrado para atualização.");
            return;
        }

        fetch(`${apiUrl}/atualizarCliente/${codigo}`, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(clienteTemp)
        })
        .then(response => {
            if (!response.ok) {
                return response.text().then(errorMessage => {
                throw new Error(`Erro ao alterar: ${errorMessage}`);
                });
            }
            return response.text();
        })
        .then(data => {
            $('#confirmarAlterarModal').modal('hide');
            alert("Cliente alterado com sucesso!");
            document.getElementById('formCliente').reset();
            localStorage.removeItem('clienteCodigo');
            isFormEdited = false;
            window.location.href = 'index.html';
        })
        .catch(error => {
            $('#confirmarAlterarModal').modal('hide');
            alert("Erro ao alterar cliente.");
            console.error(error);
        });
    });
