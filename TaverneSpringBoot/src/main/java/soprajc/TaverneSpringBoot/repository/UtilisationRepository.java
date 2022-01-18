package soprajc.TaverneSpringBoot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import soprajc.TaverneSpringBoot.model.inventaire.Boisson;
import soprajc.TaverneSpringBoot.model.inventaire.Utilisation;

@Repository
public interface UtilisationRepository extends JpaRepository<Utilisation, Long>{
	
	public List<Utilisation> findAllByBoisson(Boisson boisson);
	public List<Utilisation> deleteByBoisson(Boisson boisson);

}
