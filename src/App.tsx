import UploadCV from "./components/UploadCV";
import ListCvs from "./components/ListCvs";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [view, setView] = useState("upload");
  const [loading, setLoading] = useState(false);

  const handleListClick = () => {
    setLoading(true);
    setView("list");
    setLoading(false);
  };

  return (
    <div className="App d-flex flex-column min-vh-100">
      {/* Layout principal */}
      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <Sidebar
          onUploadClick={() => setView("upload")}
          onListClick={handleListClick}
          loading={loading}
        />

        {/* Contenido */}
        <div className="flex-grow-1 p-4">
          {view === "upload" && <UploadCV />}
          {view === "list" && <ListCvs />}
        </div>
      </div>

      {/* Footer separado, ocupa todo el ancho */}
      <Footer />
    </div>
  );
}

export default App;
