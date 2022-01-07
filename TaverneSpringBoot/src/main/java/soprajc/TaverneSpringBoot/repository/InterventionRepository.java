package soprajc.TaverneSpringBoot.repository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import soprajc.TaverneSpringBoot.model.fonctionnalitees.Intervention;
import soprajc.TaverneSpringBoot.model.fonctionnalitees.StatutIntervention;

public interface InterventionRepository extends JpaRepository<Intervention, Long> {
	
	List<Intervention> findAll();
	
	Optional<Intervention> findByHDebut(LocalTime hDebut);
	
	Optional<Intervention> findByHFin(LocalTime hDebut);
	
	List<Intervention> findByDate(LocalDate date);
	
	List<Intervention> findByTypeIntervention(String type);
	
	List<Intervention> findByStatutIntervention(StatutIntervention statut);

}
