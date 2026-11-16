-- Crea la tabla 
CREATE TABLE contacto (

    
    id BIGINT NOT NULL AUTO_INCREMENT,        -- Identificador único generado automáticamente por MySQL.    
    nombre_completo VARCHAR(150) NOT NULL,    -- Nombre completo de quien envía el mensaje.    
    correo VARCHAR(150) NOT NULL,             -- Correo electrónico de contacto.    
    mensaje TEXT NOT NULL,                    -- Contenido del mensaje. TEXT permite guardar textos extensos.  
    fecha_creacion DATETIME(6) NOT NULL,      -- Fecha y hora de creación, asignadas desde el modelo con @PrePersist.    
    PRIMARY KEY (id)                          -- Define el identificador como clave primaria.
);