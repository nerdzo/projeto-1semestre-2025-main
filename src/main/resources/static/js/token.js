const token = localStorage.getItem('jwt');
if (!token) {
    // Se não tiver token, redireciona para a tela de login
    window.location.href = 'login.html';
}
else {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp * 1000;

    if (Date.now() > exp) {
        alert('Sua sessão expirou. Faça login novamente.');
        localStorage.removeItem('jwt');
        window.location.href = 'login.html';
    } else {
        const checkExpiration = setInterval(() => {
            if (Date.now() > exp) {
                alert('Sua sessão expirou. Você será redirecionado para o login.');
                localStorage.removeItem('jwt');
                window.location.href = 'login.html';
                clearInterval(checkExpiration);
            }
        }, 5000); // Verifica a expiração cada 5 segundos
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const desconectarBtn = document.getElementById('desconectarBtn');
    if (desconectarBtn) {
        desconectarBtn.addEventListener('click', () => {
            localStorage.removeItem('jwt');
            alert('Você foi desconectado.');
            window.location.href = 'login.html';
        });
    }
});