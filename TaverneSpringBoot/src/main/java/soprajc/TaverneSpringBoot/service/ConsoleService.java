package soprajc.TaverneSpringBoot.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import soprajc.TaverneSpringBoot.model.inventaire.Article;
import soprajc.TaverneSpringBoot.repository.CompteRepository;

@Service
public class ConsoleService implements CommandLineRunner {

	@Autowired
	private CompteRepository compteRepo;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private JavaMailSender emailSender;

	private static final Logger LOGGER = LoggerFactory.getLogger(ConsoleService.class);
	
	@Override
	public void run(String... args) throws Exception {
//		//initPassword();
//		SimpleMailMessage message = new SimpleMailMessage();
//		message.setFrom("appli.taverne1@gmail.com");
//		message.setTo("erwan.beving@gmail.com");
//		message.setSubject("Test mail java");
//		message.setText(
//				"Ce mail est envoyé à partir d'une application Java");
//		emailSender.send(message);
	}

	private void initPassword() {
		compteRepo.findAll().forEach(c -> {
			c.setPassword(passwordEncoder.encode(c.getLogin()));
			compteRepo.save(c);
		});
	}

}
