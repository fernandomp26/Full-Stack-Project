package api.demo.times;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface TimeRepo extends CrudRepository<Time, Integer> {

    @Query("SELECT t FROM Time t WHERE t.estado = :estado")
    Iterable<Time> findByEstado(@Param("estado") String estado);

}
