package cl.tienda.mensajeria.controller;
import cl.tienda.mensajeria.model.Mensajeria;
import cl.tienda.mensajeria.service.MensajeriaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
// Expone endpoints HTTP y devuelve los datos como JSON.
@RestController
// Ruta base para las peticiones de contactos.
@RequestMapping("/api/contactos")

// Permite peticiones desde React.
// Ajustar si Vite utiliza otro puerto.
@CrossOrigin(origins = "http://localhost:5173")
public class MensajeriaController {

    private final MensajeriaService service;

    // Spring inyecta el servicio mediante el constructor.
    public MensajeriaController(MensajeriaService service) {
        this.service = service;
    }

    // POST: recibe un JSON y registra un nuevo contacto.
    @PostMapping
    public ResponseEntity<Mensajeria> guardar(
            @RequestBody Mensajeria contacto) {

        Mensajeria guardado = service.guardar(contacto);

        // Devuelve el contacto guardado y el código HTTP 201.
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(guardado);
    }

    // GET: devuelve todos los contactos como una lista JSON.
    @GetMapping
    public List<Mensajeria> listar() {
        return service.listar();
    }
}
