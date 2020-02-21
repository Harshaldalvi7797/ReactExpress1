import React from "react";
import { Button, Modal } from "react-bootstrap";
import { history } from "../../History/history";
import { Link } from "react-router-dom";

function ExModal(props) {
  const abc = () => {
    props.onHide();
    history.push("/signup");
    window.location.reload();
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          <a className="btn btn-primary" onClick={abc}>
            {" "}
            hghgchgf
          </a>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ExModal;
