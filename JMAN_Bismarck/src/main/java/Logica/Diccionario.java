package Logica;

import java.util.HashMap;
import java.util.Iterator;

public abstract class Diccionario <String,Objeto> {

    protected HashMap<String,Objeto> Diccio;
    //constructor
    public Diccionario()
    {
        Diccio = new HashMap<String, Objeto>();
    }

    public boolean member(String clave)
    {
        return Diccio.containsKey(clave);
    }

    public void insert(String clave, Objeto obj)
    {
        Diccio.put(clave, obj);
    }

    public Objeto find(String clave)
    {
        return Diccio.get(clave);
    }

    public void remove(String clave){
        Diccio.remove(clave);
    }

    public int cantElementos()
    {
        return Diccio.size();
    }

    public Iterator<Objeto> iterador(){

        Iterator<Objeto> i = Diccio.values().iterator();
        return i;
    }

}