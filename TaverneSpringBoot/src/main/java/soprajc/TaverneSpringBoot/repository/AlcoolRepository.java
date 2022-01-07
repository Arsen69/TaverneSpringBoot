package soprajc.TaverneSpringBoot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import soprajc.TaverneSpringBoot.model.inventaire.Alcool;

public interface AlcoolRepository extends JpaRepository<Alcool, Long> {

}