//alert("ola mundo");
var titulo = document.querySelector(".titulo"); //querySelector para selecionar uma classe,tag e id
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");


for (var i = 0; i < pacientes.length; i++) { //length tamanho array

  var paciente = pacientes[i]; // acessando cada possisão do paciente

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoValido = true;
  var alturaValida = true;


  if (peso <= 0 || peso >= 1000) {
    console.log("Peso invalido");
    pesoValido = false;
    tdImc.textContent = "Peso Invalido";
    //  paciente.style.color = "red";
    //  paciente.style.backgroundColor = "lightcoral"; // propriedade mudar o estilo
    paciente.classList.add("paciente-invalido"); //propriedade de estilo pelo css

  }

  if (altura <= 0 || altura >= 3.00) {
    console.log("Altura Invalida");
    alturaValida = false;
    tdImc.textContent = "Altura Invalida";
    //paciente.style.backgroundColor = "lightcoral"; // propriedade mudar o estilo
    paciente.classList.add("paciente-invalido"); //propriedade de estilo pelo css

  }

  if (alturaValida && pesoValido) {
    var imc = calculaImc(peso, altura);

    tdImc.textContent = imc; //toFixed para coletar a quantidade de casas que deseja
  }


}

function calculaImc(peso, altura){
  var imc = 0;

  imc = peso / (altura * altura);
  return imc.toFixed(2);
}