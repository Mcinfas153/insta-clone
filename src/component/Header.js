import React from 'react';
import { Navbar, FormControl, Form, Nav, Image } from 'react-bootstrap';
import LoginModal from './LoginModal';
import { Icon } from 'react-icons-kit';
import { home } from 'react-icons-kit/icomoon/home';
import { ic_favorite_border } from 'react-icons-kit/md/ic_favorite_border';
import { paperPlaneO } from 'react-icons-kit/fa/paperPlaneO';
import { compass } from 'react-icons-kit/fa/compass'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/header.css';

function Header() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png"
                        className="d-inline-block align-top nav__bar__logo"
                        alt="instagram logo"
                    />
                </Navbar.Brand>
                <Nav className="mr-auto mx-auto">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" size="sm" />
                </Nav>
                <Form inline>
                    <Icon className="mr-3" size={24} icon={home} />
                    <Icon className="mr-3" size={24} icon={compass} />
                    <Icon className="mr-3" size={24} icon={paperPlaneO} />
                    <Icon className="mr-3" size={24} icon={ic_favorite_border} />
                    <Image onClick={() => setModalShow(true)} className="mr-3 nav__bar__user__image" src="https://i.pinimg.com/736x/cd/d8/3a/cdd83a359450afbc2c42144a288d31c8.jpg" roundedCircle />
                </Form>
            </Navbar>
            <LoginModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                title="Login Modal"
            />
        </div>

    );
}

export default Header;