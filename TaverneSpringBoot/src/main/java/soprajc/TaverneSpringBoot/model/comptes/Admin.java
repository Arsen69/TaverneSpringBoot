package soprajc.TaverneSpringBoot.model.comptes;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("Admin")
public class Admin extends Compte {
	
	public Admin() {}

	public Admin(String nom, String prenom, String login, String password, String mail) {
		super(nom, prenom, login, password, mail);
	}

}
