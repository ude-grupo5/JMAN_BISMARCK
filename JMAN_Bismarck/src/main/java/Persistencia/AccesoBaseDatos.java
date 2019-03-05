package Persistencia;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class AccesoBaseDatos {

    String driver;
    String url;
    String user;
    String password;

    public Connection Conectar () throws FileNotFoundException, IOException {
        Connection con = null;
        try
        {
            String driver = this.driver;
            Class.forName(driver);
            con = DriverManager.getConnection(this.url, this.user, this.password);
        }
        catch (ClassNotFoundException e)
        {
            e.getMessage();
        }
        catch (SQLException e)
        {
            e.getMessage();
        }

        return con;
    }


    public void Desconectar (Connection con) throws SQLException {
        /* Cierro la conexion con la base de datos */
        con.close();
    }


    public String getDriver() {
        return driver;
    }

    public void setDriver(String driver) {
        this.driver = driver;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
