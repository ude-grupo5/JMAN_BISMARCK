package Logica;

public class Canion {

    private String id;
    private int alcance;
    private int balas;
    private Coordenadas coordenadas;
    private boolean activa;
    private boolean disparar;

    public Canion() {
        super();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getAlcance() {
        return alcance;
    }

    public void setAlcance(int alcance) {
        this.alcance = alcance;
    }

    public int getBalas() {
        return balas;
    }

    public void setBalas(int balas) {
        this.balas = balas;
    }

    public Coordenadas getCoordenadas() {
        return coordenadas;
    }

    public void setCoordenadas(Coordenadas coordenadas) {
        this.coordenadas = coordenadas;
    }

    public boolean isActiva() {
        return activa;
    }

    public void setActiva(boolean activa) {
        this.activa = activa;
    }

    public boolean isDisparar() {
        return disparar;
    }

    public void setDisparar(boolean disparar) {
        this.disparar = disparar;
    }

}
