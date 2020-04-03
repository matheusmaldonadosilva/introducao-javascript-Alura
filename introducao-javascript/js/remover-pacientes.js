//var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (event) {

    //var alvoEvento = event.target;
    //var paiDoAlvo = alvoEvento.parentNode;

    //    paiDoAlvo.remove();

    event.target.parentNode.classList.add("fadeOut"); // evento de transição
    
    setTimeout(function() { // evento setTimeout serve como um tempo que determina
        event.target.parentNode.remove();
    },250);


    // evento de remover, ele aponta para o pai da tag que esta sendo criada

});



/* pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){

        this.remove(); //o this se refere ao entrelamento com paciente
        //this se refere quem chamou o evento quem é o dono do evento

    });
}); */