$( document ).ready(function() {
    $('.parentesis-izq').hide();
    $('.parentesis-der').hide();
    $('.guardar').hide();
    $('.atras').hide();
    $('.igual').hide();
});

operacion = [];
resultado = "";

$('.siete').on('click', function() {
    $('.igual').show();
    $('.guardar').hide();
    $('.atras').show();
    operacion.push("7");
    $('.display-text-operaciones').text(operacion.join(''));
});

$('.ocho').on('click', function() {
    $('.igual').show();
    $('.guardar').hide();
    $('.atras').show();
    operacion.push("8");
    $('.display-text-operaciones').text(operacion.join(''));
});

$('.nueve').on('click', function() {
    $('.igual').show();
    $('.guardar').hide();
    $('.atras').show();
    operacion.push("9");
    $('.display-text-operaciones').text(operacion.join(''));
});

$('.cuatro').on('click', function() {
    $('.igual').show();
    $('.guardar').hide();
    $('.atras').show();
    operacion.push("4");
    $('.display-text-operaciones').text(operacion.join(''));
});

$('.cinco').on('click', function() {
    $('.igual').show();
    $('.guardar').hide();
    $('.atras').show();
    operacion.push("5");
    $('.display-text-operaciones').text(operacion.join(''));
});

$('.seis').on('click', function() {
    $('.igual').show();
    $('.atras').show();
    operacion.push("6");
    $('.display-text-operaciones').text(operacion.join(''));
});

$('.uno').on('click', function() {
    $('.igual').show();
    $('.atras').show();
    operacion.push("1");
    $('.display-text-operaciones').text(operacion.join(''));
});

$('.dos').on('click', function() {
    $('.igual').show();
    $('.guardar').hide();
    $('.atras').show();
    operacion.push("2");
    $('.display-text-operaciones').text(operacion.join(''));
});

$('.tres').on('click', function() {
    $('.igual').show();
    $('.guardar').hide();
    $('.atras').show();
    operacion.push("3");
    $('.display-text-operaciones').text(operacion.join(''));
});

$('.cero').on('click', function() {
    $('.igual').show();
    $('.guardar').hide();
    $('.atras').show();
    operacion.push("0");
    $('.display-text-operaciones').text(operacion.join(''));
});

$('.borrar').on('click', function() {
    $('.guardar').hide();
    $('.atras').hide();
    $('.igual').hide();
    $('.tecla-operacion').show();
    $('.tecla-numerica').show();
    console.log("se presiono borrar")
    operacion = [];
    $('.display-text-operaciones').text(operacion.join(''));
});

$('.reiniciar').on('click', function() {
    $('.guardar').hide();
    $('.atras').hide();
    $('.igual').hide();
    $('.tecla-operacion').show();
    $('.tecla-numerica').show();
    console.log("se presiono reiniciar")
    operacion = [];
    $('.display-text-operaciones').text(operacion.join(''));
    $('.display-text-resultado').text('');
});

$('.sumar').on('click', function() {
    validacion(" + ");
    $('.display-text-operaciones').text(operacion.join(''));
});

$('.restar').on('click', function() {
    validacion(" - ");
    $('.display-text-operaciones').text(operacion.join(''));
});

$('.multiplicar').on('click', function() {
    validacion(" * ");
    $('.display-text-operaciones').text(operacion.join(''));
});

$('.dividir').on('click', function() {
    validacion(" / ");
    $('.display-text-operaciones').text(operacion.join(''));
});

$('.parentesis-izq').on('click', function() {
    validacion(" ( ");
    $('.display-text-operaciones').text(operacion.join(''));
});

$('.parentesis-der').on('click', function() {
    validacion(" ) ");
    $('.display-text-operaciones').text(operacion.join(''));
});

$('.coma').on('click', function() {
    validacion(".");
    $('.display-text-operaciones').text(operacion.join(''));
});

$('.atras').on('click', function() {
    operacion.pop();
    $('.display-text-operaciones').text(operacion.join(''));
});

$('.guardar').on('click', function() {
    $(this).hide();
    $('.atras').hide();
    $('.tecla-operacion').hide();
    $('.tecla-numerica').hide();
    $('.guardados').append('<h2 class="display-text-guardados">' + operacion.join('') + ' = ' + resultado.toString() + '</h2>');
    $('.display-text-operaciones').text("new entry saved!").css("font-size: 120%");
});

function validacion(signoActual) {
    if ( operacion.length > 0 ) {
        $('.guardar').hide();
        $('.atras').show();
        if ( operacion[operacion.length - 1].includes("+") ) {
            console.log("+");
            if ( operacion.length != 0 ) {
                operacion[operacion.length - 1] = signoActual;
            }
        } else if ( operacion[operacion.length - 1].includes("/") ) {
            console.log("÷");
            if ( operacion.length != 0 ) {
                operacion[operacion.length - 1] = signoActual;
            }
        } else if ( operacion[operacion.length - 1].includes("*") ) {
            console.log("•");
            if ( operacion.length != 0 ) {
                operacion[operacion.length - 1] = signoActual;
            }
        } else if ( operacion[operacion.length - 1].includes(".") ) {
            console.log(".");
            if ( operacion.length != 0 ) {
                operacion[operacion.length - 1] = signoActual;
            }
        } else if ( operacion[operacion.length - 1].includes("-") ) {
            console.log("–");
            if ( operacion.length != 0 ) {
                operacion[operacion.length - 1] = signoActual;
            }
        } else if ( operacion[operacion.length - 1].includes("(") ) {
            console.log("(");
            if ( signoActual == " ( " ) {
                operacion.push(signoActual);
            } else if ( signoActual == " ) ") {
                operacion.push(signoActual);
            } else if ( operacion.length != 0 ) {
                operacion[operacion.length - 1] = " ( ";
            }
        } else if ( operacion[operacion.length - 1].includes(")") ) {
            console.log(")");
            if ( signoActual == " ) ") {
                cantidadDeParentesisIzq = operacion.join('').split('(').length - 1;
                cantidadDeParentesisDer = operacion.join('').split(')').length - 1;
                console.log(cantidadDeParentesisIzq + " " + cantidadDeParentesisDer);
                if ( cantidadDeParentesisIzq > cantidadDeParentesisDer ) {
                    operacion.push(signoActual); 
                } else if ( cantidadDeParentesisIzq == cantidadDeParentesisDer && cantidadDeParentesisIzq != 0 ) {
                    operacion[operacion.length - 1] = " ) ";
                }
            } else if ( operacion.length != 0 ) {
                operacion[operacion.length - 1] = " ) ";
            }
        } else {
            operacion.push(signoActual); 
        }
    }
}

$('.igual').on('click', function() {
    $(this).hide();
    $('.atras').hide();
    $('.guardar').show();
    auxiliar = [];
    for ( i = 0; i < operacion.length; i++) {
        console.log(operacion[i]);
        if ( operacion[i] != " + " && operacion[i] != " – " && operacion[i] != " • " && operacion[i] != " ÷ " ) {
            auxiliar.push(operacion[i])
        } else if ( operacion[i].includes("+") ) {
            auxiliar.push("+");
        } else if ( operacion[i].includes("-") ) {
            auxiliar.push("-");
        } else if ( operacion[i].includes("*") ) {
            auxiliar.push("*"); 
        } else if ( operacion[i].includes("/") ) {
            auxiliar.push("/");
        }
    }
    resultado = eval(auxiliar.join(''));
    console.log("resultado de: " + auxiliar.join('') + "es: " + resultado);
    $('.display-text-resultado').text(resultado.toString().substring(0,13));
});