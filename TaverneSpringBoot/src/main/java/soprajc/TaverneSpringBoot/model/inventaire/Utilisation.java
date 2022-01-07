package soprajc.TaverneSpringBoot.model.inventaire;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class Utilisation {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private double volume;
	
	@OneToOne
	@JoinColumn(name="id_ingredient_stock")
	private Stock ingredient;
	
	@ManyToOne
	@JoinColumn(name="id_boisson")
	private Boisson boisson;
	
	public Utilisation() {}

	public Utilisation(double volume, Stock ingredient, Boisson boisson) {
		volume = volume;
		this.ingredient = ingredient;
		this.boisson = boisson;
	}

	public Long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public double getVolume() {
		return volume;
	}

	public void setVolume(double volume) {
		this.volume = volume;
	}

	public Stock getIngredient() {
		return ingredient;
	}

	public void setIngredient(Stock ingredient) {
		this.ingredient = ingredient;
	}

	public Boisson getBoisson() {
		return boisson;
	}

	public void setBoisson(Boisson boisson) {
		this.boisson = boisson;
	}

	@Override
	public String toString() {
		return "Utilisation [id=" + id + ", volume=" + volume + ", ingredient=" + ingredient + ", boisson=" + boisson
				+ "]";
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
		Utilisation other = (Utilisation) obj;
		return Objects.equals(id, other.id);
	}
	
	
}
