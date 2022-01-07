package soprajc.TaverneSpringBoot.model.fonctionnalitees;

import java.time.LocalDate;
import java.util.Objects;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import soprajc.TaverneSpringBoot.model.comptes.Client;
import soprajc.TaverneSpringBoot.model.inventaire.Boisson;

@Entity
public class Achat {
	
	//static Context context = Context.getInstance();

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private LocalDate dateAchat;
	
	@ManyToOne
	@JoinColumn(name="id_boisson")
	private Boisson boisson;
	
	@ManyToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name="id_client")
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

	@Override
	public String toString() {
		return "Achat [id=" + id + ", dateAchat=" + dateAchat + ", boisson=" + boisson + ", client=" + client + "]";
	}
	
	
	
	
}
