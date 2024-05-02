package api.demo.computador;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ComputadorRepo extends CrudRepository<Computador, Integer> {

    @Query("SELECT c FROM Computador c WHERE c.ram = :ram")
    Iterable<Computador> findByRam(@Param("ram") int ram);

}
