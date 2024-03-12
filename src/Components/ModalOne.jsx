import { XCircleIcon } from "@heroicons/react/24/outline";

function ModalOne({ title, children, open, onOpen }) {
  if (!open) return null;

  return (
    <div className="details-modal">
      <div className="details-modal-close" onClick={() => onOpen(false)}>
        <XCircleIcon />
      </div>
      <div className="details-modal-title">
        <h1>{title}</h1>
      </div>
      <div className="details-modal-content">{children}</div>
    </div>
  );
}

export default ModalOne;
