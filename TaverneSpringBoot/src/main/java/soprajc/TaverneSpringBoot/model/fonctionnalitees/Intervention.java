package soprajc.TaverneSpringBoot.model.fonctionnalitees;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import soprajc.TaverneSpringBoot.model.comptes.Intervenant;
import soprajc.TaverneSpringBoot.model.inventaire.Bar;

@Entity
public class Intervention {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private LocalTime hDebut;
	
	private LocalTime hFin;
	
	private LocalDate date;

	private String typeIntervention;

	@Column(nullable = true)
	private int coutIntervenant;
	@Column(nullable = true)
	private int prixClient;
	
	@Enumerated(EnumType.STRING)
	private StatutIntervention statut;
	
	
	@ManyToOne
	@JoinColumn(name = "id_intervenant", nullable = false)
	private Intervenant intervenant;
	
	@ManyToOne
	@JoinColumn(name = "id_bar", nullable = false)
	private Bar bar;
	
	
	public Intervention() {}


	public Intervention(LocalTime hDebut, LocalTime hFin, LocalDate date, String typeIntervention, int coutIntervenant,
			int prixClient, Intervenant intervenant, Bar bar) {
		this.hDebut = hDebut;
		this.hFin = hFin;
		this.date = date;
		this.typeIntervention = typeIntervention;
		this.coutIntervenant = coutIntervenant;
		this.prixClient = prixClient;
		this.intervenant = intervenant;
		this.bar = bar;
		this.statut = StatutIntervention.EnAttente;
	}



	public StatutIntervention getStatut() {
		return statut;
	}


	public void setStatut(StatutIntervention statut) {
		this.statut = statut;
	}

	@Override
	public String toString() {
		return "Intervention [id=" + id + ", hDebut=" + hDebut + ", hFin=" + hFin + ", typeIntervention="
				+ typeIntervention + ", coutIntervenant=" + coutIntervenant + ", prixClient=" + prixClient
				+ ", intervenant=" + intervenant + ", bar=" + bar + "]";
	}


	public Bar getBar() {
		return bar;
	}


	public void setBar(Bar bar) {
		this.bar = bar;
	}


	public String getTypeIntervention() {
		return typeIntervention;
	}


	public void setTypeIntervention(String typeIntervention) {
		this.typeIntervention = typeIntervention;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public LocalTime gethDebut() {
		return hDebut;
	}


	public void sethDebut(LocalTime hDebut) {
		this.hDebut = hDebut;
	}


	public LocalTime gethFin() {
		return hFin;
	}


	public void sethFin(LocalTime hFin) {
		this.hFin = hFin;
	}


	public int getCoutIntervenant() {
		return coutIntervenant;
	}


	public void setCoutIntervenant(int coutArtiste) {
		this.coutIntervenant = coutArtiste;
	}


	public int getPrixClient() {
		return prixClient;
	}


	public void setPrixClient(int prixClient) {
		this.prixClient = prixClient;
	}


	public Intervenant getIntervenant() {
		return intervenant;
	}


	public void setIntervenant(Intervenant intervenant) {
		this.intervenant = intervenant;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}
	
	

	
	
}
