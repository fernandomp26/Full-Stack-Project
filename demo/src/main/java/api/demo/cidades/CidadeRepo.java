package api.demo.cidades;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CidadeRepo extends CrudRepository<Cidade, Integer> {

    @Query("SELECT c FROM Cidade c WHERE c.pais = :pais")
    Iterable<Cidade> findByPais(@Param("pais") String pais);

}

