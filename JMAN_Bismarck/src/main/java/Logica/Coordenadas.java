package Logica;

public class Coordenadas {

    private float posX;
    private float posY;
    private float rotacion;
    private float angulo;


    public Coordenadas(){

    }

    public Coordenadas (float x, float y, float rot, float ang) {

        this.posX=x;
        this.posY=y;
        this.rotacion=rot;
        this.angulo=ang;
    }

    public float getPosX() {
        return posX;
    }

    public void setPosX(float posX) {
        this.posX = posX;
    }

    public float getPosY() {
        return posY;
    }

    public void setPosY(float posY) {
        this.posY = posY;
    }

    public float getRotacion() {
        return rotacion;
    }

    public void setRotacion(float rotacion) {
        this.rotacion = rotacion;
    }

    public float getAngulo() {
        return angulo;
    }

    public void setAngulo(float angulo) {
        this.angulo = angulo;
    }
}
