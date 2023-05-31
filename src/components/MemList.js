import React, { useState } from 'react';
import Mem from './Mem';
import mems from './mems';

const MemeList = () => {
  const [hotMems, setHotMems] = useState([]);
  const [regularMems, setRegularMems] = useState(mems);

  const handleVote = (id, type) => {
    const updatedMems = mems.map((mem) => {
      if (mem.id === id) {
        if (type === 'upvote') {
          mem.upvotes += 1;
        } else if (type === 'downvote') {
          mem.downvotes += 1;
        }
      }
      return mem;
    });

    const updatedHotMems = updatedMems.filter((mem) => mem.upvotes - mem.downvotes > 5);
    const updatedRegularMems = updatedMems.filter((mem) => mem.upvotes - mem.downvotes <= 5);

    setHotMems(updatedHotMems);
    setRegularMems(updatedRegularMems);
  };

  return (
    <div>
      <h2>HOT Memes</h2>
      {hotMems.map((mem) => (
        <Mem key={mem.id} mem={mem} onVote={handleVote} />
      ))}

      <h2>Regular Memes</h2>
      {regularMems.map((mem) => (
        <Mem key={mem.id} mem={mem} onVote={handleVote} />
      ))}
    </div>
  );
};

export default MemeList;
