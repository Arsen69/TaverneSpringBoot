package soprajc.TaverneSpringBoot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import soprajc.TaverneSpringBoot.model.comptes.Employe;

public interface EmployeRepository extends JpaRepository <Employe, Long> {

}
