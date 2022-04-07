import { useModal } from "../hooks/useModal";
import Modal from "./Modal"
import Respuesta from "./Respuesta";
import Feedbacks from "./Feedbacks";
import PlantillaFeed from "./PlantillaFeed";


const Modals = () => {
    const [isOpenModal1, openModal1, closeModal1 ]= useModal(false);
    const [isOpenRespuesta, openRespuesta, closeRespuesta ]= useModal(false);

  return (
    <div>
        <h2>Modales</h2>
        <button className="btn" type="button" onClick={openModal1}> Modal 1</button>
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Este es el modal 1</p>
        <img src= "https://placeimg.com/400/400/animals" alt="Animals"/>       
        </Modal>

        <button className="btn" type="button" onClick={openRespuesta}> Respuesta 1 </button>
        <Modal isOpen={isOpenRespuesta} closeModal={closeRespuesta}>
         <h3>Respuesta 1</h3>
         <p> Esta es la respuesta 1</p>
         <Respuesta/>
        </Modal>
    </div>
  );
};

export default Modals;