package soprajc.TaverneSpringBoot.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import soprajc.TaverneSpringBoot.model.comptes.Client;
import soprajc.TaverneSpringBoot.model.fonctionnalitees.CarteFidelite;

public interface ClientRepository extends JpaRepository<Client, Long> {
	
//	@Transactional
//	@Modifying
//	@Query("update Compte c set c.carte=:carte where c.id=:id")
//	void updateCarte(@Param("id") Long id, @Param(":carte")CarteFidelite carte);
//	
//	@Query("from Compte c left join fetch compte.carte as carteF where carteF.nbPoints=<:pts")
//	List<Compte> findLessPoints(@Param("pts") int pts);
//	
//	@Query("from Compte c left join fetch compte.carte as carteF where carteF.nbPoints=>:pts")
//	List<Compte> findMorePoints(@Param("pts") int pts);

}
