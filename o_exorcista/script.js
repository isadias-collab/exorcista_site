function abrirArquivo() {
    document.getElementById("acesso").style.display = "none";
    document.getElementById("conteudo").style.display = "block";
    iniciarDiario();
    iniciarTransformacao();
}

function iniciarDiario() {
    const texto = `
Dia 1 - A mãe insiste que é possessão.
Dia 3 - Rezei durante horas. Nada.
Dia 5 - Ela mencionou pecados que nunca confessei.
Dia 7 - Se Deus está aqui, por que não responde?
Dia 9 - Talvez o mal fale mais alto que a fé.
    `;

    let i = 0;
    function digitar() {
        if (i < texto.length) {
            document.getElementById("diario").innerHTML += texto.charAt(i);
            i++;
            setTimeout(digitar, 40);
        }
    }
    digitar();
}

function iniciarTransformacao() {

    setTimeout(() => {

        document.getElementById("misterio").innerText = "Não é doença.";
        document.body.classList.add("possuido");

        // Corromper Salmo
        setTimeout(() => {
            document.getElementById("salmo").innerText = "mal algum.";
        }, 15000);

    }, 60000);
}

// Ativar seção secreta digitando "amen"
document.addEventListener("keydown", function(e) {
    window.digitado = (window.digitado || "") + e.key;

    if (window.digitado.includes("amen")) {
        document.body.innerHTML = `
            <div style="padding:100px; text-align:center;">
                <h1>Você acredita?</h1>
                <p>Ela também acreditava.</p>
            </div>
        `;
    }
});