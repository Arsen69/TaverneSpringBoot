package soprajc.TaverneSpringBoot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import soprajc.TaverneSpringBoot.exception.BoissonException;
import soprajc.TaverneSpringBoot.model.inventaire.Boisson;
import soprajc.TaverneSpringBoot.model.inventaire.Utilisation;
import soprajc.TaverneSpringBoot.repository.UtilisationRepository;

@Service
public class UtilisationService {
	
	@Autowired
	UtilisationRepository utilisationRepo;
	@Autowired
	BoissonService boissonService;
	
	public List<Utilisation> getAllByBoisson(Boisson boisson){
		Check.checkLong(boisson.getId());
		return utilisationRepo.findAllByBoisson(boisson);
	}
	
	public Utilisation create(Utilisation util) {
		Check.checkLong(util.getBoisson().getId());
		Check.checkLong(util.getIngredient().getIdStock());
		return utilisationRepo.save(util);
	}
	
//	public void delete(Long id) {
//		//Check.checkLong(boisson.getId());
//		List <Utilisation> UtilisationEnBase = utilisationRepo.findAllByBoisson(boissonService.getById(id));
////		boissonRepo.deleteByBar(BoissonEnBase);
//		utilisationRepo.delete(UtilisationEnBase);
//	}
	
	public void delete(List<Utilisation> utils) {
		delete(utils);
	}
	
	

}
