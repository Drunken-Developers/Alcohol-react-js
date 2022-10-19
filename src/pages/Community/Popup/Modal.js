import React from 'react';
import "../../../assets/css/Modal.css"

function Modal(props) {
 
  function closeModal() {
      props.closeModal();
  }
 
  return (
    <div className="Modal" onClick={closeModal}>
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <button id="modalCloseBtn" onClick={closeModal}>
          ✖
        </button>
        {props.children}
      </div>
    </div>
  );
}

// const [modalIsOpen, setModalIsOpen] = useState(false);
//       <>
//         <button onClick={()=> setModalIsOpen(true)}>Popup Example</button>
//         <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
//             Popup Example Hi!
//         </Modal>
//       </>
//   )
// }  

export default Modal;