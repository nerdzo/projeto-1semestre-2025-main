    // Pesquisar
    const INPUT_BUSCA = document.getElementById('input-busca');
    const TABELA_CLIENTES = document.getElementById('tabela-clientes');

    INPUT_BUSCA.addEventListener('keyup', () => {
        let expressao = INPUT_BUSCA.value.toLowerCase();

        let linhas = TABELA_CLIENTES.getElementsByTagName('tr');

        let algumResultado = false;

        console.log(linhas);
        for (let posicao in linhas) {
            if(true === isNaN(posicao)) {
                continue;
            }

            let linha = linhas[posicao];

            if (
                linha.classList.contains('linha-modelo') ||
                linha.classList.contains('mensagem-vazia')
            ) {
                continue;
            }

            let conteudoDaLinha = linhas[posicao].innerText.toLowerCase();

            if (true === conteudoDaLinha.includes(expressao)) {
                linhas[posicao].style.display = '';
                algumResultado = true;
            } else {
                linhas[posicao].style.display = 'none';
            }
        }

        const mensagem = document.querySelector('.mensagem-vazia');
        if (mensagem) {
            mensagem.style.display = algumResultado ? 'none' : '';
        }

    });