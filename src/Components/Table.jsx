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

  const [users, setUsers] = useState({});
  const handleAddUsers = (newUsers) => {
    setUsers((prevUsers) => [{ ...prevUsers, newUsers }]);
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="create">
        <button onClick={() => setIsOpen((is) => !is)}>افزودن</button>
      </div>

      <table>
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i}>{c}</th>
            ))}

            <th colSpan={3}>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {records.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.lastName}</td>
              <td>{d.numberCode}</td>
              <td>
                <button>مشاهده</button>
              </td>
              <td>
                <button>ویرایش</button>
              </td>
              <td>
                <button>حذف</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal addUsers={handleAddUsers} open={isOpen} onOpen={setIsOpen} />
    </div>
  );
}

export default Table;

// export function Show() {
//   const[show,setShow]=useState([])

//   useEffect(()=>{
//   axios.get('http://localhost:5000/users').then(res=> setShow(res.show)).catch(err => console.log(err);)
//   },[])

//     return (
//       <div>
//           <div>
//               {}
//           </div>
//       </div>

//     )
//   }
