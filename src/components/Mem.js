import React, { useState } from 'react';

const Mem = ({ mem }) => {
  const [votes, setVotes] = useState(mem.upvotes - mem.downvotes);
  const [isStarred, setIsStarred] = useState(mem.isStarred);

  const handleVote = (value) => {
    setVotes(votes + value);
  };

  const handleToggleStar = () => {
    setIsStarred(!isStarred);
  };

  return (
    <div className={`mem ${isStarred ? 'starred' : ''}`}>
      <h3 className="mem-title">{mem.title}</h3>
      <img className="mem-image" src={mem.img} alt={mem.title} />
      <div className="mem-controls">
        <button className="upvote-btn" onClick={() => handleVote(1)}>
          <span className="upvote-icon">&#x25B2;</span> Upvote
        </button>
        <button className="downvote-btn" onClick={() => handleVote(-1)}>
          <span className="downvote-icon">&#x25BC;</span> Downvote
        </button>
        <button className="star-btn" onClick={handleToggleStar}>
          <span className="star-icon">&#9733;</span>
        </button>
      </div>
      <div className="vote-counter">
        Votes: {votes}
      </div>
    </div>
  );
};

export default Mem;
