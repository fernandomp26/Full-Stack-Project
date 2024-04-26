package api.demo.cidades;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@PostMapping("/api/cidades")
	Cidade createCidade(@RequestBody Cidade c) {
		Cidade createdCid = cidadeRepo.save(c);
		return createdCid;
	}
	
	@PutMapping("/api/cidades/{cidadeId}")
	Optional<Cidade> updateCidade(@RequestBody Cidade cidadeRequest, @PathVariable int cidadeId) {
		Optional<Cidade> opt = cidadeRepo.findById(cidadeId);
		if (opt.isPresent()) {
			if (cidadeRequest.getId() == cidadeId) {
				cidadeRepo.save(cidadeRequest);
				return opt;
			}
		}
		throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Erro ao alterar dados da faculdade com id " + cidadeId);
	}	
	
	@DeleteMapping("/api/cidades/{id}")
	void deleteCidade(@PathVariable int id) {
		cidadeRepo.deleteById(id);
	}	

}