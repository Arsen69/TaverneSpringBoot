package soprajc.TaverneSpringBoot.service;

import org.springframework.stereotype.Service;

import soprajc.TaverneSpringBoot.exception.CheckLongException;
import soprajc.TaverneSpringBoot.exception.CheckNegatifException;
import soprajc.TaverneSpringBoot.exception.CheckStringException;

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
		if(qte!=null && qte<0) {
			throw new CheckNegatifException();
		}
	}

}
