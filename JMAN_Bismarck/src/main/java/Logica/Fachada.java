package Logica;


import javax.json.Json;
import javax.json.JsonObject;
import javax.websocket.Session;

import java.io.IOException;

public class Fachada {


    private static Fachada instancia;
    private static Partida partidaActual = null;
    private static Jugadores jugadores= new Jugadores();
    private static boolean partidaEnCurso = false;
    private static int numPartida;

    //singleton
    public static synchronized Fachada getInstancia() {

        if(instancia==null)
        {
            instancia=new Fachada();
        }
        return instancia;
    }

    public Fachada() {

    }

    public JsonObject partidaActiva(Session session){

        JsonObject respuesta = null;

        if(Fachada.partidaEnCurso == true){
            respuesta = Json.createObjectBuilder()
                    .add("tipo", "activa")
                    .build();
        }else{
            respuesta = Json.createObjectBuilder()
                    .add("tipo", "inactiva")
                    .build();
        }

        return respuesta;

    }

    public  JsonObject insertarJugador(Session session,String jug){

        JsonObject respuesta = null;

        if(!Fachada.jugadores.member(jug)){
            Jugador j= new Jugador(jug);
            Fachada.jugadores.agregarJugador(j);
            respuesta = Json.createObjectBuilder()
                    .add("tipo", "usuarioOk")
                    .build();
        }else{
            respuesta = Json.createObjectBuilder()
                    .add("tipo", "usuarioError")
                    .build();
        }

        return respuesta;

    }

    public JsonObject CrearPartida(Session session) throws IOException {

        JsonObject respuesta = null;

        Fachada.numPartida++;
        Fachada.partidaActual = new Partida (numPartida,jugadores);
        Fachada.partidaEnCurso = true;

        return  respuesta;

    }

    public JsonObject unirseAPartida(Session session,String jug) {

        JsonObject respuesta = null;
        String barcoJugador = partidaActual.unirseAPartida (jug);

        return respuesta;

    }


}
