package soprajc.TaverneSpringBoot.restcontroller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import soprajc.TaverneSpringBoot.exception.CompteException;
import soprajc.TaverneSpringBoot.model.JsonViews;
import soprajc.TaverneSpringBoot.model.comptes.Admin;
import soprajc.TaverneSpringBoot.model.comptes.Client;
import soprajc.TaverneSpringBoot.model.comptes.Compte;
import soprajc.TaverneSpringBoot.model.comptes.Employe;
import soprajc.TaverneSpringBoot.service.CompteService;

@RestController
@RequestMapping("api/compte")
@CrossOrigin(origins="*")
public class CompteRestController {
	
	@Autowired
	private CompteService compteService;
	
	@GetMapping("")
	@JsonView(JsonViews.Common.class)
	public List<Compte> getAll() {
		return compteService.getAll();
	}
	
	@GetMapping("/login/{login}")
	public String login(@PathVariable String login) {
		return "\"" + compteService.getByLogin(login).getClass().getSimpleName() + "\"";
	}
	
	@GetMapping("/{id}")
	@JsonView(JsonViews.Common.class)
	private Compte getById(@PathVariable Long id) {
		return compteService.getBy(id);
	}
	
	public Compte getBy(Long id) {
		return getById(id);
	}
	
	@PostMapping("/Client")
	@ResponseStatus(code = HttpStatus.CREATED)
	@JsonView(JsonViews.Common.class)
	public Compte create(@Valid @RequestBody Client compte, BindingResult br) {
		if (br.hasErrors()) {
			throw new CompteException();
		}
		compteService.creationClient(compte);
		return compte;
	}
	
	@PostMapping("/Admin")
	@ResponseStatus(code = HttpStatus.CREATED)
	@JsonView(JsonViews.Common.class)
	public Compte create(@Valid @RequestBody Admin compte, BindingResult br) {
		if (br.hasErrors()) {
			throw new CompteException();
		}
		compteService.creationAdmin(compte);
		return compte;
	}
	
	@PostMapping("/Employe")
	@ResponseStatus(code = HttpStatus.CREATED)
	@JsonView(JsonViews.Common.class)
	public Compte create(@Valid @RequestBody Employe compte, BindingResult br) {
		if (br.hasErrors()) {
			throw new CompteException();
		}
		compteService.creationEmploye(compte);
		return compte;
	}
	
}
