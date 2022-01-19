package soprajc.TaverneSpringBoot.restcontroller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import soprajc.TaverneSpringBoot.exception.ArticleException;
import soprajc.TaverneSpringBoot.model.JsonViews;
import soprajc.TaverneSpringBoot.model.comptes.Client;
import soprajc.TaverneSpringBoot.model.fonctionnalitees.Achat;
import soprajc.TaverneSpringBoot.model.inventaire.Boisson;
import soprajc.TaverneSpringBoot.service.AchatService;
import soprajc.TaverneSpringBoot.service.ArticleService;
import soprajc.TaverneSpringBoot.service.BarService;
import soprajc.TaverneSpringBoot.service.BoissonService;
import soprajc.TaverneSpringBoot.service.CompteService;
import soprajc.TaverneSpringBoot.service.StockService;

@RestController
@RequestMapping("api/bar")
@CrossOrigin("*")
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
	
	// Si seulement cette méthode avait marchée :'(
//	@PostMapping("/panier")
//	@JsonView(JsonViews.Common.class)
//	public ArrayList<Achat> panier(@RequestBody Map<String,Object> myMap, BindingResult br) {
//		if (br.hasErrors()) {
//			throw new ArticleException();
//		}
//		Boisson boisson = boissonService.getById(Long.valueOf((Integer)myMap.get("boisson")));
//		Client client = (Client)compteService.getBy(Long.valueOf((Integer)myMap.get("client")));
//		Integer nb = (Integer)myMap.get("qty");
//		ArrayList<Achat> panier = new ArrayList<Achat>();
//		for (int i = 0; i < nb; i++) {
//			panier.add(achatService.achatBoisson(client,boisson));
//		} 
//		return panier;
//	}
	
	@PostMapping("/panier")
	@JsonView(JsonViews.Common.class)
	public ArrayList<Achat> panier(@RequestBody Map<String,Object> myMap, BindingResult br) {
		if (br.hasErrors()) {
			throw new ArticleException();
		}
		Client client = (Client)compteService.getBy(Long.valueOf((Integer)myMap.get("client")));
		String code = (String)myMap.get("panier");
		ArrayList<Achat> panier = new ArrayList<Achat>();
		List<String> cutString = new ArrayList<String>();
		cutString = Arrays.asList(code.split(";"));
		for (int i = 0; i < cutString.size(); i++) {
			List<String> decode = new ArrayList<String>();
			decode = Arrays.asList(cutString.get(i).split(":"));
			Boisson boisson = boissonService.getById(Long.parseLong(decode.get(0)));
			for (int j = 0; j < Integer.valueOf(decode.get(1)); j++) {
				panier.add(achatService.achatBoisson(client,boisson));
			}
		} 
		return panier;
	}


}
