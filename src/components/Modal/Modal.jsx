import Modal from 'react-modal';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
// function closeModal() {
//   setIsOpen(false);
// }
Modal.setAppElement('#root');
const ModalImage = ({ src, alt, onClose, showModal }) => {
  console.log(showModal);
  return (
    <Modal
      isOpen={showModal}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img
        src={src}
        alt={alt}
        style={{ width: '400px', height: '300px', objectFit: 'cover' }}
      />
    </Modal>
  );
};
export default ModalImage;
