package soprajc.TaverneSpringBoot.model.comptes;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Version;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonView;

import soprajc.TaverneSpringBoot.model.JsonViews;



@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name="Type_Compte")
public abstract class Compte implements UserDetails{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonView(JsonViews.Common.class)
	protected Long id;
	@JsonView(JsonViews.Common.class)
	protected String nom;
	@JsonView(JsonViews.Common.class)
	protected String prenom;
	@JsonView(JsonViews.Common.class)
	@Column(unique= true, nullable=false)
	protected String login;
	@Column(nullable=false)
	protected String password;
	@JsonView(JsonViews.Common.class)
	@Column(nullable=false)
	protected String mail;
	@JsonView(JsonViews.Common.class)
	@Column(name="date_naissance",nullable=true)
	protected LocalDate birthday;
	@Version
	protected int version;
	@Column(nullable=false)
	protected boolean enabled;
	
	public Compte() {}

	public Compte(String nom, String prenom, String login, String password, String mail) {
		this.nom = nom;
		this.prenom = prenom;
		this.login = login;
		this.password = password;
		this.mail = mail;
	}

	public String getNom() {
		return nom;
	}
	
	public void setNom(String nom) {
		this.nom = nom;
	}
	
	public String getPrenom() {
		return prenom;
	}
	
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	
	public String getLogin() {
		return login;
	}
	
	public void setLogin(String login) {
		this.login = login;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getMail() {
		return mail;
	}
	
	public void setMail(String mail) {
		this.mail = mail;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}

	@Override
	public String toString() {
		return "Compte [id=" + id + ", nom=" + nom + ", prenom=" + prenom + ", login=" + login + ", password="
				+ password + ", mail=" + mail + "]";
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
		Compte other = (Compte) obj;
		return Objects.equals(id, other.id);
	}
	
	@Override
	public String getUsername() {
		return login;
	}

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		Collection<SimpleGrantedAuthority> authorities=new ArrayList<SimpleGrantedAuthority>();
		authorities.add(new SimpleGrantedAuthority(this.getClass().getSimpleName()));
		return authorities;
	}
	

}




