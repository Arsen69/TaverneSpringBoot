package soprajc.TaverneSpringBoot.model.inventaire;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Version;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonView;

import soprajc.TaverneSpringBoot.model.JsonViews;
import soprajc.TaverneSpringBoot.model.comptes.Fournisseur;

@Entity
@Table(name="Article")
public class Article {

	@JsonView(JsonViews.Common.class)
	@Id//Obligatoire
	@GeneratedValue(strategy = GenerationType.IDENTITY) //Obligatoire*
	private Long id;
	@JsonView(JsonViews.Common.class)
	private String nom;
	@JsonView(JsonViews.Common.class)
	@DecimalMin("0.0")
	private double cout;
	
	@Enumerated(EnumType.STRING)
	@Column(name="type_produit")
	@JsonView(JsonViews.Common.class)
	@NotNull
	private TypeArticle typeProduit;
	@JsonView(JsonViews.Common.class)
	@DecimalMin("0.0")
	private double volume;
	
	
	@ManyToOne
	@JoinColumn(name="id_fournisseur")
	@JsonView(JsonViews.ArticleWithFournisseur.class)
	@NotNull
	private Fournisseur fournisseur;
	
	@Version
	private int version;
	
	public Article(){}
	

	public Article(String nom, double cout, TypeArticle type_produit, double volume, Fournisseur fournisseur) {
		this.nom = nom;
		this.cout = cout;
		this.typeProduit = type_produit;
		this.volume = volume;
		this.fournisseur = fournisseur;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public double getCout() {
		return cout;
	}

	public void setCout(double cout) {
		this.cout = cout;
	}

	

	public TypeArticle getTypeProduit() {
		return typeProduit;
	}



	public void setTypeProduit(TypeArticle typeProduit) {
		this.typeProduit = typeProduit;
	}



	public double getVolume() {
		return volume;
	}

	public void setVolume(double volume) {
		this.volume = volume;
	}

	public Fournisseur getFournisseur() {
		return fournisseur;
	}

	public void setFournisseur(Fournisseur fournisseur) {
		this.fournisseur = fournisseur;
	}


	public int getVersion() {
		return version;
	}


	public void setVersion(int version) {
		this.version = version;
	}


	@Override
	public int hashCode() {
		return Objects.hash(id);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Article other = (Article) obj;
		return Objects.equals(id, other.id);
	}
	



	
}
