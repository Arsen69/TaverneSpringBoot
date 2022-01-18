package soprajc.TaverneSpringBoot.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import soprajc.TaverneSpringBoot.exception.BoissonException;
import soprajc.TaverneSpringBoot.model.comptes.Client;
import soprajc.TaverneSpringBoot.model.fonctionnalitees.Achat;
import soprajc.TaverneSpringBoot.model.inventaire.Alcool;
import soprajc.TaverneSpringBoot.model.inventaire.Article;
import soprajc.TaverneSpringBoot.model.inventaire.Bar;
import soprajc.TaverneSpringBoot.model.inventaire.Boisson;
import soprajc.TaverneSpringBoot.model.inventaire.Soft;
import soprajc.TaverneSpringBoot.model.inventaire.Stock;
import soprajc.TaverneSpringBoot.model.inventaire.Utilisation;
import soprajc.TaverneSpringBoot.repository.ArticleRepository;
import soprajc.TaverneSpringBoot.repository.BarRepository;
import soprajc.TaverneSpringBoot.repository.BoissonRepository;
import soprajc.TaverneSpringBoot.repository.StockRepository;

@Service
public class BarService {

	@Autowired
	private BarRepository barRepo;

	@Autowired
	private StockRepository stockRepo;

	@Autowired
	private ArticleRepository articleRepo;

	@Autowired
	private StockService stockService;
	
	@Autowired
	private BoissonRepository boissonRepo;
	
	@Autowired
	private AchatService achatService;
	
	public Bar getById(Long id) {
		Check.checkLong(id);
		return barRepo.findById(id).orElseThrow(RuntimeException::new);
	}
	
	public void approvisionner(Article article, Bar bar) {
		try {
			System.out.println(article);
			Stock stock = stockService.getByTypeArticle(article.getTypeProduit(), bar);
			stockService.ajouterVolume(article.getVolume(), stock);
			stockRepo.save(stock);

		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("Voulez vous ajouter un nouveau stock ?");
			Stock s =new Stock(article.getVolume(), null, Arrays.asList(article).stream().collect(Collectors.toSet()), bar);
			System.out.println(s);
			stockRepo.save(new Stock(article.getVolume(), null, Arrays.asList(article).stream().collect(Collectors.toSet()), bar));
		}
	}

}
