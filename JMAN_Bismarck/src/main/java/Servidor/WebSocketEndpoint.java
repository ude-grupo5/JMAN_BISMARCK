package Servidor;

import Logica.Fachada;

import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonReader;
import javax.websocket.EncodeException;
import javax.websocket.OnClose;
import javax.websocket.OnError;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;

import java.io.IOException;
import java.io.StringReader;
import java.util.Set;
import java.util.concurrent.CopyOnWriteArraySet;

@ServerEndpoint(value = "/partida/")
public class WebSocketEndpoint {

    private Session session;
    private static final Set<WebSocketEndpoint> endpointsPartida = new CopyOnWriteArraySet<>();
    private Fachada fachada = new Fachada();

    @OnOpen
    public void onOpen(Session session, @PathParam("nombreJugador") String nombreJugador) throws IOException, EncodeException {

        this.session = session;
        endpointsPartida.add(this);
        /*JsonObject respuesta = fachada.partidaActiva(session);
        try {
            try {
                session.getBasicRemote().sendObject(respuesta);
            } catch (IOException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
        } catch (EncodeException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

*/
    }

    @OnMessage
    public void onMessage(Session session, String movimiento) throws IOException {
       /* String tipoMensaje = "";
        JsonObject respuesta = null;
        JsonReader lectura = Json.createReader(new StringReader(mensaje));

        JsonObject msj = lectura.readObject();
        lectura.close();

        tipoMensaje = msj.getString("tipo");

        switch (tipoMensaje) {
            case "movimiento":
                endpointsPartida.forEach(endpoint -> {
                    synchronized (endpoint) {
                        try {
                            endpoint.session.getBasicRemote()
                                    .sendObject(msj);
                        } catch (IOException e) {
                            e.printStackTrace();
                        } catch (EncodeException e) {
                            e.printStackTrace();
                        }
                    }
                });

            case "usuario":
                respuesta= fachada.insertarJugador(session,msj.getString("jugador"));
                try {
                    try {
                        session.getBasicRemote().sendObject(respuesta);
                    } catch (IOException e) {
                        // TODO Auto-generated catch block
                        e.printStackTrace();
                    }
                } catch (EncodeException e) {
                    // TODO Auto-generated catch block
                    e.printStackTrace();
                }
                break;

        }*/

            broadcast(movimiento);
    }

    @OnClose
    public void onClose(Session session) {

        endpointsPartida.remove(this);
    }

    @OnError
    public void onError(Session session, Throwable throwable) {
        // Do error handling here
    }

    private static void broadcast(String movimiento) {
        endpointsPartida.forEach(endpoint -> {
            synchronized (endpoint) {
                try {
                    endpoint.session.getBasicRemote()
                            .sendText(movimiento);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        });
    }
}
