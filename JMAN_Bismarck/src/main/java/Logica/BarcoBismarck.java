package Logica;

public class BarcoBismarck extends Barco {

    private Coordenadas coord;

    public BarcoBismarck(String id, Coordenadas coord, int vision){
        super();
        setId("Bismarck");
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
