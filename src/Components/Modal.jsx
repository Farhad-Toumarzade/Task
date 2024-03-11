function Modal() {
  return (
    <div className="modal">
      <div className="modal__header">
        <h2>افزودن</h2>
        <button>بستن</button>
      </div>
      <div className="modal__item">
        <div>
          <label htmlFor="name"> نام</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="name">نام خانوادگی</label>
          <input type="text" name="Lastname" />
        </div>
        <div>
          <label htmlFor="name"> کدملی</label>
          <input type="text" name="numberCode" />
        </div>
      </div>

      <div className="actions">
        <button className="confirm"> تائید </button>
        <button className="delete"> بستن </button>
      </div>
    </div>
  );
}

export default Modal;
