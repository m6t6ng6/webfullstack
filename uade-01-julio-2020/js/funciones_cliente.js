$( document ).ready(function() {
});

// DEV
//var host = "localhost";
//var port = 3300;

// STAGING
var host = "pensaenverde-app";
var port = 3000;

// PROD
//var host = "pensaenverde-app.matanga.net.ar";
//var port = 3000;

var periodo = 300000;   // 5 minutos

$(".consulta").click(function(){
    $(".historico").removeClass('hidden');
    $(this).text('Cotización: actualiza cada 5 minutos automáticamente');
    var primeraVuelta = true;
    if (primeraVuelta === true) {
        mostrarValoresDolar();
        setTimeout(mostrarValorInmediatamenteAnteriorAlActual(), 200);
        mostrarValorMaximo();
        mostrarValorMinimo();
        primeraVuelta = false;
    } 
    if (primeraVuelta === false) {
        setInterval(function() {
            mostrarValoresDolar();
            setTimeout(mostrarValorInmediatamenteAnteriorAlActual(), 500);
            mostrarValorMaximo();
            mostrarValorMinimo();
        }, periodo);
    }
});

function mostrarValorMaximo() {
    $.ajax({
        url: "http://" + host + ":" + port + "/maximoDelDia",
        type: 'GET',
        dataType: 'json',
        success: (result) => {
            var maximo = result[0].maximo.toFixed(2);
            console.log(maximo);
            $(".leyendaMaximo").text("Máximo del día: " + maximo);
        }
    });
}

function mostrarValorMinimo() {
    $.ajax({
        url: "http://" + host + ":" + port + "/minimoDelDia",
        type: 'GET',
        dataType: 'json',
        success: (result) => {
            var minimo = result[0].minimo.toFixed(2);
            console.log(minimo);
            $(".leyendaMinimo").text("Minimo del día: " + minimo); 
        }
    });
}

function mostrarValorInmediatamenteAnteriorAlActual() {
    $.ajax({
        url: "http://" + host + ":" + port + "/inicioDelDia",
        type: 'GET',
        dataType: 'json',
        success: (result) => {
            var cotizacionAnterior = result[0].cotizacion.toFixed(2);
            console.log(cotizacionAnterior);
            var cotizacionActual = parseFloat($(".cotizacionOficial").text()).toFixed(2);
            console.log(cotizacionActual);
            var status = 0;
            if (cotizacionAnterior === cotizacionActual) {
                status = 0;
            } else if (cotizacionAnterior > cotizacionActual) {
                status = -1;
            } else if (cotizacionAnterior < cotizacionActual) {
                status = 1;
            }
            setTimeout(function(){
                if (status === 1) { // tiene que estar verde porque subio
                    $(".cotizacionOficial").removeClass('btn-secondary').removeClass('btn-info').removeClass('btn-danger').addClass('btn-success');
                    $('.leyendaVariacion').removeClass('hidden').addClass("btn-success");
                    $(".cotizacionOficial").text(cotizacionActual);
                    $(".leyendaVariacion").text("Variación diaria: +" + (cotizacionActual/cotizacionAnterior - 1).toFixed(2).toString() + "%");  
                } else if (status === -1) { // tiene que estar rojo porque bajo
                    $(".cotizacionOficial").removeClass('btn-secondary').removeClass('btn-info').removeClass('btn-success').addClass('btn-danger');
                    $(".leyendaVariacion").removeClass('hidden').addClass('btn-danger');
                    $(".cotizacionOficial").text(cotizacionActual); 
                    $(".leyendaVariacion").text("Variacion diaria: -" + (cotizacionActual/cotizacionAnterior - 1).toFixed(2).toString() + "%");  
                } else if (status === 0) { // tiene que estar azul porque se mantuvo
                    $(".cotizacionOficial").removeClass('btn-secondary').removeClass('btn-success').removeClass('btn-danger').addClass('btn-info');
                    $(".leyendaVariacion").removeClass('hidden').addClass('btn-info');
                    $(".cotizacionOficial").text(cotizacionActual); 
                    $(".leyendaVariacion").text("Variación diaria: =" + (cotizacionActual/cotizacionAnterior - 1).toFixed(2).toString() + "%");  
                }
                $(".fechaCotizacion").removeClass('btn-secondary').addClass('btn-dark');
            }, 3000);
        },
        error: function() {
            console.log("An error has occured");
        }
    });
}

function mostrarValoresDolar() {
    $.ajax({
        url: "http://" + host + ":" + port + "/vivo",
        type: 'GET',
        dataType: 'json',
        success: (result) => {
            /* status = 0 -> sin cambios respecto a la medicion anterior
            *  status = 1 -> subio respecto a la medicion anterior
            *  status = -1 -> bajo respecto a la medicion anterior
            */
            var listadoCotizaciones = {
                "oficial": 1,
                "solidario": 1.3,
                "agro": 0.7,
                "blue": 1.8,
                "ccl": 1.55
            };
            var status = 0;
            var cotizacion = result[0].cotizacion;
            var actualizacion = format_date(result[0].fecha_cotizacion);   
            $(".cotizacionOficial").text(cotizacion.toFixed(2));
            $(".cotizacionSolidario").text((cotizacion * listadoCotizaciones.solidario).toFixed(2));
            $(".cotizacionAgro").text((cotizacion * listadoCotizaciones.agro).toFixed(2));
            $(".cotizacionBlue").text((cotizacion * listadoCotizaciones.blue).toFixed(2));
            $(".cotizacionCcl").text((cotizacion * listadoCotizaciones.ccl).toFixed(2));       
            $(".fechaCotizacion").text("Actualizado: " + actualizacion);
            $(".leyendaOficial").text("Oficial ARS/USD Compra");
            $(".leyendaSolidario").text("Solidario ARS/USD Compra");
            $(".leyendaAgro").text("Agro ARS/USD Compra");
            $(".leyendaBlue").text("Blue ARS/USD Compra");
            $(".leyendaCcl").text("CCL ARS/USD Compra");
            if (status === 1) { // tiene que estar verde porque subio
                $(".cotizacion").removeClass('btn-info').removeClass('btn-danger').removeClass('hidden').addClass('btn-secondary');
            } else if (status === -1) { // tiene que estar rojo porque bajo
                $(".cotizacion").removeClass('btn-info').removeClass('btn-success').removeClass('hidden').addClass('btn-secondary'); 
            } else if (status === 0) { // tiene que estar azul porque se mantuvo
                $(".cotizacion").removeClass('btn-success').removeClass('btn-danger').removeClass('btn-info').removeClass('hidden').addClass('btn-secondary');
            }
            $(".fechaCotizacion").removeClass('hidden').removeClass('btn-dark').addClass('btn-secondary');
            $(".leyenda").addClass('btn-secondary').removeClass('btn-info').removeClass('btn-danger').removeClass('hidden');
            $(".leyenda2").addClass('btn-secondary').removeClass('btn-info').removeClass('hidden');
            $(".leyendaVariacion").removeClass('btn-info').removeClass('hidden').addClass('btn-secondary').text("Calculando variación diaria");
            document.title = "Actualizado: " + actualizacion;
            setTimeout(function(){
                if (status === 1) { // tiene que estar verde porque subio
                    $(".cotizacion").removeClass('btn-secondary').addClass('btn-success');
                } else if (status === -1) { // tiene que estar rojo porque bajo
                    $(".cotizacion").removeClass('btn-secondary').addClass('btn-danger'); 
                } else if (status === 0) { // tiene que estar azul porque se mantuvo
                    $(".cotizacion").removeClass('btn-secondary').addClass('btn-info');
                }
                $(".fechaCotizacion").removeClass('btn-secondary').addClass('btn-dark');
                $(".leyenda2").removeClass('btn-secondary').addClass('btn-dark');
            }, 3000);
        }, 
        error: function() {
            console.log("An error has occured");
        }
    });
};

$(".historico").click(function(){
    $(this).text('Histórico: actualiza cada 5 minutos automáticamente');
    $(".chart").removeClass('hidden');
    $(".consulta").removeClass('hidden');

    var primeraVuelta = true;
    if (primeraVuelta === true) {
        mostrarDatosHistoricoChart();
        //$(".chart").load(" .chart");
        primeraVuelta = false;
    } 
    if (primeraVuelta === false) {
        setInterval(function() {
            mostrarDatosHistoricoChart();
            //$(".chart").load(" .chart");
        }, periodo);
    }
});

function mostrarDatosHistoricoChart() {
    $.ajax({
        url: "http://" + host + ":" + port + "/datosHistoricoChart",
        type: 'GET',
        dataType: 'json',
        success: (result) => {
            labels = [];
            data = [];
            console.log(result);
            for (var dato of result) {
                labels.push(format_date(dato.fecha_cotizacion));
                data.push(dato.cotizacion);
            }
            console.log(labels.reverse());
            console.log(data.reverse());

            //let myChart = document.getElementById('myChart').getContext('2d');
            let chart = $(".chart")

            // Global options (for all the objects in the screen)
            //Chart.defaults.global.defaultFontFamily = 'Lato';
            //Chart.defaults.global.defaultFontSize = 18;
            //Chart.defaults.global.defaultFontColor = "#777";

            //elimina el grafico anterior (bug-fix)
            if (window.bar != undefined) window.bar.destroy();
            
            //crea el grafico
            window.bar = new Chart(chart, {
                type: 'bar',    // bar: grafico de barras, pie: grafico de torta, horizontalBar: barras horizontales, line: grafico de lineas, doughnut: rosquilla, radar: radar chart
                data: {
                    labels: labels,
                    datasets: [{
                        //label: 'Precio del dólar en pesos argentinos por cada unidad de dólar norteamericano desde el inicio de todos los tiempos',
                        label: 'ARS/ USD',
                        data: data,
                        backgroundColor: 'green',
                            //[
                            //'rgba(255, 99, 132, 0.6)',   // for Boston
                            //'rgba(54, 162, 235, 0.6)',   // for Worcester
                            //'rgba(255, 206, 86, 0.6)',   // for Springfield
                            //'rgba(75, 192, 192, 0.6)',
                            //'rgba(153, 102, 255, 0.6)',
                            //'rgba(255, 159, 64, 0.6)',
                            //'rgba(255, 99, 132, 0.6)'
                            //],
                        borderWidth: 1,
                        borderColor: '#777',
                        hoverBorderWidth: 3,
                        hoverBorderColor: "black"
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: 'Histórico del dólar',
                        fontSize: 25
                    },
                    legend: {
                        display: true,   // true: shows the legend, better to be true in piechart type
                        position: "top",
                        labels: {
                            fontColor: "#000"
                        }
                    },
                    layout: {
                        padding: {
                            left: 40,
                            right: 0,
                            bottom: 0,
                            top: 0
                        }
                    },
                    tooltips: {
                        enabled: true     // false: deactivates the information when hovers on each bar
                    }
                }
            });
        }
    });
}

function format_date(date) {
    // entrega horario local del cliente
    var date = new Date(date);
    var date = date.setHours(date.getHours() - date.getTimezoneOffset()/60);
    return new Date(date).toISOString().slice(0, 19).replace('T', ' ');
}