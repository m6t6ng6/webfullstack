$( document ).ready(function() {
    botonesInicial();
});

operacion = [];
resultado = "";

$('.siete').on('click', function() {
    accionEnBotonesNumericos();
    operacion.push("7");
    $('.display-text-operaciones').text(operacion.join(''));
});

$('.ocho').on('click', function() {
    accionEnBotonesNumericos();
    operacion.push("8");
    $('.display-text-operaciones').text(operacion.join(''));
});

$('.nueve').on('click', function() {
    accionEnBotonesNumericos();
    operacion.push("9");
    $('.display-text-operaciones').text(operacion.join(''));
});

$('.cuatro').on('click', function() {
    accionEnBotonesNumericos();
    operacion.push("4");
    $('.display-text-operaciones').text(operacion.join(''));
});

$('.cinco').on('click', function() {
    accionEnBotonesNumericos();
    operacion.push("5");
    $('.display-text-operaciones').text(operacion.join(''));
});

$('.seis').on('click', function() {
    accionEnBotonesNumericos();
    operacion.push("6");
    $('.display-text-operaciones').text(operacion.join(''));
});

$('.uno').on('click', function() {
    accionEnBotonesNumericos();
    operacion.push("1");
    $('.display-text-operaciones').text(operacion.join(''));
});

$('.dos').on('click', function() {
    accionEnBotonesNumericos();
    operacion.push("2");
    $('.display-text-operaciones').text(operacion.join(''));
});

$('.tres').on('click', function() {
    accionEnBotonesNumericos();
    operacion.push("3");
    $('.display-text-operaciones').text(operacion.join(''));
});

$('.cero').on('click', function() {
    accionEnBotonesNumericos();
    operacion.push("0");
    $('.display-text-operaciones').text(operacion.join(''));
});

$('.borrar').on('click', function() {
    accionEnBotonesNumericos2();
    console.log("se presiono borrar")
    operacion = [];
    $('.display-text-operaciones').text(operacion.join(''));
});

$('.reiniciar').on('click', function() {
    accionEnBotonesNumericos2();
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
    $(this).hide();$('.tecla-muleto-guardar').show().text('S');
    $('.atras').hide();$('.tecla-muleto-atras').show().text('B');
    $('.tecla-operacion').hide();$('.tecla-muleto-operacion').show().text('');
    $('.tecla-numerica').hide();$('.tecla-muleto-numerica').show().text('');
    $('.guardados').append('<h2 class="display-text-guardados">' + operacion.join('') + ' = ' + resultado.toString() + '</h2>');
    $('.display-text-operaciones').text("new entry saved!").css("font-size: 120%");
});

function validacion(signoActual) {
    if ( operacion.length > 0 ) {
        $('.guardar').hide();$('.tecla-muleto-guardar').show().text('S');
        $('.atras').show();$('.tecla-muleto-atras').hide().text('B');
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
    $(this).hide();$('.tecla-muleto-igual').show().text('=');
    $('.atras').hide();$('.tecla-muleto-atras').show().text('B');
    $('.guardar').show();$('.tecla-muleto-guardar').hide().text('S');
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

function botonesInicial () {
    $('.parentesis-izq').hide();
    $('.parentesis-der').hide();
    $('.guardar').hide();$('.tecla-muleto-guardar').show().text('S');
    $('.atras').hide();$('.tecla-muleto-atras').show().text('B');
    $('.igual').hide();$('.tecla-muleto-igual').show().text('=');
    $('.borrar').show();$('.tecla-muleto-borrar').hide().text('C');
    $('.reiniciar').show();$('.tecla-muleto-reiniciar').hide().text('R');
    $('.tecla-muleto-operacion').hide();
    $('.tecla-muleto-numerica').hide();
    $('.tecla-muleto-reiniciar').hide();
}

function accionEnBotonesNumericos() {
    $('.igual').show();$('.tecla-muleto-igual').hide().text('=');
    $('.guardar').hide();$('.tecla-muleto-guardar').show().text('S');
    $('.atras').show();$('.tecla-muleto-atras').hide().text('B');
}

function accionEnBotonesNumericos2() {
    $('.guardar').hide();$('.tecla-muleto-guardar').show().text('S');
    $('.atras').hide();$('.tecla-muleto-atras').show().text('B');
    $('.igual').hide();$('.tecla-muleto-igual').show().text('=');
    $('.tecla-operacion').show();$('.tecla-muleto-operacion').hide().text('');
    $('.tecla-numerica').show();$('.tecla-muleto-numerica').hide().text('');
}