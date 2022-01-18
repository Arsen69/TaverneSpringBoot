package soprajc.TaverneSpringBoot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Override
	// utilisé pour les resources en acces direct
	public void configure(WebSecurity web) throws Exception {
		web.ignoring().antMatchers("/images/**");
	}

	@Override
	// les modes d'accès au resources
	// le mode d'authentification
	public void configure(HttpSecurity http) throws Exception {
		// @formatter:off
		
		http.antMatcher("/api/**")
			.csrf().ignoringAntMatchers("/api/**")
			.and()
			.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
			.and()
			.authorizeHttpRequests()
				.antMatchers(HttpMethod.OPTIONS).permitAll()
				.antMatchers(HttpMethod.GET, "api/bar/boissons/**").permitAll()
				.antMatchers(HttpMethod.GET,"/api/bar/**").permitAll()
				.antMatchers(HttpMethod.POST,"api/compte/Client","api/compte/Intervenant").permitAll()
				.antMatchers("/index.html","/carte").permitAll()
//				.antMatchers("/api/reglement").hasRole("Client")
				.antMatchers("/api/bar/stocks/**").hasAnyRole("Admin","Employe")
				.antMatchers("/api/**").authenticated()
//				.anyRequest().authenticated()
			.and()
			.httpBasic();
		
// @formatter:on

	}

//	@Autowired
//	private DataSource dataSource;

	@Autowired
	private UserDetailsService userDetailsService;

	@Override
	// le méthode d'authentification
	public void configure(AuthenticationManagerBuilder auth) throws Exception {

//		// authentification en mémoire
//		// @formatter:off
//		auth.inMemoryAuthentication()
//			.withUser("antoine").password("{noop}antoine").roles("ADMIN")
//			.and()
//			.withUser("compagnon").password("{noop}compagnon").roles("COMPAGNON")
//			.and()
//			.withUser("user").password("{noop}user").roles("USER");
//// @formatter:on
// 
//
//		// authentification avec requetes sql
//		//// @formatter:off
//		auth.jdbcAuthentication()
//			.dataSource(dataSource)
//				.usersByUsernameQuery("select login, password,enable from users where login=?")
//				.authoritiesByUsernameQuery("select login, roles from users_roles ur join users u on ur.user_id=u.id where login=?");
//// @formatter:on

		auth.userDetailsService(userDetailsService);

	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

}
