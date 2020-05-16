$(document).ready(function () {

  var turno = 1;
  var turnoCirculo = null;
  var turnoCruz = null;

  calcularTurno();

  $('.cuadrado').on('click', function(){

    // Verificar que el cuadrado no este ocupado
    if ($(this).children().length == 1) {
      return;
    }

    // Pintar circulo o cruz
    if (turnoCruz) {
      // Pinto cruz
      $(this).append('<span class="cruz">×</span>');
    } else {
      // Pinto circulo
      $(this).append('<span class="circulo">◯</span>');
    }

    // Cambiar cartel de "turno de"
    if (turnoCruz) {
      $('#turno').text('◯');
    } else {
      $('#turno').text('×');
    }

    // Avanzar un turno
    turno++;
    calcularTurno();


    // Revisar si alguien gano o perdió
    var ganador = alguienGano();
    if (ganador) {
      setTimeout(function() {
        alert("El ganador fue: " + ganador);
      }, 100);
    }
  });

  function calcularTurno() {
    if (turno % 2 == 1) {
      // El numero turno sea IMPAR
      turnoCruz = true;
      turnoCirculo = false;
    } else {
      // El numero turno sea PAR
      turnoCruz = false;
      turnoCirculo = true;
    }
  }

  function alguienGano() {
    var cuadrado1 = $('.cuadrado-1').children();
    var cuadrado2 = $('.cuadrado-2').children();
    var cuadrado3 = $('.cuadrado-3').children();
    var cuadrado4 = $('.cuadrado-4').children();
    var cuadrado5 = $('.cuadrado-5').children();
    var cuadrado6 = $('.cuadrado-6').children();
    var cuadrado7 = $('.cuadrado-7').children();
    var cuadrado8 = $('.cuadrado-8').children();
    var cuadrado9 = $('.cuadrado-9').children();

    if (cuadrado1.length == 1) {
      if (cuadrado1.text() == cuadrado2.text()
          && cuadrado1.text() == cuadrado3.text()) {
        // Alguien gano
        return cuadrado1.text();

      } else if(cuadrado1.text() == cuadrado4.text()
          && cuadrado1.text() == cuadrado7.text()) {
        // Alguien gano
        return cuadrado1.text();

      } else if(cuadrado1.text() == cuadrado5.text()
          && cuadrado1.text() == cuadrado9.text()) {
        // Alguien gano
        return cuadrado1.text();

      }
    }

    if (cuadrado4.length == 1) {
      if (cuadrado4.text() == cuadrado5.text()
          && cuadrado4.text() == cuadrado6.text()) {
        // Alguien gano
        return cuadrado4.text();
      }
    }

    if (cuadrado7.length == 1) {
      if (cuadrado7.text() == cuadrado8.text()
          && cuadrado7.text() == cuadrado9.text()) {
        // Alguien gano
        return cuadrado7.text();

      } else if (cuadrado7.text() == cuadrado5.text()
          && cuadrado7.text() == cuadrado3.text()) {
        // Alguien gano
        return cuadrado7.text();
      }
    }

    if (cuadrado2.length == 1) {
      if (cuadrado2.text() == cuadrado5.text()
          && cuadrado2.text() == cuadrado8.text()) {
        // Alguien gano
        return cuadrado2.text();
      }
    }

    if (cuadrado3.length == 1) {
      if (cuadrado3.text() == cuadrado6.text()
          && cuadrado3.text() == cuadrado9.text()) {
        // Alguien gano
        return cuadrado3.text();
      }
    }


  }



});