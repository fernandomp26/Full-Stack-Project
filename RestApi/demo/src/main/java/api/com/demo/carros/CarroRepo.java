package api.com.demo.carros;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface CarroRepo extends CrudRepository<Carro, Integer> {

    @Query("SELECT c FROM Carro c WHERE c.brand = :brand")
    Iterable<Carro> findByBrand(@Param("brand") String brand);
    
}

