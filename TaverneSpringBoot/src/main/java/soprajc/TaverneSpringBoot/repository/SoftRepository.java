package soprajc.TaverneSpringBoot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import soprajc.TaverneSpringBoot.model.inventaire.Soft;

public interface SoftRepository extends JpaRepository<Soft, Long> {

}