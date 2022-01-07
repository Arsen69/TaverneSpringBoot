package soprajc.TaverneSpringBoot.repository;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import soprajc.TaverneSpringBoot.model.comptes.Compte;

public interface CompteRepository extends JpaRepository<Compte, Long> {
	
	@Query("from Admin")
	List<Compte> findAdmin();
	
	@Query("from Client")
	List<Compte> findClient();
	
	@Query("from Employe")
	List<Compte> findEmploye();
	
	@Query("from Fournisseur")
	List<Compte> findFournisseur();
	
	@Query("from Intervenant")
	List<Compte> findIntervenant();
	
	List<Compte> findByNom(String nom);
	
	Optional<Compte> findByLogin(String login);

	@Transactional
	@Modifying
	@Query("update Compte c set c.nom=:nom where c.id=:id")
	void updateNom(@Param("id") Long id, @Param("nom")String nom);
	
	@Transactional
	@Modifying
	@Query("update Compte c set c.prenom=:prenom where c.id=:id")
	void updatePrenom(@Param("id") Long id, @Param("prenom")String prenom);
	
	@Transactional
	@Modifying
	@Query("update Compte c set c.login=:login where c.id=:id")
	void updateLogin(@Param("id") Long id, @Param("login") String login);
	
	@Transactional
	@Modifying
	@Query("update Compte c set c.password=:password where c.id=:id")
	void updatePassword(@Param("id") Long id, @Param("password") String password);
	
	@Transactional
	@Modifying
	@Query("update Compte c set c.mail=:mail where c.id=:id")
	void updateMail(@Param("id") Long id, @Param("mail") String mail);
	
	@Transactional
	@Modifying
	@Query("delete Compte c where c.id=:id")
	void deleteById(@Param("id") Long id);
}
