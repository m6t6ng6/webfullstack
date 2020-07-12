const cron = require('node-cron');

var primeraVuelta = true;

if (primeraVuelta === true) {
    console.log('Tomando valor del dolar, primera vuelta.');
    valor_del_dolar_insert_en_mysql();
    primeraVuelta = false;
}

cron.schedule('* */24 * * *', () => {
    console.log('Tomando valor del dolar, vuelta periodica (actualización).');
    valor_del_dolar_insert_en_mysql();
});

function valor_del_dolar_insert_en_mysql () {
    /* 
    * https://currencylayer.com/quickstart
    * plan: gratuita hasta 250 req/mo 
    */
    const http = require('http');
    const options = {
        host: 'api.currencylayer.com',
        path: '/live?access_key=634738f605b4a7bce267a2c5475a4876'
    };

    var req = http.get(options, (res) => {
        console.log('STATUS: ' + res.statusCode);
        //console.log('HEADERS: ' + JSON.stringify(res.headers));

        // Buffer the body entirely for processing as a whole.
        var bodyChunks = [];
        res.on('data', (chunk) => {
            bodyChunks.push(chunk);
        }).on('end', () => {
            var body = bodyChunks.join('');
            console.log(JSON.parse(body).quotes.USDARS);
            //console.log('BODY: ' + body); 
        })
    });

    req.on('error', (e) => {
        console.log('ERROR: ' + e.message);
    });
}

