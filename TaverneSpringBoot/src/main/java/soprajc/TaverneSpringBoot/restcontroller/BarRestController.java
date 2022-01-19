package soprajc.TaverneSpringBoot.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import soprajc.TaverneSpringBoot.model.JsonViews;
import soprajc.TaverneSpringBoot.model.comptes.Compte;
import soprajc.TaverneSpringBoot.model.inventaire.Bar;
import soprajc.TaverneSpringBoot.service.BarService;

@RestController
@RequestMapping("api/bar")
@CrossOrigin(origins="*")
public class BarRestController {
	
	@Autowired
	private BarService barService;

	@GetMapping("")
	@JsonView(JsonViews.Common.class)
	public List<Bar> getAll() {
		return barService.getAll();
	}
	
	@GetMapping("/{id}")
	@JsonView(JsonViews.Common.class)
	public Bar getById(@PathVariable Long id) {
		return barService.getById(id);
	}
}
