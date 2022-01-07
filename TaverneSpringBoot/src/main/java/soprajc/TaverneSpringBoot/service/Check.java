package soprajc.TaverneSpringBoot.service;

import java.time.LocalDate;
import java.time.LocalTime;

import org.springframework.stereotype.Service;
import org.yaml.snakeyaml.util.EnumUtils;

import soprajc.TaverneSpringBoot.exception.CheckLocalDateTimeException;
import soprajc.TaverneSpringBoot.exception.CheckLongException;
import soprajc.TaverneSpringBoot.exception.CheckNegatifException;
import soprajc.TaverneSpringBoot.exception.CheckStringException;
import soprajc.TaverneSpringBoot.model.fonctionnalitees.StatutIntervention;

@Service
public class Check {
	
	public static void checkLong(Long id) {
		if (id == null || id < 0) {
			throw new CheckLongException();
		}
	}
	
	public static void checkString(String str) {
		if (str == null) {
			throw new CheckStringException();
		}
	}
	
	public static void checkNegatif(double qte) {
		if (qte < 0) {
			throw new CheckNegatifException();
		}
	}
	
	public static void checkNegatifNullOk(Integer qte) {
		if(qte != null && qte<0) {
			throw new CheckNegatifException();
		}
	}
	
	public static void checkLocalDate(LocalDate date) {
		if(date == null) {
			throw new CheckLocalDateTimeException();
		}
	}
	
	public static void checkLocalTime(LocalTime time) {
		if(time == null) {
			throw new CheckLocalDateTimeException();
		}
	}
}
