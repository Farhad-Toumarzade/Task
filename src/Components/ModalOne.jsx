// import { XCircleIcon } from "@heroicons/react/24/outline";

function ModalOne({ title, children, show, onShow }) {
  if (!show) return null;

  return (
    <div className="details-modal" onClick={() => onShow(false)}>
      <div className="details-modal-close" onClick={() => onShow(false)}>
        {/* <XCircleIcon /> */}
      </div>
      <div className="details-modal-title">
        <h1>{title}</h1>
      </div>
      <div className="details-modal-content">{children}</div>
    </div>
  );
}

export default ModalOne;
