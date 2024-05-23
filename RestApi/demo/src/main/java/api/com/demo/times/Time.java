package api.com.demo.times;

import api.com.demo.cidades.Cidade;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "times")
public class Time {

    @Id
    @GeneratedValue
    private int id;

    private String nome;
    private int fundacao;

    @ManyToOne(optional = false)
    private Cidade cidade;

    public Time() {
        super();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getAno() {
        return fundacao;
    }

    public void setAno(int fundacao) {
        this.fundacao = fundacao;
    }

    public Cidade getCidade() {
        return cidade;
    }

    public void setCidade(Cidade cidade) {
        this.cidade = cidade;
    }

}