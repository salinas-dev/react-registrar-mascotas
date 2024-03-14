// Formulario.js
const Formulario = ({ agregarMascota, mascota, setMascota }) => {
    const handleChange = (e) => {
      const { name, value } = e.target;
      setMascota({ ...mascota, [name]: value });
    };
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setMascota({ ...mascota, imagen: reader.result });
      };
      reader.readAsDataURL(file);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí podrías realizar validaciones antes de agregar la mascota
      const nuevaMascota = { ...mascota, id: Date.now() };
      agregarMascota(nuevaMascota);
      setMascota({
        nombre: "",
        contacto: "",
        imagen: "",
        padecimiento: "",
      });
    };
  
    return (
      <form onSubmit={handleSubmit} className="form">
        <div className="mb-3">
          <label className="form-label">Nombre de la mascota</label><br></br>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={mascota.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <br></br>
        <div className="mb-3">
          <label className="form-label">Contacto</label><br></br>
          <input
            type="text"
            className="form-control"
            name="contacto"
            value={mascota.contacto}
            onChange={handleChange}
            required
          />
        </div>
        <br></br>

        <div className="mb-3">
          <label className="form-label">Imagen de la mascota</label><br></br>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            onChange={handleFileChange}
            required
          />
        </div>
        <br></br>

        <div className="mb-3">
          <label className="form-label">Padecimiento</label><br></br>
          <input
            type="text"
            className="form-control"
            name="padecimiento"
            value={mascota.padecimiento}
            onChange={handleChange}
            required
          />
        </div>
        <br></br>

        <button type="submit" className="btn btn-primary">Agregar Mascota</button>
      </form>
    );
  };
  
  export default Formulario;
  