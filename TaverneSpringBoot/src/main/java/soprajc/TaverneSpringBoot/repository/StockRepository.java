package soprajc.TaverneSpringBoot.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import soprajc.TaverneSpringBoot.model.inventaire.Bar;
import soprajc.TaverneSpringBoot.model.inventaire.Stock;
import soprajc.TaverneSpringBoot.model.inventaire.TypeArticle;

public interface StockRepository extends JpaRepository<Stock, Long>{
	
	@Query("select distinct s from Stock s join fetch s.articles a where s.bar=:bar")
	public List<Stock> findAllByBar(@Param("bar")Bar bar);
	
	@Query("select distinct s from Stock s join fetch s.articles where seuil_limite = null")
	public List<Stock> findAllLimitNull();
	
	@Query("select distinct s from Stock s join s.articles a where a.typeProduit=:lib and s.bar=:bar")
	public Optional<Stock> findByTypeArticle(@Param ("lib") TypeArticle typeArticle, @Param("bar") Bar bar);

	@Query("select distinct s from Stock s join fetch s.articles a where s.idStock=:idStock and s.bar=:bar")
	public Optional<Stock> findByIdStockAndBar(@Param("idStock") Long idStock,@Param("bar") Bar bar);

}
