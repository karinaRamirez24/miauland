import './App.css'
import { useState, useEffect } from "react"
function App()  {
  const [usuarios, setUsuarios] = useState([]); // Estado para almacenar los usuarios
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // Llamado a la API
      .then((response) => response.json()) // Convertir la respuesta a JSON
      .then((data) => {
        setUsuarios(data); // Guardar los datos en el estado
        setLoading(false); // Desactivar el estado de carga
      })
      .catch((error) => {
        console.error("Error al obtener los usuarios:", error);
        setLoading(false);
      });
  }, []); // [] indica que solo se ejecuta al montar el componente

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {usuarios.map((usuario) => (
            <li key={usuario.id}>{usuario.name} - {usuario.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App
