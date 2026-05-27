function Modal({

  isOpen,

  title,

  children,

  onClose

}) {

  if (!isOpen) return null

  return (

    <div className="modal-overlay">

      <div className="modal-box">

        <h2>{title}</h2>

        {children}

        <button onClick={onClose}>
          Close
        </button>

      </div>

    </div>
  )
}

export default Modal