import Partida from './Partida.js';

export default class VistaLateral {

    static get ESCALADO_BISMARCK () { return 0.15; }
    static get ESCALADO_HOOD () { return 0.15; }
    static get DAMPING_BARCO () { return 0.8; }


    /**
     * Constructor
     * @param {Phaser.Game} lateral El juego con vista lateral
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

    }

    /*************************************************************************
     * FUCIONES ESTANDAR DE PHASER
     *************************************************************************/

    preload() {
        this.cargarImagenes();

    }

    create() {
        this.deshabilitarPerdidaFoco();
        this.crearFondo();
        this.crearOlas();
        this.crearNubes();
        this.crearLluvia();
        this.crearBarcos();  
    }

    update() {	
        /*
        EL angulo es para la vision del barco enemigo (8 angulos)
        El escalado es para mostrar mas cerca o mas lejos el barco (mostrar distancia)
        */
        
    }

    /*************************************************************************
     * FUNCIONES AUXILIARES PRELOAD
     *************************************************************************/

    cargarImagenes() {
        this.lateral.load.image('escenarioLateral', 'sprites/lateral.png');
        this.lateral.load.spritesheet('nube', 'sprites/nube.png',64,128);
        this.lateral.load.image('BismarkProa', 'sprites/Bismarck/proa_bismarck.png');
        this.lateral.load.image('HoodLateral','sprites/Hood/Hood_lateral_izquierda.png')
        this.lateral.load.spritesheet('oceano', 'sprites/agua.png', 32, 400, 32);
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
        let barco = this.lateral.add.sprite(90, 302,'BismarkProa');
        barco.scale.setTo(1.0,1.0);

        let barco2 = this.lateral.add.sprite(50, this.lateral.height-230,'HoodLateral');
        barco2.scale.setTo(0.2,0.5);

    }

    crearOlas(){
    
        let horizonte = this.lateral.add.tileSprite(0, 295, 128 * 16, 100,'oceano');
        let agua = this.lateral.add.tileSprite(0, 300, 128 * 16, 200,'oceano');
        let agua2 = this.lateral.add.tileSprite(0, 350, 128 * 16, 200,'oceano');
        
        agua.animations.add('olas', [0, 1, 2, 3, 2, 1]);
        agua.animations.play('olas', 8, true);
        agua2.animations.add('olas2', [12, 13, 14, 15, 14, 13]);
        agua2.animations.play('olas2', 5, true);
        horizonte.animations.add('horizonte', [16, 17, 18, 19, 18, 17]);
        
    }

    crearNubes(){

     let nubechica = this.lateral.add.tileSprite(0, 0, 256, 120,'nube');
     let nubeGrande = this.lateral.add.tileSprite(0, 5, this.lateral.height, 120,'nube');
     let nubeConRayo = this.lateral.add.tileSprite(256, 2, 128, 120,'nube');
     let nubeConRayo2 = this.lateral.add.tileSprite(0, 2, 128, 120,'nube');
     let nubeConRayo3 = this.lateral.add.tileSprite(0, 0, this.lateral.height, 120,'nube');

     nubechica.animations.add('n1', [0, 1,2]);
     nubechica.animations.play('n1', 4, true); 
     nubeGrande.animations.add('ng',[8])
     nubeGrande.animations.play('ng', 1, true);
     nubeConRayo.animations.add('nr',[4,5,6,7])
     nubeConRayo.animations.play('nr', 1, true);
     nubeConRayo2.animations.add('nr2',[4,5])
     nubeConRayo2.animations.play('nr2', 1, true);
     nubeConRayo3.animations.add('nr3',[1,2,3])
     nubeConRayo3.animations.play('nr3', 2, true);
     
    }

    crearLluvia(){

        let gotas = this.lateral.add.bitmapData(15, 50);

        gotas.ctx.rect(0, 5, 5, 20);
        gotas.ctx.fillStyle = '#9cc9de';
        gotas.ctx.fill();

        this.emisor = this.lateral.add.emitter(this.lateral.world.centerX, -300, 400);

        this.emisor.width = this.lateral.world.width;
        this.emisor.angle = 25;

        this.emisor.makeParticles(gotas);

        this.emisor.minParticleScale = 0.1;
        this.emisor.maxParticleScale = 0.7;

        this.emisor.setYSpeed(600, 1000);
        this.emisor.setXSpeed(-5, 5);

        this.emisor.minRotation = 0;
        this.emisor.maxRotation = 0;

        this.emisor.start(false, 1600, 5, 0);

    }

    /*************************************************************************
     * FUNCIONES AUXILIARES UPDATE
     *************************************************************************/



     /*************************************************************************
     * FUNCIONES AUXILIARES 
     *************************************************************************/
    

}
