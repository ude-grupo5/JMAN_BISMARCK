package Logica;

public class BarcoHood extends Barco{

    private Coordenadas coord;
    private int vision;

    public BarcoHood(String id, Coordenadas coord, int vision){
        super();
        setId("Hood");
        setCoordenadas(coord);
        setVision(vision);
        setVisible(true);
    }

    public Coordenadas getCoord() {
        return coord;
    }

    public void setCoord(Coordenadas coord) {
        this.coord = coord;
    }

}
