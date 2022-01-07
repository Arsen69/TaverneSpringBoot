package soprajc.TaverneSpringBoot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import soprajc.TaverneSpringBoot.model.fonctionnalitees.Intervention;
import soprajc.TaverneSpringBoot.repository.InterventionRepository;

@Service
public class InterventionService {
	
	@Autowired
	private InterventionRepository interventionRepo;
	
	@Autowired
	private BarService barService;
	
	@Autowired
	private CompteService compteService;
	
	public void creationIntervention(Intervention intervention) {
		Check.checkLocalTime(intervention.gethDebut());
		Check.checkLocalTime(intervention.gethFin());
		Check.checkLocalDate(intervention.getDate());
		Check.checkString(intervention.getTypeIntervention());
		Check.checkString(intervention.getStatut().toString());
		compteService.checkCompte(intervention.getIntervenant());
		Check.checkLong(intervention.getBar().getIdBar());
		interventionRepo.save(intervention);		
	}
	
}
