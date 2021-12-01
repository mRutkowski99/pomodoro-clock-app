import { createPortal } from "react-dom";
import { StyledBackdrop, StyledModal, StyledModalHeader } from "./Modal.styled";
import iconClose from "../../assets/icon-close.svg";
import ModalForm from "./modal-form/ModalForm";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/modalSlice";

const Backdrop = (props) => {
  return <StyledBackdrop>{props.children}</StyledBackdrop>;
};

const Modal = () => {
  const dispatch = useDispatch();

  const hideModalHandler = () => {
    dispatch(modalActions.hideModal());
  };

  return (
    <StyledModal>
      <StyledModalHeader>
        <h2>Settings</h2>
        <button onClick={hideModalHandler}>
          <img src={iconClose} alt="Icon inside close button" />
        </button>
      </StyledModalHeader>
      <ModalForm />
    </StyledModal>
  );
};

const overlayRoot = document.getElementById("overlays");

const Overlay = () => {
  return (
    <>
      {createPortal(
        <Backdrop>
          <Modal />
        </Backdrop>,
        overlayRoot
      )}
    </>
  );
};

export default Overlay;
