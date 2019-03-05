import Partida from "./Partida.js";
import VistaLateral from "./VistaLateral.js";


var juego = new Phaser.Game(800, 600, Phaser.AUTO,'juego');
var lateral = new Phaser.Game(450, 600, Phaser.AUTO,'lateral');

juego.state.add('JuegoPrincipal', new Partida(juego));
juego.state.start('JuegoPrincipal');

lateral.state.add('JuegoLateral', new VistaLateral(lateral));
lateral.state.start('JuegoLateral');