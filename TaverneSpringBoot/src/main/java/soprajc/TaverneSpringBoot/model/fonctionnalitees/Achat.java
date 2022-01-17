package soprajc.TaverneSpringBoot.model.fonctionnalitees;

import java.time.LocalDate;
import java.util.Objects;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonView;

import soprajc.TaverneSpringBoot.model.JsonViews;
import soprajc.TaverneSpringBoot.model.comptes.Client;
import soprajc.TaverneSpringBoot.model.inventaire.Boisson;

@Entity
public class Achat {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonView(JsonViews.Common.class)
	private Long id;
	@Column(name = "date_achat")
	@JsonView(JsonViews.Common.class)
	private LocalDate dateAchat;
	
	@ManyToOne
	@JoinColumn(name="id_boisson")
	@JsonView(JsonViews.Common.class)
	private Boisson boisson;
	
	@ManyToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name="id_client")
	@JsonView(JsonViews.Common.class)
	private Client client;
	

	@Override
	public int hashCode() {
		return Objects.hash(boisson, client, dateAchat, id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Achat other = (Achat) obj;
		return Objects.equals(boisson, other.boisson) && Objects.equals(client, other.client)
				&& Objects.equals(dateAchat, other.dateAchat) && Objects.equals(id, other.id);
	}

	public Achat() {	}

	public Achat(LocalDate dateAchat, Boisson boisson, Client client) {
		this.dateAchat = dateAchat;
		this.boisson = boisson;
		this.client = client;
	}
	
	public Achat(Boisson boisson) {
		this.dateAchat = LocalDate.now();
		this.boisson = boisson;
		//this.client = (Client)context.getConnected();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDate getDateAchat() {
		return dateAchat;
	}

	public void setDateAchat(LocalDate dateAchat) {
		this.dateAchat = dateAchat;
	}

	public Boisson getBoisson() {
		return boisson;
	}

	public void setBoisson(Boisson boisson) {
		this.boisson = boisson;
	}

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	
	
	
	
}
