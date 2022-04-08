const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <article
      className={` z-50 w-full left-0 top-0 h-screen bg-opacity-75 bg-black   ${
        isOpen ? "fixed" : "hidden"
      }`}
      onClick={closeModal}
    >
      <div
        className="h-full relative  w-11/12 mx-auto my-auto bg-white overflow-y-auto overscroll-x-none scrollbar-thin scrollbar-thumb-black scrollbar-track-neutral-400"
        onClick={handleModalContainerClick}
      >
        <div className="title shadow-lg py-2 px-5 fixed top-0 flex justify-between items-center w-11/12 mx-auto bg-white">
          <h2 className=""> Evaluación </h2>
          <button className="btn " onClick={closeModal}>
            X
          </button>
        </div>
        <div className="px-4">{children}</div>
      </div>
    </article>
  );
};

export default Modal;
