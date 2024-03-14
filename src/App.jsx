import { useState } from "react";
import Mascota from "./components/Mascota";
import Formulario from "./components/Formulario";
import Button from "./components/Button"

function App() {
  const [mascota, setMascota] = useState({
    nombre: "",
    contacto: "",
    imagen: "",
    padecimiento: "",
  });
  const [listaMascotas, setListaMascotas] = useState([]);

  const agregarMascota = (nuevaMascota) => {
    setListaMascotas([...listaMascotas, nuevaMascota]);
  };

  const eliminarMascota = (id) => {
    const nuevaListaMascotas = listaMascotas.filter(
      (mascota) => mascota.id !== id
    );
    setListaMascotas(nuevaListaMascotas);
  };

  return (
    <div className="container-fluid mt-5 d-flex">
      <div className="col-6">
        <Formulario
          agregarMascota={agregarMascota}
          mascota={mascota}
          setMascota={setMascota}
        />
      </div>
      <div className="col-6">
        {listaMascotas.length > 0 &&
          listaMascotas.map((mascota) => (
            <Mascota
              key={mascota.id}
              mascota={mascota}
              eliminarMascota={eliminarMascota}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
