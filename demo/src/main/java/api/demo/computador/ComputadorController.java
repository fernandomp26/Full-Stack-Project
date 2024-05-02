package api.demo.computador;

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
public class ComputadorController {

    @Autowired
    private ComputadorRepo computadorRepo;

    @GetMapping("/api/computadores")
	Iterable<Computador> getComputador() {
		return computadorRepo.findAll();
	}
	
	@GetMapping("/api/computadores/{id}")
	Optional<Computador> getComputador(@PathVariable int id) {
		return computadorRepo.findById(id);
	}

	@GetMapping("/api/computadores/computador")
	Iterable<Computador> getComputadorByRam(@RequestParam(name = "ram") int ram) {
		return computadorRepo.findByRam(ram);
	}
	
	@PostMapping("/api/computadores")
	Computador createComputador(@RequestBody Computador c) {
		Computador createdComp = computadorRepo.save(c);
		return createdComp;
	}
	
	@PutMapping("/api/computadores/{computadorId}")
	Optional<Computador> updateComputador(@RequestBody Computador computadorRequest, @PathVariable int computadorId) {
		Optional<Computador> opt = computadorRepo.findById(computadorId);
		if (opt.isPresent()) {
			if (computadorRequest.getId() == computadorId) {
				computadorRepo.save(computadorRequest);
				return opt;
			}
		}
		throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Erro ao alterar dados do computador com id " + computadorId);
	}	
	
	@DeleteMapping("/api/computadores/{id}")
	void deleteComputador(@PathVariable int id) {
		computadorRepo.deleteById(id);
	}	

}