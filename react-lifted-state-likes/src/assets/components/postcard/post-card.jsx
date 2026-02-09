import "./PostCard.css";

const PostCard = ({ title, description, likes, onLike }) => {
  return (
    <div className="postcard">
      <h3>{title}</h3>
      <p>{description}</p>

      <div className="post-footer">
        <span>❤️ {likes}</span>

        {likes >= 5 && <span className="trending">🔥 Trending</span>}

        <button onClick={onLike} disabled={likes >= 10}>
          Like
        </button>
      </div>
    </div>
  );
};

export default PostCard;
