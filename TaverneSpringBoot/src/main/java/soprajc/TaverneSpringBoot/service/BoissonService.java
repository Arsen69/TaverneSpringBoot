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
	private BoissonRepository BoissonRepo;
	@Autowired
	private AlcoolRepository alcoolRepo;
	@Autowired
	private SoftRepository softRepo;
	@Autowired
	private BarRepository barRepo;
	@Autowired 
	private BarService barService;
	@Autowired
	private UtilisationService utilisationService;
	@Autowired
	private UtilisationRepository utilisationRepo;
	
	
	//CREATE
	
	public void create(Boisson boisson) {
		if (boisson.getNom() == null) {
			throw new BoissonException();
		}
		BoissonRepo.save(boisson);
	}
	
	public Alcool create(Alcool alcool) {
		if (alcool.getNom() == null) {
			throw new BoissonException();
		}
		Alcool a = BoissonRepo.save(alcool);
		Set<Utilisation> utils = alcool.getUtilisations();
		System.out.println(utils);
		utils.forEach( u -> {
			u.setBoisson(alcool);
			utilisationService.create(u);
		});
		return a;
	}
	
	public void create(Soft soft) {
		if (soft.getNom() == null) {
			throw new BoissonException();
		}
		Set<Utilisation> utils = soft.getUtilisations();
		for(Utilisation u : utils) {
			utilisationService.create(u);
		}
		BoissonRepo.save(soft);
	}
	
	//UPDATE
	
	public void update(Boisson boisson) {
		if (boisson.getId() == null) {
			throw new BoissonException();
		}
		Boisson boissonEnBase = getById(boisson.getId());
		boisson.setVersion(boissonEnBase.getVersion());
		
		BoissonRepo.save(boisson);
	}
	
	public void update(Alcool alcool) {
		if (alcool.getId() == null) {
			throw new BoissonException();
		}
		Alcool alcoolEnBase = getAlcoolById(alcool.getId());
		alcool.setVersion(alcoolEnBase.getVersion());
		
		BoissonRepo.save(alcool);
	}
	
	public void update(Soft soft) {
		if (soft.getId() == null) {
			throw new BoissonException();
		}
		Soft softEnBase = getSoftById(soft.getId());
		soft.setVersion(softEnBase.getVersion());
		
		BoissonRepo.save(soft);
	}

	public void suppression(Boisson boisson) {
		//Check.checkLong(boisson.getId());
		List <Utilisation> UtilisationEnBase = utilisationRepo.findAllByBoisson(boisson);
		Boisson BoissonEnBase = BoissonRepo.findById(boisson.getId()).orElseThrow(BoissonException::new);
//		boissonRepo.deleteByBar(BoissonEnBase);
		BoissonRepo.delete(BoissonEnBase);
		utilisationService.delete(UtilisationEnBase);
		
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
		return BoissonRepo.findAllByBar(barService.getById(id));
	}
	
	
	
	public List<Boisson> getAll() {
		return BoissonRepo.findAll();
	}
	
	public Boisson getById(Long id) {
		Check.checkLong(id);
		return BoissonRepo.findById(id).orElseThrow(BoissonException::new);
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
