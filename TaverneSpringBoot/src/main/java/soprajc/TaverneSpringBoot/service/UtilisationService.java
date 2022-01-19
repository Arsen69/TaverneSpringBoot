package soprajc.TaverneSpringBoot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import soprajc.TaverneSpringBoot.exception.BoissonException;
import soprajc.TaverneSpringBoot.exception.UtilisationException;
import soprajc.TaverneSpringBoot.model.inventaire.Boisson;
import soprajc.TaverneSpringBoot.model.inventaire.Utilisation;
import soprajc.TaverneSpringBoot.repository.UtilisationRepository;

@Service
public class UtilisationService {
	
	@Autowired
	UtilisationRepository utilisationRepo;
	@Autowired
	BoissonService boissonService;
	
	public Utilisation getById(Long id) {
		Check.checkLong(id);
		return utilisationRepo.findById(id).orElseThrow(UtilisationException::new);
	}
	
	public List<Utilisation> getAllByBoisson(Boisson boisson){
		Check.checkLong(boisson.getId());
		return utilisationRepo.findAllByBoisson(boisson);
	}
	
	public Utilisation create(Utilisation util) {
		Check.checkLong(util.getBoisson().getId());
		Check.checkLong(util.getIngredient().getIdStock());
		return utilisationRepo.save(util);
	}
	public Utilisation update(Utilisation util) {
		Check.checkLong(util.getId());
		Check.checkLong(util.getBoisson().getId());
		Check.checkLong(util.getIngredient().getIdStock());
		Check.checkNegatif(util.getVolume());
		return utilisationRepo.save(util);
	}
	
	public void delete(Long id) {
		utilisationRepo.delete(getById(id));
	}
	
	public void delete(Utilisation util) {
		Check.checkLong(util.getId());
		utilisationRepo.delete(util);
	}
	
	public void delete(List<Utilisation> utils) {
		utils.forEach(u->{
			utilisationRepo.delete(u);			
		});
	}
	
	

}
