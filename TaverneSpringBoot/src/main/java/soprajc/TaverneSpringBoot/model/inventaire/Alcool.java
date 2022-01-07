package soprajc.TaverneSpringBoot.model.inventaire;
import java.util.List;
import java.util.Set;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("Alcool")
public class Alcool extends Boisson{
	
	
	public Alcool(String nom, double prixHT, double prixHThh, Bar bar, Set<Utilisation> utilisations) {
		super(nom, prixHT, prixHThh,1.2, bar, utilisations);
	}
	
	public Alcool() {
		
	}


}

