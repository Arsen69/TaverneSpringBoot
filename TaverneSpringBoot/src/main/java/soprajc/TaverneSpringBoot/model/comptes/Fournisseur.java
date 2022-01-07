package soprajc.TaverneSpringBoot.model.comptes;

import java.util.List;
import java.util.Set;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToMany;

import soprajc.TaverneSpringBoot.model.inventaire.Article;

@Entity
@DiscriminatorValue("Fournisseur")
public class Fournisseur extends Compte {
	
	private String entreprise;
	

	@OneToMany(mappedBy = "fournisseur")
	Set<Article> catalogue;
	
	public Fournisseur() {}

	public Fournisseur(String nom, String prenom, String login, String password, String mail, String entreprise,
			Set<Article> catalogue) {
		super(nom, prenom, login, password, mail);
		this.entreprise = entreprise;
		this.catalogue = catalogue;
	}
	
	public Fournisseur(String nom, String prenom, String login, String password, String mail, String entreprise) {
		super(nom, prenom, login, password, mail);
		this.entreprise = entreprise;
	}

	public String getEntreprise() {
		return entreprise;
	}

	public void setEntreprise(String entreprise) {
		this.entreprise = entreprise;
	}

	public Set<Article> getCatalogue() {
		return catalogue;
	}

	public void setCatalogue(Set<Article> catalogue) {
		this.catalogue = catalogue;
	}

	@Override
	public String toString() {
		return "Fournisseur [entreprise=" + entreprise + ", catalogue=" + catalogue + "]";
	}
	
	
	

}
