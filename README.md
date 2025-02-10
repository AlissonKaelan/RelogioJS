
# Documentação do Projeto: Relógio Digital

Este projeto é um simples relógio digital que exibe a hora atual em um formato de horas, minutos e segundos. O relógio atualiza automaticamente a cada segundo e muda a cor de fundo com base na hora do dia.

## Estrutura do Projeto

O projeto é composto por três arquivos principais:

- **index.html** - O arquivo HTML que estrutura a página.
- **style.css** - O arquivo CSS que estiliza a página.
- **script.js** - O arquivo JavaScript que contém a lógica do relógio.

### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Relogio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <div class="relogio">
        <span id="horas">00</span>
        <span id="minutos">00</span>
        <span id="segundos">00</span>
    </div>
    <h2>&copy; Alisson_Kaelan</h2>

    <script src="script.js"></script> 
</body>
</html>
```

### style.css

```css
body {
    background-color: #0c0c08;
    color: antiquewhite;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center; /* Alinha na horizontal */
    align-items: center; /* Alinha na vertical */
    min-height: 100vh;
    flex-direction: column; /* Formato coluna um em baixo do outro */
    gap: 20px;
}

.relogio {
    display: flex;
    gap: 50px;
    flex-wrap: wrap; /* De acordo com o tamanho da tela ele vai jogando os txt para baixo */
}

.relogio span { /* Tamanho dos números do relógio */
    font-size: 150px;
}

.relogio span:not(:last-child):after { /* Add os dois ':' após os spans */
    content: ':';
    color: rgb(202, 161, 99);
}
```

### script.js

```javascript
var horasElement = document.getElementById('horas');
var minutosElement = document.getElementById('minutos');
var segundosElement = document.getElementById('segundos');

function NovoTempo() {
    var date = new Date(); // Pegar a data atual

    var horas = date.getHours(); // Pegar a hora atual da variável date
    var minutos = date.getMinutes();
    var segundos = date.getSeconds();

    horasElement.textContent = CorrectTime(horas); // O texto do elemento horas vai ser a var horas
    minutosElement.textContent = CorrectTime(minutos);
    segundosElement.textContent = CorrectTime(segundos);

    // Alteração da cor de fundo dependendo da hora
    if (horas >= 1 && horas < 12) {
        document.body.style.background = '#f89b7e';
    } else if (horas >= 12 && horas < 18) {
        document.body.style.background = '#d46700';
    } else {
        document.body.style.background = '#2b9eb3';
    }
}

function CorrectTime(time) { // Corrigir as horas para aparecer um 0
    return time < 10 ? '0' + time : time; // Se o parâmetro for menor que 10, botar um 0 na frente, se não, apresentar o time normal
}

NovoTempo(); // Quando atualizar já aparecer a nova hora sem o delay
setInterval(NovoTempo, 1000); // Intervalo de Tempo 1000 milissegundos = 1 segundo para atualizar a página
```

## Funcionalidades

- **Exibição da Hora**: O relógio exibe a hora atual em formato de 24 horas.
- **Atualização Automática**: A hora é atualizada a cada segundo.
- **Mudança de Cor de Fundo**: A cor de fundo da página muda com base na hora do dia:
  - Manhã (1h - 11h): Rosa
  - Tarde (12h - 17h): Laranja
  - Noite (18h - 24h): Azul

