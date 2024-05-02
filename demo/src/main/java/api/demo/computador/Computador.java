package api.demo.computador;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="computadores")
public class Computador{
    @Id @GeneratedValue
    private int id;

    private String marca;
    private String processador;
    private int ram;
    private int disco;

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id=id;
    }

    public String getMarca() {
        return marca;
    }
    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getProcessador() {
        return processador;
    }
    public void setProcessador(String processador) {
        this.processador = processador;
    }

    public int getRam() {
        return ram;
    }
    public void setRam(int ram) {
        this.ram = ram;
    }

    public int getDisco() {
        return disco;
    }
    public void setDisco(int disco) {
        this.disco = disco;
    }

}
