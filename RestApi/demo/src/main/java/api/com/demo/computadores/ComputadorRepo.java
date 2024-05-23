package api.com.demo.computadores;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ComputadorRepo extends CrudRepository<Computador, Integer> {

    @Query("SELECT c FROM Computador c WHERE c.marca = :marca")
    Iterable<Computador> findByMarca(@Param("marca") String marca);

}
