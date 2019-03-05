package Logica;

public abstract class Barco {

    private String id;
    private int vision;
    private Coordenadas coordenadas;
    private boolean hundido;
    private boolean visible;
    private int vida;

    public Barco () {
        vida=100;
        hundido=false;
        visible=true;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getVision() {
        return vision;
    }

    public void setVision(int vision) {
        this.vision = vision;
    }

    public Coordenadas getCoordenadas() {
        return coordenadas;
    }

    public void setCoordenadas(Coordenadas coordenadas) {
        this.coordenadas = coordenadas;
    }

    public boolean isHundido() {
        return hundido;
    }

    public void setHundido(boolean hundido) {
        this.hundido = hundido;
    }

    public boolean isVisible() {
        return visible;
    }

    public void setVisible(boolean visible) {
        this.visible = visible;
    }

    public int getVida() {
        return vida;
    }

    public void setVida(int vida) {
        this.vida = vida;
    }

    public void impactoDeBala () {

        vida = vida - 25;

        if (vida <= 0) {
            vida = 0;
            hundido = true;
        }
    }

}
