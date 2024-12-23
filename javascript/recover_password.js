document.getElementById('recoverPasswordLink').addEventListener('click', function (e) {
    e.preventDefault(); // Impede o comportamento padrão do link

    const modal = document.createElement('div');
    modal.setAttribute('id', 'recoverPasswordModal');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = '#fff';
    modal.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    modal.style.padding = '20px';
    modal.style.borderRadius = '8px';
    modal.style.zIndex = '1000';


    modal.innerHTML = `
        <h2 style="text-align: center; color: #142912;">Recuperar Senha</h2>
        <div class="form-group">
            <label for="recoverEmail" style="display: block; font-weight: bold;">E-mail:</label>
            <input 
                type="email" 
                id="recoverEmail" 
                placeholder="matricula@ifba.edu.br" 
                style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 0.5em;"
                required
            >
            <span id="recoverEmailError" class="error" style="color: rgb(158, 0, 0); font-size: 12px; display: none;"></span>
        </div>
        <button id="sendRecoverEmail" 
            style="width: 100%; padding: 10px; background-color: #019c22; color: white; border: none; border-radius: 1em; cursor: pointer; font-size: 16px;">
            Enviar Link
        </button>
        <button id="closeRecoverModal" 
            style="width: 100%; padding: 10px; background-color: #ccc; color: black; border: none; border-radius: 1em; cursor: pointer; margin-top: 10px;">
            Cancelar
        </button>
    `;

    document.body.appendChild(modal);

    // Fechar o modal
    document.getElementById('closeRecoverModal').addEventListener('click', function () {
        document.body.removeChild(modal);
    });

    // Enviar o e-mail de recuperação
    document.getElementById('sendRecoverEmail').addEventListener('click', function () {
        const emailField = document.getElementById('recoverEmail');
        const emailError = document.getElementById('recoverEmailError');
        const emailRegex = /^[a-zA-Z]+@ifba\.edu\.br$/;

        // Limpa mensagens de erro
        emailError.textContent = '';
        emailError.style.display = 'none';

        // Validação do e-mail
        if (!emailRegex.test(emailField.value)) {
            emailError.textContent = 'O e-mail deve estar no formato nomePessoa@ifba.edu.br';
            emailError.style.display = 'block';
            return;
        }

        // Simula envio de e-mail
        alert(`Um link de recuperação foi enviado para o e-mail: ${emailField.value}`);

        // Remove o modal
        document.body.removeChild(modal);

    });
});
