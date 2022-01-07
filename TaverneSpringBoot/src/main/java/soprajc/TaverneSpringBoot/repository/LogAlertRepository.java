package soprajc.TaverneSpringBoot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import soprajc.TaverneSpringBoot.model.inventaire.LogAlerte;

public interface LogAlertRepository extends JpaRepository<LogAlerte, Long>{
	
	

}
