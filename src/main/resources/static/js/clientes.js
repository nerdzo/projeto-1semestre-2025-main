    const apiUrl = 'http://localhost:8080/api/clientes';
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
            const tbody = document.getElementById('tabela-clientes');
            tbody.innerHTML = `
            <tr class="linha-modelo" style="visibility: collapse;">
                ${'<td></td>'.repeat(21)}
            </tr>
            `;

            if (data.length === 0) {
                tbody.innerHTML += `
                    <tr class="mensagem-vazia text-muted">
                        <td colspan="21" class="text-left">Nenhum cliente cadastrado ainda.</td>
                    </tr>
                `;
                return;
            }

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
                    <td>${cliente.abertura}</td>
                    <td>${cliente.cep}</td>
                    <td>${cliente.endereco}</td>
                    <td>${cliente.bairro}</td>
                    <td>${cliente.cidade}</td>
                    <td>${cliente.estado}</td>
                    <td>${cliente.codmunicipio}</td>
                    <td>${cliente.pais}</td>
                    <td>${cliente.ddd}</td>
                    <td>${cliente.telefone}</td>
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
        const alterarBtn = document.getElementById("alterarSelecionado");
        const visualizarBtn = document.getElementById("visualizarSelecionado");
        const checkboxes = document.querySelectorAll(".selecionar-cliente");

        checkboxes.forEach((cb) => {
            cb.addEventListener("change", function () {
                if (this.checked) {
                    checkboxes.forEach((otherCb) => {
                        if (otherCb !== this) otherCb.checked = false;
                    });
                    clienteSelecionado = this.getAttribute("data-codigo");
                    excluirBtn.disabled = false;
                    alterarBtn.disabled = false;
                    visualizarBtn.disabled = false;
                    
                } else {
                    clienteSelecionado = null;
                    excluirBtn.disabled = true;
                    alterarBtn.disabled = true
                    visualizarBtn.disabled = true;
                }
            });
        });
    }

    // Excluir Cliente
    document.getElementById("excluirSelecionado").addEventListener("click", () => {
        if(!clienteSelecionado){
            alert("Nenhum cliente selecionado.");
            return;
        }
        $('#confirmarExcluirModal').modal('show');
     });
     
    document.getElementById("confirmarExcluirBtn").addEventListener("click", () => {
        if (!clienteSelecionado) {
            alert("Nenhum cliente selecionado.");
            $('#confirmarExcluirModal').modal('hide');
            return;
        }

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
            $('#confirmarExcluirModal').modal('hide');
        })
        .catch((error) => {
            console.error("Erro:", error);
            $('#confirmarExcluirModal').modal('hide');
        });
    });

    // Atualizar Cliente
    document.getElementById("alterarSelecionado").addEventListener("click", function () {
        if (!clienteSelecionado) {
            alert("Nenhum cliente selecionado.");
            return;
        } 
        localStorage.setItem('clienteCodigo', clienteSelecionado);
        window.location.href = 'alterar.html';
    })

    // Buscar Cliente
    document.getElementById('visualizarSelecionado').addEventListener('click', () => {
        if (!clienteSelecionado) {
            alert("Nenhum cliente selecionado para visualização.");
            return;
        }
    
        fetch(`${apiUrl}/buscarCliente/${clienteSelecionado}`, {
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
             $('#modalVisualizar').modal('show');
        })
        .catch(error => {
            alert("Erro ao carregar cliente.");
            console.error(error);
        });
    });