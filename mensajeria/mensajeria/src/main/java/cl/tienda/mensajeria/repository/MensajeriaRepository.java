package cl.tienda.mensajeria.repository;

import cl.tienda.mensajeria.model.Mensajeria;
import org.springframework.data.jpa.repository.JpaRepository;

// Proporciona las operaciones de acceso a la base de datos.
// Mensajeria: entidad que administra el repositorio.
// Long: tipo de dato de la clave primaria (id).
public interface MensajeriaRepository
        extends JpaRepository<Mensajeria, Long> {

}