import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../styles/login_modal.css';

function LoginModal(props) {
    const [userLogged, setUserLogged] = useState(false);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            size="sm"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                {userLogged ?
                    <Button className="btn-sm" onClick={() => setUserLogged(false)}>Logout</Button>
                    :
                    <Button className="btn-sm" onClick={() => setUserLogged(true)}>Login</Button>
                }

            </Modal.Footer>
        </Modal>
    )
}

export default LoginModal
