import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ children, isOpen, closeModal, title}) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <article
      className={` z-50 w-full flex justify-center left-0 top-0 h-screen bg-opacity-75 bg-black py-10 ${
        isOpen ? "absolute" : "hidden"
      }`}
      onClick={closeModal}
    >
      <div
        className="h-full  relative rounded-2xl  mx-auto my-auto bg-white overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-black scrollbar-track-neutral-400 w-11/12 "
        onClick={handleModalContainerClick}
      >
        <div className=" absolute py-5 px-5  flex justify-between items-center flex-col w-full mx-auto bg-white h-full">
          <div className="flex  justify-between w-11/12 mx-auto">
            <h2 className="title text-center"> {title} </h2>
            <button className="btn-red" onClick={closeModal}>
              <AiOutlineClose size={20} className="fill-white " />
            </button>
          </div>
          <div className="w-11/12 mx-auto h-full">{children}</div>
        </div>
      </div>
    </article>
  );
};

Modal.defaultProps = {
  title: "Evaluación",
};

export default Modal;
