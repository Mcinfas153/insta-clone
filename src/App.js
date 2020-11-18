import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './component/Header';
import Post from './component/Post';
import { db } from './config/firebase';
import Sidebar from './component/Sidebar';
import './App.css';
import { snapchat } from 'react-icons-kit/fa';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapShot => {
      setPosts(snapShot.docs.map(doc => doc.data()))
    })
  }, [posts]);



  return (
    <div className="App">
      <Header />
      <Container>
        <Row>
          <Col sm={8} md={8}>
            {/*post rendering start */}
            {posts.map(post =>
              <Post key={post.user_name}
                userName={post.user_name}
                postImage={post.post_image}
                profilePic={post.profile_pic}
                caption={post.caption}
                id={post.user_name}
              />
            )}
            {/*post rendering start */}
          </Col>
          <Col sm={4} md={4}>
            <Sidebar></Sidebar>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
