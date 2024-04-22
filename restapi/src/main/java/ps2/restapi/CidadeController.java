package ps2.restapi;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
class CidadeController {

	private List<Cidade> cidades;

	public CidadeController() {
		this.cidades = new ArrayList<>();
	}

	@GetMapping("/api/cidades")
	Iterable<Cidade> getCidades() {
		return this.cidades;
	}
	
	@GetMapping("/api/cidades/{id}")
	Optional<Cidade> getCidade(@PathVariable UUID id) {
		for (Cidade c : cidades) {
			if (c.getId() == id) {
				return Optional.of(c);
			}
		}
		return Optional.empty();
	}
	
	@PostMapping("/api/cidades")
	Cidade createCidade(@RequestBody Cidade c) {
		c.setId(UUID.randomUUID());
		cidades.add(c);
		return c;
	}
	
	@PutMapping("/api/cidades/{professorId}")
	Optional<Cidade> updateCidade(@RequestBody Cidade cidadeRequest, @PathVariable UUID cidadeId) {
		Optional<Cidade> opt = this.getCidade(cidadeId);
		if (opt.isPresent()) {
			Cidade cidade = opt.get();
			cidade.setNome(cidadeRequest.getNome());
			cidade.setEstado(cidadeRequest.getEstado());
			cidade.setPais(cidadeRequest.getPais());
			cidade.setPopulacao(cidadeRequest.getPopulacao());
		}
		return opt;				
	}	
	
	@DeleteMapping(value = "/api/cidades/{id}")
	void deleteCidade(@PathVariable UUID id) {
		cidades.removeIf(c -> c.getId() == id);
	}		
}


