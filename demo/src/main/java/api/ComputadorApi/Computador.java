public class Computador {

    private long id;
    private String marca;
    private String processador;
    private int ram;
    private int disco;

    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
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