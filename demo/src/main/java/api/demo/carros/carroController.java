package api.demo.carros;
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
public class carroController {

    @Autowired
    private carroRepo carroRepo;

    @GetMapping("/api/carros")
	Iterable<carro> getCarro() {
		return carroRepo.findAll();
	}
	
	@GetMapping("/api/carros/{id}")
	Optional<carro> getCarro(@PathVariable int id) {
		return carroRepo.findById(id);
	}
	
	@PostMapping("/api/carros")
	carro createCarro(@RequestBody carro c) {
		carro createdCarro = carroRepo.save(c);
		return createdCarro;
	}
	
	@PutMapping("/api/carros/{carroId}")
	Optional<carro> updateCarro(@RequestBody carro carroRequest, @PathVariable int carroId) {
		Optional<carro> opt = carroRepo.findById(carroId);
		if (opt.isPresent()) {
			if (carroRequest.getId() == carroId) {
				carroRepo.save(carroRequest);
				return opt;
			}
		}
		throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Erro ao alterar dados do carro com id " + carroId);
	}	
	
	@DeleteMapping("/api/carros/{id}")
	void deleteCidade(@PathVariable int id) {
		carroRepo.deleteById(id);
	}	

}