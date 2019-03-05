import Controles from './Controles.js';
import EstadoPartida from './EstadoPartida.js';

export default class VistaLateral {

  /**
     * Constructor
     * @param {Phaser.Game} juego El juego principal
     */
    constructor(lateral) {

        this.lateral = lateral;

        // barcos
        this.barcoJugador = null;
        this.barcoEnemigo = null;
        this.bismarck = null;
        this.hood = null;

        // animaciones
        this.explosiones = null;

        // controles
        this.controles = null;

    }

    /*************************************************************************
     * FUCIONES ESTANDAR DE PHASER
     *************************************************************************/

    preload() {
        this.cargarImagenes();
        this.conectarWebsocket();
    }

    create() {
        this.deshabilitarPerdidaFoco();
        this.crearFondo();
        this.crearBarcos();
        this.crearControles();
    }

    update() {

    }

    /*************************************************************************
     * FUNCIONES AUXILIARES PRELOAD
     *************************************************************************/

    cargarImagenes() {
        this.lateral.load.image('escenarioLateral', 'sprites/lateraleditado1.png');
    	this.lateral.load.image('Bismark_lateral', 'sprites/Modelo_Bismarck_Lateral.png');
    }

    conectarWebsocket() {
        let host = document.location.host;

        this.websocket = new WebSocket("ws://" + host  + "/websockets/partida/");
        this.websocket.partida = this;

        this.websocket.onmessage = function(event) {
            let estadoPartida = JSON.parse(event.data);
            this.partida.estadosRecibidos.push(estadoPartida);
        };
    }

    /*************************************************************************
     * FUNCIONES AUXILIARES CREATE
     *************************************************************************/

    deshabilitarPerdidaFoco() {
        this.lateral.stage.disableVisibilityChange = true;
    }

    crearFondo() {
        this.lateral.add.sprite(0, 0, 'escenarioLateral');
    }

    crearBarcos() {
        // bismarck
        let barco = this.lateral.add.sprite(95, this.lateral.world.height - 100,'Bismark_lateral');
        barco.scale.setTo(1.0,1.0);
        barco.body.collideWorldBounds = true;
    }

    crearControles() {
        this.controles = new Controles(this.lateral);
    }


}