import { useEffect, useState } from "react";
import axios from "axios";
import ModalAdd from "./Modal";
import ModalOne from "./ModalOne";
import toast from "react-hot-toast";
import { FaEye, FaEdit, FaRegTrashAlt, FaSearchLocation } from "react-icons/fa";
function Table({ children }) {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const [users, setUsers] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => {
      setColumns(Object.keys(res.data[0]));
      setRecords(res.data);
    });
  }, []);

  async function deleteUsers(id) {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
    } catch (error) {
      toast.error(error.message);
    }
  }

  const handleAddUsers = (newUsers) => {
    setUsers((prevUsers) => [{ ...prevUsers, newUsers }]);
  };
  // const handleDeleteUsers = (id) => {
  //   // setRecords((preRec) => preRec.filter((rec) => rec.id !== id));
  //   const conf = window.confirm("آیا میخواهید حذف شود؟");
  //   if (conf) {
  //     axios
  //       .delete("http://localhost:5000/users")
  //       .then((res) => {
  //         toast.success("با موفقیت حذف شد.");
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // };

  const handleDeleteUsers = async (e, id) => {
    e.preventDefault();
    const conf = window.confirm("آیا میخواهید حذف شود؟");
    if (conf) {
      await deleteUsers(id);
      toast.success("با موفقیت حذف شد.");
    }
  };

  const [isOpen, setIsOpen] = useState(null);
  const [isShow, setIsShow] = useState(null);

  return (
    <div>
      <div className="create">
        <button onClick={() => setIsOpen((is) => !is)}>افزودن</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>شناسه</th>
            <th>نام</th>
            <th>نام خانوادگی</th>
            <th>کدملی</th>

            <th colSpan={4}>عملیات</th>
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
                <ModalOne onShow={setIsShow} show={isShow} title={"مشخصات"}>
                  {records.map((item) => (
                    <div key={item.id}>
                      <span>نام: {item.name}</span>
                    </div>
                  ))}
                </ModalOne>
                <button onClick={() => setIsShow((s) => !s)}>
                  مشاهده &nbsp;
                  <FaEye />
                </button>
              </td>
              <td>
                <button>
                  ویرایش &nbsp; <FaEdit />
                </button>
              </td>
              <td>
                <button onClick={(e) => handleDeleteUsers(e, d.id)}>
                  حذف &nbsp; <FaRegTrashAlt />
                </button>
              </td>
              <td>
                <button>
                  موقعیت مکانی &nbsp; <FaSearchLocation />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ModalAdd addUsers={handleAddUsers} open={isOpen} onOpen={setIsOpen} />
    </div>
  );
}

export default Table;

// function Show() {
//   return;
// }
