//titulo.addEventListener("click", function () {// escutador de evento, aguardando um evento
// função anonima

//console.log("Olá eu fui clicado!");

//});

//function mostraMensagem(){ // outro tipo de funcao
//console.log("Olá eu fui clicado!");
//}

//console.log(paciente); //try
//console.log(tdPeso); //td que tem o peso
//console.log(tdAltura);
//console.log(altura);
//console.log(peso);
//console.log(imc);
//console.log(paciente.nome);
//console.log(form.altura);
//console.log(form.altura.value);
//console.log(nome);
// console.log(form.peso.value); // com .value obtenho o valor do campo
//console.log(nome);
//--------------------------------------------------------------------------------------------//
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) { //addEventListener um escutador de evento do click

  event.preventDefault(); //função que evita o comportamento padrão

  // Extraindo informação do paciente do form
  var form = document.querySelector("#form-adiciona");
  var paciente = PacienteDoFurmulario(form);

  var erros = validaPaciente(paciente);
  console.log(erros);

  if(erros.lenght > 0){
    exibeMensagensDeErro(erros);
    return;
  }

  adicionaPacienteNaTabela(paciente);

  var pacienteTr = montaTr(paciente);

  // adicionando o paciente na tabela
  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr); // tabela coloca o pacienteTr dentro da tabela

  form.reset();
  var mensagemErro = document.querySelector("#mensagens-erro");
  mensagemErro.innerHTML = "";

});




function adicionaPacienteNaTabela(paciente){
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros){
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";
}


function PacienteDoFurmulario(form) {

  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;

}

function montaTr(paciente) {

  var pacienteTr = document.createElement("tr"); // com createElement passamos o nome da tag que queremos criar
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

