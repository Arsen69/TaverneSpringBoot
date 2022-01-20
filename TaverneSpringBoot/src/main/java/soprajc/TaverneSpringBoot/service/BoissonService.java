package soprajc.TaverneSpringBoot.service;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import soprajc.TaverneSpringBoot.exception.BoissonException;
import soprajc.TaverneSpringBoot.model.inventaire.Alcool;
import soprajc.TaverneSpringBoot.model.inventaire.Boisson;
import soprajc.TaverneSpringBoot.model.inventaire.Soft;
import soprajc.TaverneSpringBoot.model.inventaire.Utilisation;
import soprajc.TaverneSpringBoot.repository.AlcoolRepository;
import soprajc.TaverneSpringBoot.repository.BarRepository;
import soprajc.TaverneSpringBoot.repository.BoissonRepository;
import soprajc.TaverneSpringBoot.repository.SoftRepository;
import soprajc.TaverneSpringBoot.repository.UtilisationRepository;


//traitment
//service=> quelque chose qui fournit des fonctionnalites
@Service
public class BoissonService {

	@Autowired
	private BoissonRepository boissonRepo;
	@Autowired
	private AlcoolRepository alcoolRepo;
	@Autowired
	private SoftRepository softRepo;
	@Autowired 
	private BarService barService;
	@Autowired
	private UtilisationService utilisationService;
	@Autowired
	private AchatService achatService;
	
	public Alcool create(Alcool alcool) {
		if (alcool.getNom() == null) {
			throw new BoissonException();
		}
		Alcool a =boissonRepo.save(alcool);
		alcool.setTva(1.2);
		Set<Utilisation> utils = alcool.getUtilisations();
		utils.forEach( u -> {
			u.setBoisson(alcool);
			utilisationService.create(u);
		});
		return a;
		
	}
	
	public Soft create(Soft soft) {
		if (soft.getNom() == null) {
			throw new BoissonException();
		}
		Soft s = boissonRepo.save(soft);
		soft.setTva(1.1);
		Set<Utilisation> utils = soft.getUtilisations();
		utils.forEach( u -> {
			u.setBoisson(soft);
			utilisationService.create(u);
		});
		return s;
	}
	
	//UPDATE
	
	public Alcool update(Alcool alcool) {
		if (alcool.getId() == null) {
			throw new BoissonException();
		}
		Alcool alcoolEnBase = getAlcoolById(alcool.getId());
		alcool.setVersion(alcoolEnBase.getVersion());
		alcool.setTva(alcoolEnBase.getTva());
		Set<Utilisation> utils = alcool.getUtilisations();
		utils.forEach( u -> {
			u.setBoisson(alcool);
			if(u.getId()==null) {
				utilisationService.create(u);
			}else {
				utilisationService.update(u);
			}
			
		});
		return boissonRepo.save(alcool);
	}
	
	public Soft update(Soft soft) {
		if (soft.getId() == null) {
			throw new BoissonException();
		}
		Soft softEnBase = getSoftById(soft.getId());
		soft.setVersion(softEnBase.getVersion());
		soft.setTva(softEnBase.getTva());
		Set<Utilisation> utils = soft.getUtilisations();
		utils.forEach( u -> {
			u.setBoisson(soft);
			if(u.getId()==null) {
				utilisationService.create(u);
			}else {
				utilisationService.update(u);
			}
		});
		return boissonRepo.save(soft);
	}

	public void suppression(Boisson boisson) {
		Check.checkLong(boisson.getId());
		Set<Utilisation> utils = boisson.getUtilisations();
		utils.forEach( u -> {
			Check.checkLong(u.getId());
			Utilisation utilEnBase= utilisationService.getById(u.getId());
			utilisationService.delete(utilEnBase);
		});
		Boisson boissonEnBase = boissonRepo.findById(boisson.getId()).orElseThrow(BoissonException::new);
		achatService.deleteAllByBoisson(boissonEnBase);
		boissonRepo.delete(boissonEnBase);
		
	}
	
	public void suppression(Long id) {
		suppression(getById(id));
	}
	

	
	public List<Boisson> getAllByBar(Long id) {
//		try {BoissonRepo.findAllByBar(barService.getById(id));
//		}
//		catch(Exception e) {
//			System.out.println("L'id du bar saisi est inexistant");
//		}
		return boissonRepo.findAllByBar(barService.getById(id));
	}
	
	
	
	public List<Boisson> getAll() {
		return boissonRepo.findAll();
	}
	
	public Boisson getById(Long id) {
		Check.checkLong(id);
		return boissonRepo.findById(id).orElseThrow(BoissonException::new);
	}
	
	public Alcool getAlcoolById(Long id) {
		Check.checkLong(id);
		return alcoolRepo.findById(id).orElseThrow(BoissonException::new);
	}
	
	public Soft getSoftById(Long id) {
		Check.checkLong(id);
		return softRepo.findById(id).orElseThrow(BoissonException::new);
	}
	
	
	
	
	
}
