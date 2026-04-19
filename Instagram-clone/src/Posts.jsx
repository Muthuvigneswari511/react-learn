import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((res) => res.json())
      .then((data) => {
        const updatedPosts = data.map((post) => ({
          ...post,
          liked: false,
          newComment: ""
        }));
        setPosts(updatedPosts);
      })
      .catch((err) => console.log(err));
  }, []);

  // ❤️ LIKE FUNCTION
  const handleLike = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id
        ? {
            ...post,
            liked: !post.liked,
            likes: post.liked ? post.likes - 1 : post.likes + 1
          }
        : post
    );

    setPosts(updatedPosts);
  };

  // 💬 INPUT CHANGE
  const handleInput = (id, value) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, newComment: value } : post
    );
    setPosts(updatedPosts);
  };

  // 💬 ADD COMMENT
  const handleAddComment = (id) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === id && post.newComment.trim()) {
        return {
          ...post,
          comments: [
            ...post.comments,
            { user: "you", text: post.newComment }
          ],
          newComment: ""
        };
      }
      return post;
    });

    setPosts(updatedPosts);
  };

  return (
    <div className="d-flex justify-content-center">
      {posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <div className="my-3" key={post.id}>
              
              {/* PROFILE */}
              <div className="d-flex align-items-center gap-2">
                <img
                  className="dp rounded-circle"
                  src={post.profilePic}
                  alt=""
                  width="40"
                />
                <h5>{post.username}</h5>
              </div>

              {/* IMAGE */}
              <img
                className="image w-100"
                src={post.image}
                alt=""
                onDoubleClick={() => handleLike(post.id)}
              />

              {/* ACTIONS */}
              <div className="my-2">
                <i
                  onClick={() => handleLike(post.id)}
                  className={`bi ${
                    post.liked ? "bi-heart-fill liked" : "bi-heart"
                  }`}
                  style={{ fontSize: "24px", cursor: "pointer" }}
                ></i>

                <i className="bi bi-chat mx-2"></i>
                <i className="bi bi-send"></i>
              </div>

              {/* LIKES */}
              <div>
                <b>{post.likes} Likes</b>
              </div>

              {/* CAPTION */}
              <p>{post.caption}</p>

              {/* COMMENTS VIEW */}
              <div>
                {post.comments.map((c, index) => (
                  <p key={index}>
                    <b>{c.user}</b> {c.text}
                  </p>
                ))}
              </div>

              {/* ADD COMMENT */}
              <div className="d-flex">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={post.newComment}
                  onChange={(e) =>
                    handleInput(post.id, e.target.value)
                  }
                  className="form-control"
                />
                <button
                  onClick={() => handleAddComment(post.id)}
                  className="btn btn-primary ms-2"
                >
                  Post
                </button>
              </div>

            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Posts;