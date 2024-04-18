public class Time {

    private long id;
    private String nome;
    private int anoFundacao;
    private String cidade;
    private String estado;

    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getAnoFundacao() {
        return anoFundacao;
    }
    public void setAnoFundacao(int anoFundacao) {
        this.anoFundacao = anoFundacao;
    }

    public String getCidade() {
        return cidade;
    }
    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getEstado() {
        return estado;
    }
    public void setEstado(String estado) {
        this.estado = estado;
    }

}