package soprajc.TaverneSpringBoot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import soprajc.TaverneSpringBoot.exception.AchatException;
import soprajc.TaverneSpringBoot.exception.BoissonException;
import soprajc.TaverneSpringBoot.model.comptes.Client;
import soprajc.TaverneSpringBoot.model.fonctionnalitees.Achat;
import soprajc.TaverneSpringBoot.model.inventaire.Boisson;
import soprajc.TaverneSpringBoot.repository.AchatRepository;


@Service
public class AchatService {
	
	@Autowired
	private AchatRepository achatRepo;
	

	public void creation(Achat achat) {
//		if (achat.getId() == null) {
//			throw new BoissonException();
//		}
		achatRepo.save(achat);
	}

	public void suppression(Achat achat) {
		Achat achatEnBase = achatRepo.findById(achat.getId()).orElseThrow(AchatException::new);
//		boissonRepo.deleteByBar(BoissonEnBase);
		achatRepo.delete(achatEnBase);
	}

	public List<Achat> getAllByClient(Client client){
		Check.checkLong(client.getId());
		return achatRepo.findAllByClient(client);
	}

	public List<Achat> getAll() {
		return achatRepo.findAll();
	}

}
