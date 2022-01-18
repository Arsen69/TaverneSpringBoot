package soprajc.TaverneSpringBoot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import soprajc.TaverneSpringBoot.exception.CompteException;
import soprajc.TaverneSpringBoot.model.comptes.Admin;
import soprajc.TaverneSpringBoot.model.comptes.Client;
import soprajc.TaverneSpringBoot.model.comptes.Compte;
import soprajc.TaverneSpringBoot.model.comptes.Employe;
import soprajc.TaverneSpringBoot.model.comptes.Intervenant;
import soprajc.TaverneSpringBoot.repository.AchatRepository;
import soprajc.TaverneSpringBoot.repository.BarRepository;
import soprajc.TaverneSpringBoot.repository.CompteRepository;
import soprajc.TaverneSpringBoot.repository.EvenementRepository;

@Service
public class CompteService {

	@Autowired
	private CompteRepository compteRepo;

	@Autowired
	private CarteFideliteService carteFideliteService;
	
	@Autowired
	private AchatRepository achatRepo;
	
	@Autowired
	private BarRepository barRepo;
	
	@Autowired
	private EvenementRepository eventsRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	private void encode(Compte compte) {
		compte.setPassword(passwordEncoder.encode(compte.getPassword()));
	}
	
	public Compte getByLogin(String login) {
		Check.checkString(login);
		return compteRepo.findByLogin(login).orElseThrow(CompteException::new);
	}
	
//	public Compte getAllByTypeCompte(String type) {
//		if (type != "Admin" || type != "Client" || type != "Fournisseur" || type != "Employe"
//				|| type != "Intervenant") {
//			throw new CompteException();
//		}
//		return compteRepo.findByTypeCompte(type);
//	}

	public void creationClient(Client compte) {
		checkCompte(compte);
		encode(compte);
		compte.setPassword(passwordEncoder.encode(compte.getPassword()));
		compteRepo.save(compte);
	}
	
	public void creationAdmin(Admin compte) {
		checkCompte(compte);
		encode(compte);
		compteRepo.save(compte);
	}
	
	public void creationEmploye(Employe compte) {
		checkCompte(compte);
		encode(compte);
		compteRepo.save(compte);
	}
	
	public void creationIntervenant(Intervenant compte) {
		checkCompte(compte);
		encode(compte);
		compteRepo.save(compte);
	}
	
	public void checkCompte(Compte compte) {
		Check.checkString(compte.getNom());
		Check.checkString(compte.getPrenom());
		Check.checkString(compte.getLogin());
		Check.checkString(compte.getPassword());
		Check.checkString(compte.getMail());
	}

	public void suppression(Compte compte) {
		Compte compteEnBase = null;
		Check.checkLong(compte.getId());
		compteEnBase = compteRepo.findById(compte.getId()).orElseThrow(CompteException::new);
		compteRepo.deleteById(compteEnBase.getId());
	}

	public void update(Compte compte) {
		if (compte.getId() == null) {
			throw new CompteException();
		}
		Compte compteEnBase = getBy(compte.getId());
		updateRelation(compte);
		compte.setVersion(compteEnBase.getVersion());

		compteRepo.save(compte);
	}

	private void updateRelation(Compte compte) {
		String typeCompte = compte.getClass().getSimpleName();
		switch (typeCompte) {
		case "Admin":
			break;
		case "Client":
			if (((Client) compte).getCarte() != null && ((Client) compte).getCarte().getId() != null) {
				((Client) compte).setCarte(carteFideliteService.getBy(((Client) compte).getCarte().getId()));
			}
			if (((Client) compte).getAchats() != null) {
				((Client) compte).setAchats(achatRepo.findAllByClient((Client)compte));
			}
			break;
		case "Employe":
			if (((Employe) compte).getBar() != null && ((Employe) compte).getBar().getIdBar() != null) {
				((Employe) compte).setBar(barRepo.getById(((Employe) compte).getBar().getIdBar()));
			}
			if (((Employe) compte).getEvents() != null) {
				((Employe) compte).setEvents(eventsRepo.findByEmp((Employe)compte));
			}
			break;
		}
	}

	public Compte getBy(Long id) {
		Check.checkLong(id);
		return compteRepo.findById(id).orElseThrow(CompteException::new);
	}

	public List<Compte> getAll() {
		return compteRepo.findAll();
	}

}
