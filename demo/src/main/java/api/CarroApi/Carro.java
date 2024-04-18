public class Carro {

    private long id;
    private String modelo;
    private String marca;
    private int ano;
    private String categoria;

    public Carro(){}
    
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    public String getModelo() {
        return modelo;
    }
    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getMarca() {
        return marca;
    }
    public void getMarca(String marca) {
        this.marca = marca;
    }

    public int getAno() {
        return ano;
    }
    public void setAno() {
        this.ano = ano;
    }

    public String categoria() {
        return categoria;
    }
    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

}