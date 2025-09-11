import { useState } from "react";

function UploadCV() {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Por favor selecciona un archivo");
      return;
    }

    const formData = new FormData();
    formData.append("cv", file);

    try {
      const res = await fetch("http://localhost:4000/api/cvs/upload", {
        method: "POST",
        body: formData,
      });

      // 👀 Validamos si el backend respondió con error
      if (!res.ok) {
        const errorText = await res.text(); // leemos texto en bruto
        console.error("❌ Error del servidor:", res.status, errorText);
        alert(`❌ Error del servidor (${res.status}): ${errorText}`);
        return;
      }

      const data = await res.json();
      console.log("✅ Respuesta backend:", data);
      alert(`✅ Archivo procesado: ${data.message}`);
    } catch (err) {
      console.error("❌ Error en el fetch:", err);
      alert("❌ No se pudo conectar al backend");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-3">Subir Hoja de Vida</h2>
      <input
        type="file"
        className="form-control mb-3"
        onChange={handleFileChange}
      />
      <button className="btn btn-primary" onClick={handleUpload}>
        Subir y Procesar
      </button>
    </div>
  );
}

export default UploadCV;
