package soprajc.TaverneSpringBoot.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import soprajc.TaverneSpringBoot.exception.StockException;
import soprajc.TaverneSpringBoot.model.inventaire.Article;
import soprajc.TaverneSpringBoot.model.inventaire.Bar;
import soprajc.TaverneSpringBoot.model.inventaire.Stock;
import soprajc.TaverneSpringBoot.model.inventaire.TypeArticle;
import soprajc.TaverneSpringBoot.repository.StockRepository;

@Service
public class StockService {

	@Autowired
	private StockRepository stockRepo;

	@Autowired
	private JavaMailSender emailSender;

	@Autowired
	private BarService barService;

	private static final Logger LOGGER = LoggerFactory.getLogger(ConsoleService.class);

	public Stock getByIdStockAndBar(Long idStock, Bar bar) {
		Check.checkLong(idStock);
		Check.checkLong(bar.getIdBar());
		return stockRepo.findByIdStockAndBar(idStock, bar).orElseThrow(StockException::new);
	}

	public Stock getById(Long idStock) {
		Check.checkLong(idStock);
		return stockRepo.findById(idStock).orElseThrow(StockException::new);
	}

	public Stock getByIdStockAndBar(Long idStock, Long idBar) {
		Check.checkLong(idStock);
		Check.checkLong(idBar);
		return getByIdStockAndBar(idStock, barService.getById(idBar));
	}

	public List<Stock> getAllByBar(Bar bar) {
		return stockRepo.findAllByBar(bar);
	}

	public List<Stock> getAllByBar(Long id) {
		Check.checkLong(id);
		return getAllByBar(barService.getById(id));
	}

	public Stock getByTypeArticle(TypeArticle typeArticle, Bar bar) {
		return stockRepo.findByTypeArticle(typeArticle, bar).orElseThrow(StockException::new);
	}

	public void delete(Stock stock) {
		Check.checkLong(stock.getIdStock());
		Stock stockEnBase = stockRepo.findById(stock.getIdStock()).orElseThrow(StockException::new);
		if (stockEnBase.getVolumeTot() != 0) {
			throw new StockException();
		}
		stockRepo.delete(stock);
	}

	public void delete(Long id) {
		delete(getById(id));
	}

	public void utiliserVolume(double volume, Stock stock) {
		Check.checkLong(stock.getIdStock());
		Check.checkNegatif(volume);
		double newVolume = stock.getVolumeTot() - volume;
		Check.checkNegatif(newVolume);
		stock.setVolumeTot(newVolume);
		if(stock.getSeuilLimite()!=null) {
			if (newVolume <= stock.getSeuilLimite()) {
				System.out.println(stock);
				System.out.println(stock.getArticles());
				System.out.println(stock.getArticles().toArray());
				SimpleMailMessage message = new SimpleMailMessage();
				message.setFrom("appli.taverne1@gmail.com");
				message.setTo("appli.taverne1@gmail.com");
				message.setSubject("Volume du Stock sous le seuil limite");
				message.setText(
						"Le volume du stock '" +  ((Article) (stock.getArticles().toArray())[0]).getTypeProduit().toString()
								+ "' (" + stock.getVolumeTot() + ") dans le bar " + stock.getBar().getNom()
								+ " est sous le seuil d'alerte : " + stock.getSeuilLimite().toString());
				emailSender.send(message);
		}
		
//			LOGGER.warn(
//					"Le volume du stock '" + ((Article[]) stock.getArticles().toArray())[0].getTypeProduit().toString()
//							+ "' (" + stock.getVolumeTot() + ") dans le bar " + stock.getBar().getNom()
//							+ "est sous le seuil d'alerte : " + stock.getSeuilLimite().toString());
		}

	}

	public void ajouterVolume(double volume, Stock stock) {
		Check.checkNegatif(volume);
		Check.checkLong(stock.getIdStock());
		double newVolume = stock.getVolumeTot() + volume;
		stock.setVolumeTot(newVolume);
		stockRepo.save(stock);
	}

	public Stock updateSeuilLimite(Stock stock, Integer seuil) {
		Check.checkLong(stock.getIdStock());
		Check.checkNegatifNullOk(seuil);
		Stock stockEnBase = getById(stock.getIdStock());
		stock.setVersion(stockEnBase.getVersion());
		stock.setSeuilLimite(seuil);
		return stockRepo.save(stock);
	}

}
