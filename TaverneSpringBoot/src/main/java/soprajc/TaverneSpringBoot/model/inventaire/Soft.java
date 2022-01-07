package soprajc.TaverneSpringBoot.model.inventaire;
import java.util.List;
import java.util.Set;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("Soft")
public class Soft extends Boisson {


	public Soft(String nom,double prixHT,double prixHThh, Bar bar, Set<Utilisation> utilisations) {
		super(nom,prixHT,prixHThh,1.1, bar, utilisations);
	}	
	
	public Soft() {}
	
	
}
