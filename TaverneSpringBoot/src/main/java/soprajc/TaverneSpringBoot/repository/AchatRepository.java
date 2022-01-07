package soprajc.TaverneSpringBoot.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import soprajc.TaverneSpringBoot.model.comptes.Client;
import soprajc.TaverneSpringBoot.model.fonctionnalitees.Achat;

public interface AchatRepository extends JpaRepository<Achat, Long>{

	
	Optional<Achat> findById(Long id);
	
	Optional<Achat> findByDateAchat(LocalDate dateAchat);
	
	Optional<Achat> findByClientAndId(Client client, Long id);
	
	List<Achat> findAllByClient(Client client);

}
