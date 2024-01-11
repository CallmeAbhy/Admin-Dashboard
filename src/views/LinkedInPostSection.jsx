import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Image,
  Button,
  Form,
} from "react-bootstrap";

const LinkedInPost = ({ posts }) => {
  const [savedPosts, setSavedPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [commentingPost, setCommentingPost] = useState(null);

  const toggleSave = (postId) => {
    setSavedPosts((prevSavedPosts) =>
      prevSavedPosts.includes(postId)
        ? prevSavedPosts.filter((id) => id !== postId)
        : [...prevSavedPosts, postId]
    );
  };

  const toggleLike = (postId) => {
    setLikedPosts((prevLikedPosts) =>
      prevLikedPosts.includes(postId)
        ? prevLikedPosts.filter((id) => id !== postId)
        : [...prevLikedPosts, postId]
    );
  };

  const toggleComment = (postId) => {
    setCommentingPost((prevCommentingPost) =>
      prevCommentingPost === postId ? null : postId
    );
  };

  return (
    <Container className="my-3">
      {posts.map((post) => (
        <Card key={post.id} className="mb-4">
          <Card.Body className="pb-0">
            <Row className="align-items-center">
              {/* Left side (Profile info) */}
              <Col xs={9} md={10}>
                <Row className="align-items-center">
                  <Col xs={2} md={1} className="text-center">
                    <Image
                      src={post.userProfilePicture}
                      roundedCircle
                      style={{ width: "50px", height: "50px" }}
                    />
                  </Col>
                  <Col xs={10} md={11} className="ps-2">
                    <div>
                      <h6 className="mb-1">{post.userName}</h6>
                      <p className="mb-0">{post.userJobTitle}</p>
                      <p className="text-muted mb-0">{post.postedTime}</p>
                    </div>
                  </Col>
                </Row>
              </Col>

              {/* Right side (Save button) */}
              <Col xs={3} md={2} className="text-end">
                <Button
                  variant="outline-danger"
                  onClick={() => toggleSave(post.id)}
                >
                  {savedPosts.includes(post.id) ? (
                    <i className="bi bi-bookmark-fill"></i>
                  ) : (
                    <i className="bi bi-bookmark"></i>
                  )}
                </Button>
              </Col>
            </Row>

            {/* Post Content */}
            <Row className="mt-3">
              <Col>
                <p>{post.postContent}</p>
              </Col>
            </Row>
          </Card.Body>

          {post.postImage && (
            <Card.Img
              variant="top"
              src={post.postImage}
              style={{ padding: "0 10px", borderRadius: "10px" }}
            />
          )}

          <Card.Body>
            <Row className="justify-content-between">
              <Col>
                <Button
                  variant={
                    likedPosts.includes(post.id) ? "danger" : "outline-primary"
                  }
                  className="mr-2"
                  onClick={() => toggleLike(post.id)}
                >
                  {likedPosts.includes(post.id) ? (
                    <i className="bi bi-heart-fill"></i>
                  ) : (
                    <i className="bi bi-heart"></i>
                  )}
                </Button>
                <Button
                  variant="outline-secondary"
                  className="mr-2"
                  onClick={() => toggleComment(post.id)}
                >
                  <i className="bi bi-chat-dots"></i>
                </Button>
                <Button variant="outline-info">
                  <i className="bi bi-send"></i>
                </Button>
              </Col>
            </Row>

            {commentingPost === post.id && (
              <Row className="mt-3">
                <Col xs={10}>
                  <Form.Group controlId={`commentForm-${post.id}`}>
                    <Form.Control
                      type="text"
                      placeholder="Write a comment..."
                    />
                  </Form.Group>
                </Col>
                <Col xs={2} className="text-end">
                  <Button variant="primary" size="md">
                    Send
                  </Button>
                </Col>
              </Row>
            )}
          </Card.Body>
        </Card>
      ))}
      <Row>
        <Col className="text-center">
          <Button variant="outline-dark">View More</Button>
        </Col>
      </Row>
    </Container>
  );
};

const LinkedInPostSection = () => {
  // Example data for posts
  const posts = [
    {
      id: 1,
      userName: "John Doe",
      userProfilePicture:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      userJobTitle: "Software Engineer",
      postedTime: "2 hours ago",
      postContent:
        "Google lays off hundreds in Assistant, Hardware, and engineering teams. I can observe that Google is actively hiring in the market. Even a Google recruiter reached out to me last week. On the other hand, they are making employee layoffs. Even if one of Google's subordinate organizations is cutting costs. Why not rotate staff members within organizations to keep the balance, as opposed to firing employees from one and employing outsiders from another?",
      postImage:
        "https://media.licdn.com/dms/image/D5622AQFPBmauF9fxmA/feedshare-shrink_800/0/1704956895272?e=1707955200&v=beta&t=lSuxNuVUGLCqgIp72fIx5UA6rm6FRFC7e8-Pa07cv-Q",
    },
    {
      id: 2,
      userName: "Alice Johnson",
      userProfilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdht7HezY_yZrSWSwUI4MTjINyD54wuA2HA&usqp=CAU",
      userJobTitle: "Product Designer",
      postedTime: "1 day ago",
      postContent:
        "Embracing simplicity in design is crucial. The more we simplify, the more we amplify. A cluttered design is like a noisy room, hard to focus and uninviting. Let's create designs that resonate with clarity and elegance.",
      postImage: null, // No image for this post
    },
    {
      id: 3,
      userName: "Bob Smith",
      userProfilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIUAi2-jLcdZCu4hICN4vlkc4As4SoYaOT4w&usqp=CAU",
      userJobTitle: "Video Content Creator",
      postedTime: "3 days ago",
      postContent: "Check out my latest video! 🎥",
      postImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjZGj9Kki_jqAChy6UrSlUry4IPkPqB2Iw0A&usqp=CAU",
      isVideoPost: true,
      videoUrl: "https://www.example.com/sample-video.mp4",
    },
    {
      id: 4,
      userName: "Eva Patel",
      userProfilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk_TRZDxlL2XMgb9wR6d5TmkzzjJ_uTydPzu1MtstJOg&s",
      userJobTitle: "Travel Enthusiast",
      postedTime: "5 hours ago",
      postContent: "Lakshwadeep vs Maldives - Which one would you prefer?",
      postImage:
        "https://imgeng.jagran.com/images/2024/jan/India%20-%202024-01-08T1514411704707097789.192.jpg",
      isPollPost: true,
      pollOptions: ["Lakshwadeep", "Maldives"],
    },
  ];

  return <LinkedInPost posts={posts} />;
};

export default LinkedInPostSection;
