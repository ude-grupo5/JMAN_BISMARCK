package Logica;

public class Jugadores extends Diccionario<String, Jugador> {

    public Jugadores(){
        super();
    }


    public boolean existeJugador (String id){
        return this.member(id);
    }

    public void agregarJugador(Jugador jugador){
        this.insert(jugador.getNombre(), jugador);
    }

    public void borrarJugador(String id){
        this.remove(id);
    }

    public Jugador buscarJugador(String id){
        return this.find(id);
    }

    public int cantidadJugadores(){
        return this.Diccio.size();
    }
}
