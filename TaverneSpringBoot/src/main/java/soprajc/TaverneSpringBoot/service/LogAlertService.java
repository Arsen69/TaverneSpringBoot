package soprajc.TaverneSpringBoot.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import soprajc.TaverneSpringBoot.model.inventaire.LogAlerte;
import soprajc.TaverneSpringBoot.model.inventaire.Stock;
import soprajc.TaverneSpringBoot.repository.LogAlertRepository;

@Service
public class LogAlertService {
	
	@Autowired
	private LogAlertRepository logAlertRepo;
	
	public void creerAlerte(Stock stock) {
		Check.checkLong(stock.getIdStock());
		logAlertRepo.save(new LogAlerte(stock, LocalDateTime.now()));
	}

}
