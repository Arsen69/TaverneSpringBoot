package soprajc.TaverneSpringBoot.model.comptes;

import java.util.List;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import soprajc.TaverneSpringBoot.model.fonctionnalitees.Events;
import soprajc.TaverneSpringBoot.model.inventaire.Bar;

@Entity
@DiscriminatorValue("Employe")
public class Employe extends Compte {
	
	@ManyToOne
	@JoinColumn(name = "id_bar")
	private Bar bar;
	
	@OneToMany(mappedBy = "emp")
	private List<Events> events;
	
	public Employe() {}

	public Employe(String nom, String prenom, String login, String password, String mail, Bar bar,
			List<Events> events) {
		super(nom, prenom, login, password, mail);
		this.bar = bar;
		this.events = events;
	}

	public Bar getBar() {
		return bar;
	}

	public void setBar(Bar bar) {
		this.bar = bar;
	}

	public List<Events> getEvents() {
		return events;
	}

	public void setEvents(List<Events> events) {
		this.events = events;
	}
	
	

	@Override
	public String toString() {
		return "Employe [bar=" + bar + ", events=" + events + "]";
	}
	
	
	
	

	
	
}
