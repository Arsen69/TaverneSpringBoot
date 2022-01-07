package soprajc.TaverneSpringBoot.model.inventaire;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class LogAlerte {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
	@JoinColumn(name = "id_stock")
	private Stock stock;
	private LocalDateTime date;
	
	
	public LogAlerte() {}

	public LogAlerte(Stock stock, LocalDateTime date) {
		super();
		this.stock = stock;
		this.date = date;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Stock getStock() {
		return stock;
	}

	public void setStock(Stock stock) {
		this.stock = stock;
	}

	public LocalDateTime getDate() {
		return date;
	}

	public void setDate(LocalDateTime date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "LogAlertes [id=" + id + ", stock=" + stock + ", date=" + date + "]";
	}
	
	
	
}
