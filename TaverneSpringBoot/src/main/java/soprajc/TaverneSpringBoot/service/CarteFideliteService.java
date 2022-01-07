package soprajc.TaverneSpringBoot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import soprajc.TaverneSpringBoot.exception.CarteFideliteException;
import soprajc.TaverneSpringBoot.model.comptes.Client;
import soprajc.TaverneSpringBoot.model.fonctionnalitees.CarteFidelite;
import soprajc.TaverneSpringBoot.repository.CarteFideliteRepository;

@Service
public class CarteFideliteService {

	@Autowired
	private CarteFideliteRepository carteFideliteRepo;

	@Autowired
	private CompteService compteService;

	public void creation(CarteFidelite carte) {
		Check.checkLong(carte.getId());
		if (carte.getOwner() != null && carte.getOwner().getId() != null) {
			throw new CarteFideliteException();
		}
		carte.setOwner((Client) compteService.getBy(carte.getOwner().getId()));
		carteFideliteRepo.save(carte);
	}

	public void suppression(Long id) {
		suppression(getBy(id));
	}

	public void suppression(CarteFidelite carte) {
		Client owner = (Client) compteService.getBy(carte.getOwner().getId());
		owner.setCarte(null);
		compteService.update(owner);
		carteFideliteRepo.delete(carte);
	}

	public CarteFidelite getBy(Long id) {
		Check.checkLong(id);
		return carteFideliteRepo.findById(id).orElseThrow(CarteFideliteException::new);
	}

	public List<CarteFidelite> getAll() {
		return carteFideliteRepo.findAll();
	}

	public CarteFidelite getByOwner(Client owner) {
		return carteFideliteRepo.findByOwner(owner).orElseThrow(CarteFideliteException::new);
	}

	public CarteFidelite getByOwnerId(Long id) {
		if (compteService.getBy(id).getClass().getSimpleName().equals("Client")) {
			return getByOwner((Client) compteService.getBy(id));
		} else {
			throw new CarteFideliteException();
		}
	}

}
