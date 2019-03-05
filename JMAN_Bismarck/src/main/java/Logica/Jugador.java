package Logica;

public class Jugador {

    private String nombre;
    private Barco barco;

    public Jugador (String nom){
        this.nombre = nom;
        this.barco=null;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Barco getBarco() {
        return barco;
    }

    public void setBarco(String n, Coordenadas c, int v) {
        if (n.equals("Bismarck")){
            this.barco = new BarcoBismarck(n, c, v);
        }
        else if (n.equals("Hood")){
            this.barco = new BarcoHood(n, c, v);
        }
    }

    public void actualizarCoord(Coordenadas coord){
        if (this.barco !=null){
            this.barco.setCoordenadas(coord);
        }
    }

}
