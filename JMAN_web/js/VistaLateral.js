export default class VistaLateral {

    /**
     * Constructor
     * @param {Phaser.Game} lateral El juego con vista lateral
     */
    constructor(lateral,barcoJugador,barcoEnemigo) {

        this.lateral = lateral;
        // barcos
        this._barcoJugador = barcoJugador.nombre;
        this._barcoEnemigo = barcoEnemigo.nombre;

        
        //posiciones
        this._posXJugador = barcoJugador.x;
        this._posYJugador = barcoJugador.y;
        this._posXEnemigo = barcoEnemigo.x;
        this._posYEnemigo = barcoEnemigo.y;

        //escala
        this._escala = null;

        // animaciones
        this.explosiones = null;

    }

    /*************************************************************************
     * FUNCIONES ESTANDAR DE PHASER
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
        this.crearBarcoJugador();  
        this.crearBarcoEnemigo();

    }

    update() {	
        /*
        EL angulo es para la vision del barco enemigo (8 angulos)
        El escalado es para mostrar mas cerca o mas lejos el barco (mostrar distancia)
        */
        //this.procesarVisibilidadEnemigo();
        //console.log (this._barcoJugador.angulo);
        //console.log (this._barcoEnemigo.angulo);

       
    }

    /*************************************************************************
     * FUNCIONES AUXILIARES PRELOAD
     *************************************************************************/

    cargarImagenes() {
        this.lateral.load.image('escenarioLateral', 'sprites/lateral.png');
        this.lateral.load.spritesheet('nube', 'sprites/nube.png',64,128);
        this.lateral.load.image('BismarkProa', 'sprites/Bismarck/proa_bismarck.png');
        this.lateral.load.image('HoodProa', 'sprites/Hood/proa_hood.png');
        this.lateral.load.spritesheet('oceano', 'sprites/agua.png', 32, 400, 32);

        /* imagenes de barco enemigo*/
        
        //BISMARCK
        this.lateral.load.image('BF','sprites/Bismarck/Bismarck_frontal.png');
        this.lateral.load.image('BF45','sprites/Bismarck/Bismarck_Frontal_45º.png');
        this.lateral.load.image('BF_45','sprites/Bismarck/Bismarck_Frontal_-45º.png');
        this.lateral.load.image('BLD','sprites/Bismarck/Bismarck_Lateral_Derecha.png');
        this.lateral.load.image('BLI','sprites/Bismarck/Bismarck_Lateral_Izquierda.png');
        this.lateral.load.image('BT','sprites/Bismarck/Bismarck_Trasera.png');
        this.lateral.load.image('BT45','sprites/Bismarck/Bismarck_Trasera_45º.png');
        this.lateral.load.image('BT_45','sprites/Bismarck/Bismarck_Trasera_-45º.png');

        //HOOD
        this.lateral.load.image('HF','sprites/Hood/Hood_frontal.png');
        this.lateral.load.image('HF45','sprites/Hood/Hood_frontal_45º.png');
        this.lateral.load.image('HF_45','sprites/Hood/Hood_frontal_-45º.png');
        this.lateral.load.image('HLD','sprites/Hood/Hood_lateral_derecha.png');
        this.lateral.load.image('HLI','sprites/Hood/Hood_lateral_izquierda.png');
        this.lateral.load.image('HT','sprites/Hood/Hood_trasera.png');
        this.lateral.load.image('HT45','sprites/Hood/Hood_trasera_45º.png');
        this.lateral.load.image('HT_45','sprites/Hood/Hood_trasera_-45º.png');
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

    crearBarcoJugador() {
        if (this._barcoJugador == "Bismarck") {
            this._barcoJugador = this.lateral.add.sprite(90, 302,'BismarkProa');
            this._barcoJugador.scale.setTo(1.0,1.0);
        } else if (this._barcoJugador == "Hood") {
            this._barcoJugador = this.lateral.add.sprite(90, 332,'HoodProa');
            this._barcoJugador.scale.setTo(0.9,0.9);
        }        
    }    

    crearBarcoEnemigo(){
        //maximo ancho 450 y maximo largo 300 para lograr ver las imagenes del enemigo

        //let barco2 = this.lateral.add.sprite(50, this.lateral.height-230,'HF_45');
       // barco2.scale.setTo(0.2,0.5);

        this.crearSpriteEnemigo(this._barcoEnemigo,"LateralD",-45,50,this.lateral.height-230, 0.45);

    }

    crearSpriteEnemigo(barco,orientacion,angulo,posx,posy, escala){

        let b = null;
        
        if (barco == "Bismarck") {
            if(orientacion == "Frente" && angulo == 0){
                b = this.lateral.add.sprite(posx, posy,'BF');
                b.scale.setTo(escala,escala);
            }else if (orientacion == "Frente" && angulo == 45){
                b = this.lateral.add.sprite(posx, posy,'BF45');
                b.scale.setTo(escala,escala);
            }else if (orientacion == "Frente" && angulo == -45){
                b = this.lateral.add.sprite(posx, posy,'BF_45');
                b.scale.setTo(escala,escala);
            }else if(orientacion == "Trasera" && angulo == 0){
                b = this.lateral.add.sprite(posx, posy,'BT');
                b.scale.setTo(escala,escala);
            }else if (orientacion == "Trasera" && angulo == 45){
                b = this.lateral.add.sprite(posx, posy,'BT45');
                b.scale.setTo(escala,escala);
            }else if (orientacion == "Trasera" && angulo == -45){
                b = this.lateral.add.sprite(posx, posy,'BT_45');
                b.scale.setTo(escala,escala);
            }else if (orientacion == "LateralI"){
                b = this.lateral.add.sprite(posx, posy,'BLI');
                b.scale.setTo(escala,escala);
            }else if (orientacion == "LateralD"){
                b = this.lateral.add.sprite(posx, posy,'BLD');
                b.scale.setTo(escala,escala);
            }
        
        }else if (barco == "Hood"){
            if(orientacion == "Frente" && angulo == 0){
                b = this.lateral.add.sprite(posx, posy,'HF');
                b.scale.setTo(escala,escala);
            }else if (orientacion == "Frente" && angulo == 45){
                b = this.lateral.add.sprite(posx, posy,'HF45');
                b.scale.setTo(escala,escala);
            }else if (orientacion == "Frente" && angulo == -45){
                b = this.lateral.add.sprite(posx, posy,'HF_45');
                b.scale.setTo(escala,escala);
            }else if (orientacion == "Trasera" && angulo == 0){
                b = this.lateral.add.sprite(posx, posy,'HT');
                b.scale.setTo(escala,escala);
            }else if (orientacion == "Trasera" && angulo == 45){
                b = this.lateral.add.sprite(posx, posy,'HT45');
                b.scale.setTo(escala,escala);
            }else if (orientacion == "Trasera" && angulo == -45){
                b = this.lateral.add.sprite(posx, posy,'HT_45');
                b.scale.setTo(escala,escala);
            }else if (orientacion == "LateralI"){
                b = this.lateral.add.sprite(posx, posy,'HLI');
                b.scale.setTo(escala,escala);
            }else if (orientacion == "LateralD"){
                b = this.lateral.add.sprite(posx, posy,'HLD');
                b.scale.setTo(escala,escala);
            }

        }
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
        this.emisor.angle = 5;

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
    actualizarPosicionEnemigo(){

    }

    procesarVisibilidadEnemigo() {
 
        let distancia = this.ObtenerDistanciaEntreBarcos(this._barcoJugador, this._barcoEnemigo);
            if (distancia < 350) {
                if(distancia >= 325 && distancia <= 349){
                    this._escala = 0.05;
                } else if(distancia >= 300 && distancia <= 324){
                    this._escala = 0.1;
                }else if(distancia >= 250 && distancia <= 299){
                    this._escala = 0.15;
                }else if(distancia >= 200 && distancia <= 249){
                    this._escala = 0.20;
                }else if(distancia >= 170 && distancia <= 199){
                    this._escala = 0.25;
                }else if(distancia >= 150 && distancia <= 169){
                    this._escala = 0.30;
                }else if(distancia >= 125 && distancia <= 149){
                    this._escala = 0.35;
                }else if(distancia >= 100 && distancia <= 124){
                    this._escala = 0.40;
                }else if(distancia >= 50 && distancia <= 99){
                    this._escala = 0.45;
                }else if(distancia >= 20 && distancia <= 49){
                    this._escala = 0.50;
                }else if(distancia >= 0 && distancia <= 19){
                    this._escala = 0.55;
                }
            } 
    }

    ObtenerDistanciaEntreBarcos(barcoA, barcoB) {
        return Phaser.Math.distance(
            barcoA.x,
            barcoA.y,
            barcoB.x,
            barcoB.y
        );
    }


     /*************************************************************************
     * FUNCIONES AUXILIARES 
     *************************************************************************/
}
