package soprajc.TaverneSpringBoot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import soprajc.TaverneSpringBoot.exception.StockException;
import soprajc.TaverneSpringBoot.model.inventaire.Bar;
import soprajc.TaverneSpringBoot.model.inventaire.Stock;
import soprajc.TaverneSpringBoot.model.inventaire.TypeArticle;
import soprajc.TaverneSpringBoot.repository.StockRepository;

@Service
public class StockService {

	@Autowired
	private StockRepository stockRepo;
	
	@Autowired
	private LogAlertService logAlerteService;
	
	@Autowired
	private BarService barService;
	
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

	public List<Stock> getAllByBar(Bar bar){
		return stockRepo.findAllByBar(bar);
	}
	
	public List<Stock> getAllByBar(Long id){
		Check.checkLong(id);
		return getAllByBar(barService.getById(id));
	}
	
	public Stock getByTypeArticle(TypeArticle typeArticle, Bar bar) {
		return stockRepo.findByTypeArticle(typeArticle, bar).orElseThrow(StockException::new);
	}
	
	public void delete(Stock stock) {
		Check.checkLong(stock.getIdStock());
		Stock stockEnBase = stockRepo.findById(stock.getIdStock()).orElseThrow(StockException::new);
		if (stockEnBase.getVolumeTot()!=0) {
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
		try {
			if (newVolume <= stock.getSeuilLimite()) {
				logAlerteService.creerAlerte(stock);
			}
		} catch (Exception e) {
		}

	}

	public void ajouterVolume(double volume, Stock stock) {
		Check.checkNegatif(volume);
		Check.checkLong(stock.getIdStock());
		double newVolume = stock.getVolumeTot()+volume;
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
