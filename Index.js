const openForm = document.getElementById("btnInit"); 
const form = document.getElementById("container"); 
const closeForm = document.getElementById("btn"); 
const msg = document.getElementById("msg"); 

openForm.addEventListener("click", () => { // Adiciona um evento de clique ao botão.
    form.style.display = "flex"; // Exibe o formulário.
    openForm.style.display = "none"; // Esconde o botão.
});

closeForm.addEventListener("click", () => { // Adiciona um evento de clique ao botão "Fechar/Enviar Formulário".
    
    const name = document.getElementById('name').value; // Obtém os valores dos campos de nome, email e telefone.
    const email = document.getElementById('email').value;
    const fone = document.getElementById('fone').value;

    if (name !== "" && email !== "" && fone !== "") { // Verifica se todos os campos foram preenchidos.
        msg.style.display = "block"; // Exibr a mensagem.
        form.style.display = "none"; // Esconde o formulário.
        openForm.style.display = "none"; // Esconde o botão "Abrir Formulário".
        closeForm.disabled = true; // Desabilita o botão de fechar formulário.
        } else {
        alert("Preencha todos os campos"); // Exibe um alerta se algum campo estiver vazio.
        form.style.display = "flex"; // Garante que o formulário continue visível caso haja erro.
        openForm.style.display = "none"; // Esconde o botão "Abrir Formulário".
    }
});


