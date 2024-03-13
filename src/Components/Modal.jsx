import axios from "axios";

import { useState } from "react";
import toast from "react-hot-toast";

function ModalAdd({ addUsers, open, onOpen }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [numberCode, setNumberCode] = useState("");

  if (!open) return null;

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !lastName || !numberCode)
      return toast.error("تمامی مقادیر را پرکنید.");

    async function createUser() {
      const newUsers = {
        name,
        lastName,
        numberCode,
      };
      addUsers(newUsers);
      try {
        const { data } = await axios.post("http://localhost:5000/users", {
          name: name,
          lastName: lastName,
          numberCode: numberCode,
        });
        console.log(data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    createUser();
  }
  return (
    <div className="modal">
      <div className="modal__header">
        <h2>افزودن</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="modal__item">
          <div>
            <label htmlFor="name"> نام</label>&nbsp;
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="Lastname">نام خانوادگی</label>&nbsp;
            <input
              type="text"
              name="Lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="numberCode"> کدملی</label>&nbsp;
            <input
              type="number"
              name="numberCode"
              value={numberCode}
              onChange={(e) => setNumberCode(e.target.value)}
            />
          </div>
        </div>

        <div className="actions">
          <button className="confirm" type="submit">
            تائید
          </button>
          <button className="delete" onClick={() => onOpen(false)}>
            بستن
          </button>
        </div>
      </form>
    </div>
  );
}

export default ModalAdd;
