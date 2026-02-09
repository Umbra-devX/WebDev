import { useState } from "react";
import PostCard from "../postcard/post-card";
import postsData from "../../../data/data";
import "./PostList.css";

const PostList = () => {
  const [posts, setPosts] = useState(postsData);

  const handleLike = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === id) {
          return {
            ...post,
            likes: post.likes + 1,
          };
        }
        return post;
      })
    );
  };

  return (
    <div className="postlist">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          description={post.description}
          likes={post.likes}
          onLike={() => handleLike(post.id)}
        />
      ))}
    </div>
  );
};


export default PostList;
