import { useEffect, useState } from "react";


function ListCvs() {
    const [cvs, setCvs] = useState<any[]>([]);

    useEffect(() => {
        fetch("http://localhost:4000/api/cvs")
            .then((res) => res.json())
            .then((data) => setCvs(data))
            .catch((err) => console.error(err));
    }, []);

    return (
    <div className="mt-5 container">
      <div className="card p-4 shadow mb-4">
        <div className="card-body">
          <h5 className="card-title">CVS Registrados</h5>
        </div>

        <table className="table table-hover p-4">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Fecha Registro</th>
            </tr>
          </thead>
          <tbody>
            {cvs.map((cv) => (
              <tr key={cv._id}>
                <td>{cv.first_name} {cv.last_name}</td>
                <td>{cv.contact?.email}</td>
                <td>{cv.contact?.phone}</td>
                <td>{new Date(cv.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    )
}

export default ListCvs;
