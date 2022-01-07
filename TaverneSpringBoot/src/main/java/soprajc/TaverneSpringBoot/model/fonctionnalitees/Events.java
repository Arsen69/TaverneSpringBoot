package soprajc.TaverneSpringBoot.model.fonctionnalitees;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonView;

import soprajc.TaverneSpringBoot.model.JsonViews;
import soprajc.TaverneSpringBoot.model.comptes.Employe;
import soprajc.TaverneSpringBoot.model.inventaire.Bar;

@Entity
public class Events {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonView(JsonViews.Evenement.class)
	private Long id;
	
	@ManyToOne
	@JoinColumn(name="id_bar")
	@JsonView(JsonViews.Evenement.class)
	private Bar bar;
	
	@ManyToOne
	@JoinColumn(name="id_emp")
	@JsonView(JsonViews.Evenement.class)
	private Employe emp;
	
	@JsonView(JsonViews.Evenement.class)
	private LocalDate jour;
	
	@JsonView(JsonViews.Evenement.class)
	private LocalTime debut;
	@JsonView(JsonViews.Evenement.class)
	private LocalTime fin;
	@JsonView(JsonViews.Evenement.class)
	@Column(nullable = true)
	private String remarque;
	
	public Events() {}

	public Events(Bar bar, Employe emp, LocalDate jour, LocalTime debut, LocalTime fin, String remarque) {
		this.bar = bar;
		this.emp = emp;
		this.jour = jour;
		this.debut = debut;
		this.fin = fin;
		this.remarque = remarque;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Bar getBar() {
		return bar;
	}

	public void setBar(Bar bar) {
		this.bar = bar;
	}

	public Employe getEmp() {
		return emp;
	}

	public void setEmp(Employe emp) {
		this.emp = emp;
	}

	public LocalDate getJour() {
		return jour;
	}

	public void setJour(LocalDate journee) {
		this.jour = journee;
	}

	public String getRemarque() {
		return remarque;
	}

	public void setRemarque(String remarque) {
		this.remarque = remarque;
	}
	
	public LocalTime getDebut() {
		return debut;
	}

	public void setDebut(LocalTime debut) {
		this.debut = debut;
	}

	public LocalTime getFin() {
		return fin;
	}

	public void setFin(LocalTime fin) {
		this.fin = fin;
	}

	@Override
	public String toString() {
		return "Events [id=" + id + ", bar=" + bar + ", emp=" + emp + ", jour=" + jour + ", debut=" + debut + ", fin="
				+ fin + ", remarque=" + remarque + "]";
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
		Events other = (Events) obj;
		return Objects.equals(id, other.id);
	}
	
	

	
}
