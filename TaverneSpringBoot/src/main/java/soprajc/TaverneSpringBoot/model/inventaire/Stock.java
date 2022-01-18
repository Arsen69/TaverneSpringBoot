package soprajc.TaverneSpringBoot.model.inventaire;

import java.util.Objects;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonView;

import soprajc.TaverneSpringBoot.model.JsonViews;


@Entity
public class Stock {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id_stock")
	@JsonView(JsonViews.Common.class)
	private Long idStock;
	@JsonView(JsonViews.Common.class)
	@Column(name = "volume_tot")
	private double volumeTot;
	@JsonView(JsonViews.Common.class)
	@Column(name = "seuil_limite")
	private Integer seuilLimite;

	@ManyToMany
	@JoinTable(name = "Articles_de_stock")
	@JsonView(JsonViews.Common.class)
	private Set<Article> articles;

	@ManyToOne
	@JoinColumn(name="id_bar")
	private Bar bar;

	@Version
	private int version;
	
	public Stock() {}

	public Stock(double volumeTot, Integer seuilLimite, Set<Article> articles, Bar bar) {
		this.volumeTot = volumeTot;
		this.seuilLimite = seuilLimite;
		this.articles = articles;
		this.bar = bar;
	}

	public Long getIdStock() {
		return idStock;
	}

	public void setIdStock(Long id_stock) {
		this.idStock = id_stock;
	}

	public double getVolumeTot() {
		return volumeTot;
	}

	public void setVolumeTot(double volumeTot) {
		this.volumeTot = volumeTot;
	}

	public Set<Article> getArticles() {
		return articles;
	}

	public void setArticles(Set<Article> articles) {
		this.articles = articles;
	}

	public Bar getBar() {
		return bar;
	}

	public void setBar(Bar bar) {
		this.bar = bar;
	}

	public Integer getSeuilLimite() {
		return seuilLimite;
	}

	public void setSeuilLimite(Integer seuilLimite) {
		this.seuilLimite = seuilLimite;
	}

	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}

	public void ajouterVolume(double volume) 
	{
		this.volumeTot+=volume;
	}

	

	@Override
	public int hashCode() {
		return Objects.hash(idStock);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Stock other = (Stock) obj;
		return Objects.equals(idStock, other.idStock);
	}



}
