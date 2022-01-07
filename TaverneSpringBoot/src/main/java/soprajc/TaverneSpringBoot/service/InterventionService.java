package soprajc.TaverneSpringBoot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import soprajc.TaverneSpringBoot.repository.InterventionRepository;

@Service
public class InterventionService {
	
	@Autowired
	private InterventionRepository interventionRepo;
	
}
