package api.com.demo.carros;

import api.com.demo.computadores.Computador;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "carros")
public class Carro {
    @Id @GeneratedValue
    private int id;

    private String model;
    private String brand;
    private int year;
    private String category;

    @OneToOne(optional = false)
    private Computador computador;

    public Computador getComputador() {
        return computador;
    }

    public void setComputador(Computador computador) {
        this.computador = computador;
    }

    public Carro() {
        super();
    }

    public int getId(){
        return id;
    }

    public void setId(int id){
        this.id = id;
    }

    public String getModel(){
        return model;
    }

    public void setModel(String model){
        this.model = model;
    }

    public String getBrand(){
        return brand;
    }

    public void setBrand(String brand){
        this.brand = brand;
    }

    public int getYear(){
        return year;
    }

    public void setYear(int year){
        this.year = year;
    }

    public String getCategory(){
        return category;
    }

    public void setCategory( String category){
        this.category = category;
    }

}