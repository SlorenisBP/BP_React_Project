import React, { useState } from 'react';
import mems from '../mems';
import Mem from './Mem';

const RegularMemes = ({ onAddMeme }) => {
  const [regularMems, setRegularMems] = useState(
    mems.filter((mem) => mem.upvotes - mem.downvotes <= 5)
  );

  const handleUpvote = (memTitle) => {
    setRegularMems((prevMems) =>
      prevMems.map((mem) =>
        mem.title === memTitle ? { ...mem, upvotes: mem.upvotes + 1 } : mem
      )
    );
  };

  const handleDownvote = (memTitle) => {
    setRegularMems((prevMems) =>
      prevMems.map((mem) =>
        mem.title === memTitle ? { ...mem, downvotes: mem.downvotes + 1 } : mem
      )
    );
  };

  const handleToggleStar = (memTitle) => {
    setRegularMems((prevMems) =>
      prevMems.map((mem) =>
        mem.title === memTitle ? { ...mem, isStarred: !mem.isStarred } : mem
      )
    );
  };

  return (
    <div>
      <h2 className="section-title">Regular Memes</h2>
      <div className="mems-container">
        {regularMems.map((mem) => (
          <Mem
            key={mem.title}
            mem={mem}
            onUpvote={handleUpvote}
            onDownvote={handleDownvote}
            onToggleStar={handleToggleStar}
          />
        ))}
      </div>
    </div>
  );
};

export default RegularMemes;
