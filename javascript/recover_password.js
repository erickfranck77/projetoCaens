document.getElementById('recoverPasswordLink').addEventListener('click', function (e) {
    e.preventDefault(); // Impede o comportamento padrão do link

    const email = prompt("Por favor, insira seu e-mail para recuperação de senha:");

    if (email) {
        alert(`Um link de recuperação foi enviado para o e-mail: ${email}`);
        
        // Exemplo de envio para o servidor:
        // fetch('/api/recover-password', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ email })
        // }).then(response => {
        //     if (response.ok) {
        //         alert("E-mail enviado com sucesso!");
        //     } else {
        //         alert("Erro ao enviar o e-mail. Tente novamente.");
        //     }
        // });
    } else {
        alert("E-mail não inserido. Por favor, tente novamente.");
    }
});