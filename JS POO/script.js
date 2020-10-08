var VideoJuego = {
    titulo: "",
    consola: "",
    jugar() {
        console.log("Estoy jugando a " + this.titulo + " en la consola " + this.consola);
    }
}

var Mario =  Object.create(VideoJuego);
Mario.__init = function(titulo, version) {
    this.titulo = titulo;
    this.version = version;
}
Mario.consola = "Nintendo";
Mario.version = 0;

var marioUno = Object.create(Mario);
marioUno.__init("Mario, the first", 1);

var marioTres = Object.create(Mario);
marioTres.__init("Mario Bross 3", 3);

var Sonic = Object.create(VideoJuego);
Sonic.__init = function(titulo, version, consola) {
    this.titulo = titulo;
    this.version = version;
    this.consola = consola;
}

var sonicUno = Object.create(Sonic);
sonicUno.__init("Sonic The Hedgehog", 1, "Sega");