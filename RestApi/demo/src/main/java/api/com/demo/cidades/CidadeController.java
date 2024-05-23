package api.com.demo.cidades;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
public class CidadeController {

    @Autowired
    private CidadeRepo cidadeRepo;

    @GetMapping("/api/cidades")
	Iterable<Cidade> getCidades() {
		return cidadeRepo.findAll();
	}
	
	@GetMapping("/api/cidades/{id}")
	Optional<Cidade> getCidade(@PathVariable int id) {
		return cidadeRepo.findById(id);
	}

	@GetMapping("/api/cidades/cidade")
	Iterable<Cidade> getCidadesByPais(@RequestParam(name = "pais") String pais) {
		return cidadeRepo.findByPais(pais);
	}
	
	@PostMapping("/api/cidades")
	Cidade createCidade(@RequestBody Cidade c) {
		Cidade createdCid = cidadeRepo.save(c);
		return createdCid;
	}
	
	@PutMapping("/api/cidades/{id}")
	Optional<Cidade> updateCidade(@PathVariable int id, @RequestBody Cidade cidadeRequest) {
		Optional<Cidade> opt = cidadeRepo.findById(id);
		if (opt.isPresent()) {
			if (cidadeRequest.getId() == id) {
				cidadeRepo.save(cidadeRequest);
				return opt;
			}
		}
		throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Erro ao alterar dados da faculdade com id " + id);
	}	
	
	@DeleteMapping("/api/cidades/{id}")
	void deleteCidade(@PathVariable int id) {
		cidadeRepo.deleteById(id);
	}	

}