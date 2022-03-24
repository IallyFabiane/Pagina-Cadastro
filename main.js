let listaDeInputs = document.querySelectorAll('.resultado');
for (let indice = 0; indice < listaDeInputs.length; indice++) {
   let input = listaDeInputs[indice];
   let valor = input.value;
   input.onkeydown = valor; 
   console.log(valor);
}

let senhaDeAcesso = 4568659;
let inputSenha = document.getElementById('senha');
let senhaComputada;
let acessoNegado = false;

function acesso (senha) {
   senhaComputada = inputSenha.value;
      if (senhaComputada == senhaDeAcesso) {
         return alert('Acesso permitido.');
      } else {
         acessoNegado = true;
         return prompt ('Acesso negado. Tente novamente aqui: ');
      } 
} 

function tentativasDeAcesso () {
   let tentativas = 0;
   while (tentativas < 3) {
      if (senhaDeAcesso != senhaComputada) {
         tentativas++;
         acesso(senhaComputada);
      } else { 
        break;
      } 
   } 
}

let inputSubmit = document.querySelector('#envio');
inputSubmit.onclick = tentativasDeAcesso;



   
