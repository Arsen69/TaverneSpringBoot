package soprajc.TaverneSpringBoot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import soprajc.TaverneSpringBoot.model.comptes.Fournisseur;
import soprajc.TaverneSpringBoot.model.inventaire.Article;
import soprajc.TaverneSpringBoot.model.inventaire.TypeArticle;

public interface ArticleRepository extends JpaRepository<Article, Long>{
	
	public List<Article> findAllByTypeProduit(TypeArticle typeProduit);
	
	public List<Article> findAllByFournisseur(Fournisseur fournisseur);
	
	

}
