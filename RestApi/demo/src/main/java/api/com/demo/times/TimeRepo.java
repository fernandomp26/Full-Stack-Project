package api.com.demo.times;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;

@Repository
public interface TimeRepo extends CrudRepository<Time, Integer> {

    @Query("SELECT t FROM Time t WHERE t.fundacao = :fundacao")
    Iterable<Time> findByFundacao(@Param("fundacao") int fundacao);

}
