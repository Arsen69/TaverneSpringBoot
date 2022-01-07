package soprajc.TaverneSpringBoot.model.comptes;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

@Entity
@DiscriminatorValue("Admin")
public class Admin extends Compte {
	
	public Admin() {}

	public Admin(String nom, String prenom, String login, String password, String mail) {
		super(nom, prenom, login, password, mail);
	}

}
