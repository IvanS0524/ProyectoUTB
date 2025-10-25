window.addEventListener('beforeunload', function (e) {
    e.preventDefault();
    e.returnValue = ''; // Esto activa la alerta genérica del navegador
});
