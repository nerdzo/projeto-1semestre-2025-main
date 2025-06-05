    // Fechar
    let isFormEdited = false;

    document.getElementById('formCliente').addEventListener('input', () => {
        isFormEdited = true;
    });

    window.addEventListener('beforeunload', function (e) {
        if (isFormEdited) {
            e.preventDefault();
            e.returnValue = '';
            return '';
        }
    });

    document.getElementById('btnFechar').addEventListener('click', () => {
        if (isFormEdited) {
            $('#confirmarFecharModal').modal('show');
        } else {
            window.location.href = 'index.html';
        }
    });

    document.getElementById('confirmarFecharBtn').addEventListener('click', () => {
        isFormEdited = false;
        window.location.href = 'index.html';
    });