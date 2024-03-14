// Importación de React

// Componente funcional Mascota
const Mascota = ({ mascota }) => {
  return (
    <div className="card d-flex flex-row">
      <div className="card">
        <img src={mascota.imagen} width={"150px"} className="card-img-top" alt={mascota.nombre} />
      </div>
      <div className="card-text">
        {/* Mostrar el nombre de la mascota */}
        <p className="card-title">Nombre: {mascota.nombre}</p>
        {/* Mostrar el contacto de la mascota */}
        <p className="card-text">Contacto: {mascota.contacto}</p>
        {/* Mostrar el padecimiento de la mascota */}
        <p className="card-text">Padecimiento: {mascota.padecimiento}</p>
      </div>
    </div>
  );
};

// Exportación del componente Mascota
export default Mascota;
