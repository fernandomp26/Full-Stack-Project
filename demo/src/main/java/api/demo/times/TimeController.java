package api.demo.times;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
public class TimeController {

    @Autowired
    private TimeRepo timeRepo;

    @GetMapping("/api/times")
	Iterable<Time> getTimes() {
		return timeRepo.findAll();
	}
	
	@GetMapping("/api/times/{id}")
	Optional<Time> getTime(@PathVariable int id) {
		return timeRepo.findById(id);
	}

	@GetMapping("/api/times/time")
	Iterable<Time> getTimeByEstado(@RequestParam(name = "estado") String estado) {
		return timeRepo.findByEstado(estado);
	}
	
	@PostMapping("/api/times")
	Time createTime(@RequestBody Time t) {
		Time createdTime = timeRepo.save(t);
		return createdTime;
	}
	
	@PutMapping("/api/times/{timeId}")
	Optional<Time> updateTime(@RequestBody Time timeRequest, @PathVariable int timeId) {
		Optional<Time> opt = timeRepo.findById(timeId);
		if (opt.isPresent()) {
			if (timeRequest.getId() == timeId) {
				timeRepo.save(timeRequest);
				return opt;
			}
		}
		throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Erro ao alterar dados do time com id " + timeId);
	}	
	
	@DeleteMapping("/api/times/{id}")
	void deleteTime(@PathVariable int id) {
		timeRepo.deleteById(id);
	}	

}