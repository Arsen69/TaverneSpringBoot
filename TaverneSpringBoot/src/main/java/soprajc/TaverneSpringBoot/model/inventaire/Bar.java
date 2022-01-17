package soprajc.TaverneSpringBoot.model.inventaire;

import java.util.Objects;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonView;

import soprajc.TaverneSpringBoot.model.JsonViews;
import soprajc.TaverneSpringBoot.model.comptes.Employe;
import soprajc.TaverneSpringBoot.model.fonctionnalitees.Events;
import soprajc.TaverneSpringBoot.model.fonctionnalitees.Intervention;

@Entity
public class Bar {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_bar")
	@JsonView(JsonViews.Evenement.class)
	private Long idBar;
	@JsonView(JsonViews.Evenement.class)
	private String nom;

	@OneToMany(mappedBy = "bar")
	Set<Stock> stocks;

	@OneToMany(mappedBy = "bar")
	Set<Events> events;

	@OneToMany(mappedBy = "bar")
	Set<Employe> employes;

	/////
	@OneToMany(mappedBy = "bar")
	Set<Intervention> interventions;
	////

	public Bar() {
	}
	
	public Bar(Long idBar, String nom) {
		this.idBar=idBar;
		this.nom=nom;
	}
	
	
	public Bar(String nom, Set<Stock> stocks, Set<Events> events, Set<Employe> employes,
			Set<Intervention> interventions) {
		this.nom = nom;
		this.stocks = stocks;
		this.events = events;
		this.employes = employes;
		this.interventions = interventions;
	}

	public Long getIdBar() {
		return idBar;
	}

	public void setIdBar(Long idBar) {
		this.idBar = idBar;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public Set<Stock> getStocks() {
		return stocks;
	}

	public void setStocks(Set<Stock> stocks) {
		this.stocks = stocks;
	}

	public Set<Events> getEvents() {
		return events;
	}

	public void setEvents(Set<Events> events) {
		this.events = events;
	}

	public Set<Employe> getEmployes() {
		return employes;
	}

	public void setEmployes(Set<Employe> employes) {
		this.employes = employes;
	}

	public Set<Intervention> getInterventions() {
		return interventions;
	}

	public void setInterventions(Set<Intervention> interventions) {
		this.interventions = interventions;
	}

	@Override
	public int hashCode() {
		return Objects.hash(idBar);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Bar other = (Bar) obj;
		return Objects.equals(idBar, other.idBar);
	}

}
