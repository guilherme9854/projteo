const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

// Lógica de alternância das abas
botoes.forEach((botao, i) => {
    botao.onclick = () => {
        botoes.forEach((btn, j) => {
            btn.classList.remove("ativo");
            textos[j].classList.remove("ativo");
        });
        botao.classList.add("ativo");
        textos[i].classList.add("ativo");
    };
});

// Definição das datas dos objetivos 
const tempos = [
    new Date("2026-06-05T00:00:00"),
    new Date("2026-10-20T00:00:00"),
    new Date("2026-11-10T00:00:00"),
    new Date("2026-12-30T00:00:00")
];

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;

    if (tempoFinal <= 0) return "Objetivo Concluído!";

    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    // Retorna o HTML estruturado com formatação de dois dígitos
    return `
        <div class="contador-digito">
            <p class="contador-digito-numero">${dias}</p>
            <p class="contador-digito-texto">dias</p>
        </div>
        <div class="contador-digito">
            <p class="contador-digito-numero">${horas.toString().padStart(2, '0')}</p>
            <p class="contador-digito-texto">horas</p>
        </div>
        <div class="contador-digito">
            <p class="contador-digito-numero">${minutos.toString().padStart(2, '0')}</p>
            <p class="contador-digito-texto">min</p>
        </div>
        <div class="contador-digito">
            <p class="contador-digito-numero">${segundos.toString().padStart(2, '0')}</p>
            <p class="contador-digito-texto">seg</p>
        </div>`;
}

function atualizaCronometro() {
    for (let i = 0; i < tempos.length; i++) {
        document.getElementById(`contador${i}`).innerHTML = calculaTempo(tempos[i]);
    }
}

// Inicia o cronômetro e atualiza a cada 1 segundo 
setInterval(atualizaCronometro, 1000);
atualizaCronometro();
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

// Gerenciar Abas
botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {
        document.querySelector(".botao.ativo").classList.remove("ativo");
        document.querySelector(".aba-conteudo.ativo").classList.remove("ativo");
        
        botao.classList.add("ativo");
        textos[index].classList.add("ativo");
    });
});

// Datas dos Objetivos (Ano de 2026 conforme o sistema) 
const tempos = [
    new Date("2026-06-05T00:00:00"),
    new Date("2026-10-20T00:00:00"),
    new Date("2026-11-10T00:00:00"),
    new Date("2026-12-30T00:00:00")
];

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;

    if (tempoFinal <= 0) return `<p class="concluido">Objetivo Alcançado!</p>`;

    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    const format = (num) => num.toString().padStart(2, '0');

    return `
        <div class="contador-digito">
            <span class="contador-digito-numero">${dias}</span>
            <span class="contador-digito-texto">Dias</span>
        </div>
        <div class="contador-digito">
            <span class="contador-digito-numero">${format(horas % 24)}</span>
            <span class="contador-digito-texto">Horas</span>
        </div>
        <div class="contador-digito">
            <span class="contador-digito-numero">${format(minutos % 60)}</span>
            <span class="contador-digito-texto">Min</span>
        </div>
        <div class="contador-digito">
            <span class="contador-digito-numero">${format(segundos % 60)}</span>
            <span class="contador-digito-texto">Seg</span>
        </div>`;
}

function atualizar() {
    tempos.forEach((tempo, i) => {
        const elemento = document.getElementById(`contador${i}`);
        if (elemento) elemento.innerHTML = calculaTempo(tempo);
    });
}

// Execução
setInterval(atualizar, 1000);
atualizar();