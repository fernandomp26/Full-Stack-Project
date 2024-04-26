package ps2.restapi;

public class Cidade {
	private int id;
	private String nome;
	private String estado;
	private String pais;
	private int populacao;
		
	public Cidade() {}
	
	public Cidade(String n, String e, String pais, int p) {
		this.nome = n;
		this.estado = e;
		this.pais = pais;
		this.populacao = p;
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

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getPais() {
		return pais;
	}

	public void setPais(String pais) {
		this.pais = pais;
	}

	public int getPopulacao() {
		return populacao;
	}

	public void setPopulacao(int populacao) {
		this.populacao = populacao;
	}

}
