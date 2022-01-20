package soprajc.TaverneSpringBoot.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import soprajc.TaverneSpringBoot.exception.AchatException;
import soprajc.TaverneSpringBoot.exception.BoissonException;
import soprajc.TaverneSpringBoot.model.comptes.Client;
import soprajc.TaverneSpringBoot.model.fonctionnalitees.Achat;
import soprajc.TaverneSpringBoot.model.inventaire.Alcool;
import soprajc.TaverneSpringBoot.model.inventaire.Boisson;
import soprajc.TaverneSpringBoot.model.inventaire.Soft;
import soprajc.TaverneSpringBoot.model.inventaire.Stock;
import soprajc.TaverneSpringBoot.model.inventaire.Utilisation;
import soprajc.TaverneSpringBoot.repository.AchatRepository;

@Service
public class AchatService {

	@Autowired
	private AchatRepository achatRepo;

	@Autowired
	private StockService stockService;

	public Achat create(Achat achat) {
		return achatRepo.save(achat);
	}

	public Achat achatBoisson(Client client, Boisson boisson) {
		if (boisson.getUtilisations() == null) {
			throw new BoissonException();
		}
		Set<Utilisation> utils = boisson.getUtilisations();
		utils.forEach(u -> {
			double volumeUtilise = u.getVolume();
			Stock stock = u.getIngredient();
			stockService.utiliserVolume(volumeUtilise, stock);
		});
		return create(new Achat(LocalDate.now(), boisson, client));
	}

	public void suppression(Achat achat) {
		Achat achatEnBase = achatRepo.findById(achat.getId()).orElseThrow(AchatException::new);
//		boissonRepo.deleteByBar(BoissonEnBase);
		achatRepo.delete(achatEnBase);
	}

	public List<Achat> getAllByClient(Client client) {
		Check.checkLong(client.getId());
		return achatRepo.findAllByClient(client);
	}

	public List<Achat> getAll() {
		return achatRepo.findAll();
	}

}
