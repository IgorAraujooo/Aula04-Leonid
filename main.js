'use strict';

function mostrarNumerosFiltrados(filtrarFn) {
    const numeros = document.getElementById('numeros').value.split(',');
    const container = document.createElement('div');
    container.classList.add('resultado-container');

    for (const numero of numeros) {
        if (filtrarFn(Number(numero))) {
            const novoSpan = document.createElement('span');
            novoSpan.textContent = numero;
            container.appendChild(novoSpan);
        }
    }

    return container;
}

function mostrarNumerosModificados(modificarFn) {
    const numeros = document.getElementById('numeros').value.split(',');
    const container = document.createElement('div');
    container.classList.add('resultado-container');

    for (const numero of numeros) {
        const novoSpan = document.createElement('span');
        novoSpan.textContent = modificarFn(Number(numero));
        container.appendChild(novoSpan);
    }

    return container;
}

function limparResultado(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
}

document.getElementById('botao-mostrar-todos').addEventListener('click', () => {
    limparResultado('container-todos-numeros');
    const container = mostrarNumerosFiltrados(() => true);
    document.getElementById('container-todos-numeros').appendChild(container);
});

document.getElementById('botao-mostrar-pares').addEventListener('click', () => {
    limparResultado('container-numeros-pares');
    const container = mostrarNumerosFiltrados(numero => numero % 2 === 0);
    document.getElementById('container-numeros-pares').appendChild(container);
});

document.getElementById('botao-mostrar-impares').addEventListener('click', () => {
    limparResultado('container-numeros-impares');
    const container = mostrarNumerosFiltrados(numero => numero % 2 !== 0);
    document.getElementById('container-numeros-impares').appendChild(container);
});

document.getElementById('botao-mostrar-multiplos3').addEventListener('click', () => {
    limparResultado('container-numeros-multiplos3');
    const container = mostrarNumerosFiltrados(numero => numero % 3 === 0);
    document.getElementById('container-numeros-multiplos3').appendChild(container);
});

document.getElementById('botao-mostrar-multiplos3e4').addEventListener('click', () => {
    limparResultado('container-numeros-multiplos3e4');
    const container = mostrarNumerosFiltrados(numero => numero % 3 === 0 && numero % 4 === 0);
    document.getElementById('container-numeros-multiplos3e4').appendChild(container);
});

document.getElementById('botao-mostrar-multiplos3ou4').addEventListener('click', () => {
    limparResultado('container-numeros-multiplos3ou4');
    const container = mostrarNumerosFiltrados(numero => numero % 3 === 0 || numero % 4 === 0);
    document.getElementById('container-numeros-multiplos3ou4').appendChild(container);
});

document.getElementById('botao-mostrar-proximo').addEventListener('click', () => {
    limparResultado('container-numeros-proximos');
    const container = mostrarNumerosModificados(numero => numero + 1);
    document.getElementById('container-numeros-proximos').appendChild(container);
});

document.getElementById('botao-mostrar-proximo-par').addEventListener('click', () => {
    limparResultado('container-proximo-par');
    const container = mostrarNumerosModificados(numero => numero + (numero % 2 === 0 ? 2 : 1));
    document.getElementById('container-proximo-par').appendChild(container);
});

document.getElementById('botao-mostrar-dobro').addEventListener('click', () => {
    limparResultado('container-dobro');
    const container = mostrarNumerosModificados(numero => numero * 2);
    document.getElementById('container-dobro').appendChild(container);
});
