package soprajc.TaverneSpringBoot.restcontroller;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.ReflectionUtils;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import soprajc.TaverneSpringBoot.exception.ArticleException;
import soprajc.TaverneSpringBoot.model.JsonViews;
import soprajc.TaverneSpringBoot.model.comptes.Client;
import soprajc.TaverneSpringBoot.model.fonctionnalitees.Achat;
import soprajc.TaverneSpringBoot.model.inventaire.Alcool;
import soprajc.TaverneSpringBoot.model.inventaire.Article;
import soprajc.TaverneSpringBoot.model.inventaire.Boisson;
import soprajc.TaverneSpringBoot.model.inventaire.Soft;
import soprajc.TaverneSpringBoot.model.inventaire.Stock;
import soprajc.TaverneSpringBoot.service.AchatService;
import soprajc.TaverneSpringBoot.service.ArticleService;
import soprajc.TaverneSpringBoot.service.BarService;
import soprajc.TaverneSpringBoot.service.BoissonService;
import soprajc.TaverneSpringBoot.service.CompteService;
import soprajc.TaverneSpringBoot.service.StockService;

@RestController
@RequestMapping("api/bar")
public class AchatRestController {
	
	@Autowired
	private StockService stockService;
	@Autowired
	private AchatService achatService;
	@Autowired
	private ArticleService articleService;
	@Autowired
	private BarService barService;
	@Autowired
	private BoissonService boissonService;
	@Autowired
	private CompteService compteService;
	
	@GetMapping("/achats")
	@JsonView(JsonViews.Common.class)
	public List<Achat> getAllAchats() {
		return achatService.getAll();
	}
	
	@PostMapping("/achat")
	@JsonView(JsonViews.Common.class)
	public Achat achat(@RequestBody Map<String,Object> myMap, BindingResult br) {
		if (br.hasErrors()) {
			throw new ArticleException();
		}
		Boisson boisson = boissonService.getById(Long.valueOf((Integer)myMap.get("boisson")));
		Client client = (Client)compteService.getBy(Long.valueOf((Integer)myMap.get("client")));
		
		return achatService.achatBoisson(client,boisson);
	}

}
