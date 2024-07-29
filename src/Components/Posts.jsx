// src/components/Posts.js
import { useState } from 'react';
import { Card, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import './Posts.css';

const posts = [
  {
    title: 'Publicación 1',
    content: 'Este es el contenido de la primera publicación.',
    image: 'https://media.admagazine.com/photos/64d1e94eebad238bffb5a28b/1:1/w_2250,h_2250,c_limit/plantas-con-flores-faciles-de-cuidar.jpg'
  },
  {
    title: 'Publicación 2',
    content: 'Este es el contenido de la segunda publicación.',
    image: 'https://media.admagazine.com/photos/64d1e94eebad238bffb5a28b/1:1/w_2250,h_2250,c_limit/plantas-con-flores-faciles-de-cuidar.jpg'
  },
  {
    title: 'Publicación 3',
    content: 'Este es el contenido de la tercera publicación.',
    image: 'https://media.admagazine.com/photos/64d1e94eebad238bffb5a28b/1:1/w_2250,h_2250,c_limit/plantas-con-flores-faciles-de-cuidar.jpg'
  },
];

const Posts = () => {
  const [show, setShow] = useState(false);
  const [selectedPost, setSelectedPost] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (post) => {
    setSelectedPost(post);
    setShow(true);
  };

  return (
    <Container>
      <h2 className='tituloPost'>PUBLICACIONES</h2>
      <Row>
        {posts.map((post, index) => (
          <Col key={index} sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src={post.image} alt={post.title} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
                <Button variant="primary" onClick={() => handleShow(post)}>
                  Leer más
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedPost.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedPost.image}
            alt={selectedPost.title}
            style={{ width: '100%', marginBottom: '15px' }}
          />
          <p>{selectedPost.content}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Posts;
