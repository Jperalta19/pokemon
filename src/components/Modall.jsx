import React from 'react';
import {Button, Modal } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
      {...props}
        id={props.id}        
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {props.content}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

const Modall = ( {id, titulo, contenido}) => {

  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
    <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal title={titulo} id={id} content={contenido}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      
    </div>
  )
}

export default Modall
