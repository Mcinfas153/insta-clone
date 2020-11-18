import React from 'react';
import { Container, Row, Col, CardDeck, Card, Form, Button } from 'react-bootstrap';
import { Icon } from 'react-icons-kit';
import { ic_favorite_border } from 'react-icons-kit/md/ic_favorite_border';
import { paperPlaneO, ellipsisH, commentO } from 'react-icons-kit/fa';
import '../styles/post.css';
import { user } from 'react-icons-kit/fa';

function Post({ userName, profilePic, caption, postImage, id }) {
    return (
        <div>
            <CardDeck className="post__wrapper">
                <Card>
                    <Card.Header className="post__header bg__white">
                        <Card.Img variant="top" src={profilePic} className="post__creater__pic" onClick={() => getPostId(id)} />
                        <h4 className="post__creater__name">{userName}</h4>
                        <Icon className="mr-3 float-right" size={24} icon={ellipsisH} />
                    </Card.Header>
                    <Card.Img variant="top" src={postImage} />
                    <Card.Body>
                        <Card.Title>
                            <Icon className="mr-3" size={24} icon={ic_favorite_border} />
                            <Icon className="mr-3" size={24} icon={commentO} />
                            <Icon className="mr-3" size={24} icon={paperPlaneO} />
                        </Card.Title>
                        <Card.Text>
                            <span className="post__creater__name">{userName}</span>
                            <small className="post__text">
                                {caption}
                            </small>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="post__header bg__white">
                        <Row>
                            <Col sm={10} md={10}>
                                <Form.Control type="text" placeholder="Add a Comment" className="post__comment__input" />
                            </Col>
                            <Col sm={2} md={2}>
                                <Button variant="light" className="post__comment__button btn-sm">Post</Button>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </div>
    )
}

function getPostId(id) {
    alert(id)
}

export default Post
