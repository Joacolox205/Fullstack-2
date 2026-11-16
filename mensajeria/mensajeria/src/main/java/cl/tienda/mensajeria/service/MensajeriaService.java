package cl.tienda.mensajeria.service;
import cl.tienda.mensajeria.model.Mensajeria;
import cl.tienda.mensajeria.repository.MensajeriaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
// Indica que esta clase contiene la lógica del negocio.
@Service
public class MensajeriaService {
    private final MensajeriaRepository repository;

    // Spring inyecta el repositorio mediante el constructor.
    public MensajeriaService(MensajeriaRepository repository) {
        this.repository = repository;
    }

    // Guarda un nuevo contacto.
    public Mensajeria guardar(Mensajeria contacto) {
        // Asegura que se cree un registro nuevo.
        contacto.setId(null);
        // Todo contacto nuevo comienza como pendiente.
        contacto.setEstado("PENDIENTE");
        // La fecha se asigna desde el @PrePersist del modelo.
        return repository.save(contacto);
    }

    // Consulta todos los contactos almacenados.
    public List<Mensajeria> listar() {
        return repository.findAll();
    }
}