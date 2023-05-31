import React, { useState, useEffect } from 'react';
import Mem from './Mem';
import mems from '../mems';

const HotMemes = () => {
  const [hotMemes, setHotMemes] = useState([]);

  useEffect(() => {
    const filteredMemes = mems.filter((mem) => mem.upvotes >= 5);
    setHotMemes(filteredMemes);
  }, []);

  return (
    <div>
      <h2 className="section-title">Hot Memes</h2>
      <div className="mems-container">
        {hotMemes.map((mem) => (
          <Mem key={mem.title} mem={mem} />
        ))}
      </div>
    </div>
  );
};

export default HotMemes;
