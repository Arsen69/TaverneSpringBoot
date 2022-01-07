package soprajc.TaverneSpringBoot.model.fonctionnalitees;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonView;

import soprajc.TaverneSpringBoot.model.JsonViews;
import soprajc.TaverneSpringBoot.model.comptes.Client;


@Entity
@Table(name= "Carte_client")
public class CarteFidelite {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonView(JsonViews.Common.class)
	private Long id;
	
	@OneToOne(mappedBy = "carte")
	@JsonView(JsonViews.Common.class)
	private Client owner;
	
	@JsonView(JsonViews.Common.class)
	private int nbPoints;
	
	
	public CarteFidelite() {}
	
	public CarteFidelite(int points) {
		this.nbPoints = points;
	}
	
	public Client getOwner() {
		return owner;
	}
	
	public void setOwner(Client owner) {
		this.owner = owner;
	}
	
	public int getNbPoints() {
		return nbPoints;
	}
	
	public void setNbPoints(int nbPoints) {
		this.nbPoints = nbPoints;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "CarteFidelite [id=" + id + ", owner=" + owner + ", nbPoints=" + nbPoints + "]";
	}
	
	
	
	

}
