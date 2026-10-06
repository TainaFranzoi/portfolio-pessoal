//menu hamburguer
const botaoHamburguer = document.querySelector('.botao-hamburguer');
const menu= document.querySelector('.menu');

if (botaoHamburguer && menu) {
    botaoHamburguer.addEventListener('click', function () {
        botaoHamburguer.classList.toggle('aberto');
        menu.classList.toggle('aberto');
    })
}

//modo escuro
const botaoTema = document.querySelector('.botao-tema');
const raizHtml = document.documentElement;

if (botaoTema) {
    botaoTema.addEventListener('click', function () {
        raizHtml.classList.toggle('modo-escuro');

        const modoEscuroAtivo = raizHtml.classList.contains('modo-escuro');
        botaoTema.textContent = modoEscuroAtivo ? '☀️' : '🌙';
    })
}
//validacao do formulario
const formulario = document.querySelector('.formulario');

if (formulario) {
    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault();

        const nome = document.querySelector('#nome').value.trim();
        const email = document.querySelector('#email').value.trim();  
        const mensagemCampo = document.querySelector('#mensagem').value.trim();
        const mensagemEnvio = document.querySelector('.mensagem-envio');

        if (nome == ''|| email == '' || mensagemCampo == '') {
            mensagemEnvio.textContent = 'Preencha todos os campos antes de enviar.';
            mensagemEnvio.classList.add('mostrar');
            return;
        }

        mensagemEnvio.textContent = 'Mensagem enviada!';
        mensagemEnvio.classList.add('mostrar');
        formulario.reset();
    })
}

