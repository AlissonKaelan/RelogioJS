var horasElement = document.getElementById('horas')
var minutosElement = document.getElementById('minutos')
var segundosElement = document.getElementById('segundos')


function NovoTempo(){

var date = new Date(); //Pegar a data atual

var horas = date.getHours() //pegar a hora atual da variavel date
var minutos = date.getMinutes()
var segundos = date.getSeconds()

horasElement.textContent = CorrectTime(horas) //O texto do elemento minutos vai ser a var horas
minutosElement.textContent = CorrectTime(minutos)
segundosElement.textContent = CorrectTime(segundos)

//console.log(horas,minutos,segundos) // testa a hora, minuto e segundos pelo console do arquivo

//Auteração da cor de fundo dependendo da horas
if(horas >= 1 && horas <12){
        document.body.style.background = '#f89b7e'
} else if(horas >= 12 && horas <18){
        document.body.style.background = '#d46700'
}else {
        document.body.style.background = '##2b9eb3'
}
}


function CorrectTime(time) {//corrigir as horas para aparecer um 0
        return time < 10 ? '0' + time : time
        //Se o parametro for menor que 10 botar um 0 na frente se não apresentar o time normal
}
NovoTempo() //Quado atualizar já aparecer a nova hora sem o deley
setInterval(NovoTempo,1000)
//Intervalo de Tempo 1000 milisegundo = 1 segundo para atualizar a pagina 


