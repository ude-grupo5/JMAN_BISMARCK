package Logica;

import java.util.ArrayList;
import java.util.Date;

public class Partida {
/*
* estado de partida (en curso, pausado,terminado)
*
* */

    private int id;
    private Date fechaCreacion;
    private Date fechaGuardada;
    private boolean activa;
    private boolean pausada;
    private boolean terminada;
    private Jugadores jug;
    private Boolean barcoBismarckAsignado;
    private Boolean barcoHoodAsignado;

    public Partida(final int idPartida, final Jugadores j){
        this.id = idPartida;
        this.fechaCreacion = new java.sql.Date(System.currentTimeMillis());
        this.fechaGuardada = new Date(0);
        this.activa = true;
        this.pausada = false;
        this.terminada = false;
        this.barcoBismarckAsignado=false;
        this.barcoHoodAsignado=false;
        this.jug = j;
    }

    public Partida(final int idPartida,final Date fc, final Date fg,final boolean act, final boolean pau,
                   final boolean fin,Jugadores j,final Boolean b1, final Boolean b2) {

        this.id = idPartida;
        this.fechaCreacion = fc;
        this.fechaGuardada = fg;
        this.activa = act;
        this.pausada = pau;
        this.terminada = fin;
        this.jug = j;
        this.barcoBismarckAsignado = b1;
        this.barcoHoodAsignado = b2;
    }

    public void agregarJugador(Jugador j){
        jug.agregarJugador(j);

    }

    public void setearBarcoJugador(String jug, Barco barco, Coordenadas c, int vision) {

        switch (barco.getId()) {
            case "Bismarck":
                if (this.barcoBismarckAsignado == false){
                    this.jug.buscarJugador(jug).setBarco(barco.getId(),c,vision);
                    this.barcoBismarckAsignado = true;
                }
                break;
            case "Hood":
                if (this.barcoHoodAsignado == false){
                    this.jug.buscarJugador(jug).setBarco(barco.getId(),c,vision);
                    this.barcoHoodAsignado = true;
                }
                break;
            default:
        }

    }


    public String unirseAPartida (String nombreJug) {

        Barco barco = new Barco() {
        };

        // asignar barco que esté disponible a la nueva sesión.
        if (!this.barcoBismarckAsignado) {
            barco.setId("Bismarck");
        } else {
            if (!this.barcoHoodAsignado) {
                barco.setId("Hood");
            }
        }

        if (barco != null) {
            if (!jug.existeJugador(nombreJug)) {
                Jugador juga = new Jugador (nombreJug);
                jug.agregarJugador(juga);
            }
            int vision = 150;
            Coordenadas coords = new Coordenadas(0,0,0,0);
            this.setearBarcoJugador(nombreJug, barco, coords, vision);
        }
        return barco.getId();
    }


    private String resultadoPartida (Jugador j1, Jugador j2) {

        String resultado = "";

        Barco barco1 = this.jug.buscarJugador(j1.getNombre()).getBarco();
        Barco barco2 = this.jug.buscarJugador(j2.getNombre()).getBarco();

        if (barco1.isHundido()) {
            this.terminada = true;
            this.activa = false;
            resultado = "Gana barco2";

        }else if (barco2.isHundido()) {
            this.terminada = true;
            this.activa = false;
            resultado = "Gana barco1";
        }

        return resultado;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getFechaCreacion() {
        return fechaCreacion;
    }

    public void setFechaCreacion(Date fechaCreacion) {
        this.fechaCreacion = fechaCreacion;
    }

    public Date getFechaGuardada() {
        return fechaGuardada;
    }

    public void setFechaGuardada(Date fechaGuardada) {
        this.fechaGuardada = fechaGuardada;
    }

    public boolean isActiva() {
        return activa;
    }

    public void setActiva(boolean activa) {
        this.activa = activa;
    }

    public boolean isPausada() {
        return pausada;
    }

    public void setPausada(boolean pausada) {
        this.pausada = pausada;
    }

    public boolean isTerminada() {
        return terminada;
    }

    public void setTerminada(boolean terminada) {
        this.terminada = terminada;
    }
}
