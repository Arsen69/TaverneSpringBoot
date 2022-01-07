package soprajc.TaverneSpringBoot.repository;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import soprajc.TaverneSpringBoot.model.comptes.Client;
import soprajc.TaverneSpringBoot.model.fonctionnalitees.CarteFidelite;

public interface CarteFideliteRepository extends JpaRepository<CarteFidelite, Long> {
	
	@Transactional
	@Modifying
	@Query("update CarteFidelite cf set cf.nbPoints=:pts where cf.id=:id")
	void updateNbPoints(@Param("id") Long id, @Param("pts")int points);
	
	@Transactional
	@Modifying
	@Query("update CarteFidelite cf set cf.owner=:client where cf.id=:id")
	void updateClient(@Param("id") Long id, @Param("client")Client client);
		
	Optional<CarteFidelite> findByOwner(Client owner);

}
