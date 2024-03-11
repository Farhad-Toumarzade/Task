import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal";

function Table() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => {
      setColumns(Object.keys(res.data[0]));
      setRecords(res.data);
    });
  }, []);

  return (
    <div>
      <div className="create">
        <button>افزودن</button>
      </div>

      <table>
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i}>{c}</th>
            ))}

            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {records.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.Lastname}</td>
              <td>{d.numberCode}</td>
              <td>ویرایش/حذف</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal />
    </div>
  );
}

export default Table;
