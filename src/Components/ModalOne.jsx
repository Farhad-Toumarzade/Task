import { GoXCircle } from "react-icons/go";
function ModalOne({ title, children, show, onShow }) {
  if (!show) return null;

  return (
    <div className="details">
      <div className="details-modal">
        <div className="details-modal-title">
          <GoXCircle
            className="details-modal-close"
            onClick={() => onShow(false)}
          />

          <h1>{title}</h1>
        </div>
        <div className="details-modal-content">{children}</div>
      </div>
    </div>
  );
}

export default ModalOne;
