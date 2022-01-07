package soprajc.TaverneSpringBoot.repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import soprajc.TaverneSpringBoot.model.comptes.Fournisseur;
import soprajc.TaverneSpringBoot.model.inventaire.Article;

public interface FournisseurRepository extends JpaRepository<Fournisseur, Long>{
	
	Optional<Fournisseur> findByNom(String nom);
	
	Optional<Fournisseur> findByMail(String mail);

	Optional<Fournisseur> findByEntreprise(String entreprise);
	
	//List<Fournisseur> findByCatalogue(Set<Article> catalogue);
}
