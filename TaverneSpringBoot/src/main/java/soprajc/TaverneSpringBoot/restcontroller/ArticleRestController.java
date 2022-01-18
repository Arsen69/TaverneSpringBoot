package soprajc.TaverneSpringBoot.restcontroller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

import soprajc.TaverneSpringBoot.exception.ArticleException;
import soprajc.TaverneSpringBoot.model.JsonViews;
import soprajc.TaverneSpringBoot.model.inventaire.Article;
import soprajc.TaverneSpringBoot.model.inventaire.Stock;
import soprajc.TaverneSpringBoot.service.ArticleService;
import soprajc.TaverneSpringBoot.service.BarService;
import soprajc.TaverneSpringBoot.service.StockService;

@RestController
@RequestMapping("api/articles")
@CrossOrigin(origins = "*")
public class ArticleRestController {
	
	@Autowired
	private StockService stockService;
	@Autowired
	private ArticleService articleService;
	@Autowired
	private BarService barService;
	
	@GetMapping("")
	@JsonView(JsonViews.ArticleWithFournisseur.class)
	public List<Article> getAll() {
		return articleService.getAll();
	}

	@GetMapping("/{idArticle}")
	@JsonView(JsonViews.ArticleWithFournisseur.class)
	public Article getById(@PathVariable Long idArticle) {
		return articleService.getById(idArticle);
	}
	
	@GetMapping("/{idArticle}/bar/{idBar}")
	@JsonView(JsonViews.Common.class)
	public void acheterArticle(@PathVariable("idArticle") Long idArticle, @PathVariable("idBar") Long idBar) {
		barService.approvisionner(articleService.getById(idArticle), barService.getById(idBar));
	}

	@GetMapping("/Fournisseur/{idFournisseur}")
	@JsonView(JsonViews.Common.class)
	public List<Article> getAllByFournisseur(@PathVariable("idFournisseur") Long id) {
		return articleService.getAllByFournisseur(id);
	}

	@GetMapping("/types/{typeArticle}")
	@JsonView(JsonViews.ArticleWithFournisseur.class)
	public List<Article> getAllByTypeArticle(@PathVariable String typeArticle) {
		return articleService.getAllByTypeArticle(typeArticle);
	}

	@ResponseStatus(code = HttpStatus.CREATED)
	@JsonView(JsonViews.Common.class)
	@PostMapping("")
	public Article create(@Valid @RequestBody Article article, BindingResult br) {
		if (br.hasErrors()) {
			throw new ArticleException();
		}
		return articleService.create(article);
	}
	
	@JsonView(JsonViews.Common.class)
	@PutMapping("/{idArticle}")
	public Article update(@Valid @RequestBody Article article, BindingResult br, @PathVariable("idArticle") Long idArticle) {
		if (br.hasErrors()) {
			throw new ArticleException();
		}
		if (article.getId()==null) {
			article.setId(idArticle);
		}
		return articleService.update(article);
	}
	
	@DeleteMapping("/{idArticle}")
	@ResponseStatus(code = HttpStatus.NO_CONTENT)
	public void delete(@PathVariable("idArticle") Long id) {
		articleService.delete(id);
	}

}
