interface SidebarProps {
  onUploadClick: () => void;
  onListClick: () => void;
  loading: boolean;
}

function Sidebar({ onUploadClick, onListClick, loading }: SidebarProps) {
  return (
    <div className=" text-white p-3" style={{ width: "250px", minHeight: "100vh", backgroundColor: "#103272" }}>
      <h3 className="mb-4 mt-4">🚀 SmartCV</h3>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <button
            className="btn w-100" style={{ backgroundColor: "white", color: "#0A4BC3" }}
            onClick={onUploadClick}
          >
            Subir CV
          </button>
        </li>
        <li className="nav-item">
          <button
            className="btn w-100" style={{ backgroundColor: "white", color: "#0A4BC3" }}
            onClick={onListClick}
            disabled={loading}
          >
            {loading ? "Cargando..." : " Listar Clientes"}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
