import { React, useState} from "react";
import FormInput from "./FormInput";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './cartForm.css'

function CartForm (props) {

    const [info, setInfo] = useState({
        name: "",
        phone: "",
        email: ""
    })

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleInputChange(event) {
        let targetName = event.target.name;
        let targetValue = event.target.value;
        let updatedInfo = { ...info };
        updatedInfo[targetName] = targetValue;
        setInfo(updatedInfo);
    }

    return (
        <>
            <Button className="btn btn-secondary col-sm-5 col-md-5 col-lg-5 col-xl-5 mb-3" onClick={handleShow}>
                {props.children}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Complete sus datos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="formFlex px-4 py-2 mb-2" onSubmit={props.onSubmit}>
                        <FormInput name="name" label="Nombre y apellido" type="text" value={info.name} onChange={handleInputChange}></FormInput>
                        <FormInput name="phone" label="Teléfono" type="phone" value={info.phone} onChange={handleInputChange}></FormInput>
                        <FormInput name="email" label="E-mail" type="email" value={info.email} onChange={handleInputChange}></FormInput>
                    </form>
                    <div className="btnsGroup modal-footer pb-0">
                        <Button variant="light" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button 
                            variant="secondary" 
                            className=""
                            onClick={()=>{
                                handleClose();
                                props.onClick(info);
                                setInfo({
                                    name: "",
                                    phone: "",
                                    email: ""
                                });
                            }}
                            disabled={info.name === "" || info.phone === "" || info.email === ""}
                        >
                            Finalizar
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>


        </>
    )
}

export default CartForm;