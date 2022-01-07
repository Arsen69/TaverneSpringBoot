package soprajc.TaverneSpringBoot.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import soprajc.TaverneSpringBoot.repository.CompteRepository;

@Service
public class ConsoleService implements CommandLineRunner {

	@Autowired
	private CompteRepository compteRepo;
	@Autowired
	private PasswordEncoder passwordEncoder;

	private static final Logger LOGGER = LoggerFactory.getLogger(ConsoleService.class);

	@Override
	public void run(String... args) throws Exception {
		//initPassword();
	}

	private void initPassword() {
		compteRepo.findAll().forEach(c -> {
			c.setPassword(passwordEncoder.encode(c.getLogin()));
			compteRepo.save(c);
		});
	}

}
