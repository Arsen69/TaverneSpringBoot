package soprajc.TaverneSpringBoot.model.comptes;

import java.util.List;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import soprajc.TaverneSpringBoot.model.fonctionnalitees.Achat;
import soprajc.TaverneSpringBoot.model.fonctionnalitees.CarteFidelite;

@Entity
@DiscriminatorValue("Client")
public class Client extends Compte {
	
	@OneToOne
	@JoinColumn(name = "id_carte")
	private CarteFidelite carte;
	
	@OneToMany(mappedBy = "client")
	private List<Achat> achats;

	public Client() {}
	
	public Client(String nom, String prenom, String login, String password, String mail) {
		super(nom, prenom, login, password, mail);
	}
	
	public Client(String nom, String prenom, String login, String password, String mail, CarteFidelite carte) {
		super(nom, prenom, login, password, mail);
		this.carte = carte;
	}

	public CarteFidelite getCarte() {
		return carte;
	}

	public void setCarte(CarteFidelite carte) {
		this.carte = carte;
	}

	public List<Achat> getAchats() {
		return achats;
	}

	public void setAchats(List<Achat> achats) {
		this.achats = achats;
	}
	
	
	
	
}
