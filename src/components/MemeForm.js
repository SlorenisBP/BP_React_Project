import React, { useState } from 'react';

const MemeForm = ({ onAddMeme }) => {
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMeme = {
      title,
      upvotes: 0,
      downvotes: 0,
      img,
      isStarred: false,
    };

    onAddMeme(newMeme);

    setTitle('');
    setImg('');
  };

  return (
    <div className="form-container">
      <h2 className="section-title">Add New Meme</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Title:
          <input
            className="form-input"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label className="form-label">
          Image URL:
          <input
            className="form-input"
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            required
          />
        </label>
        <button className="form-submit-btn" type="submit">
          Add Meme
        </button>
      </form>
    </div>
  );
};

export default MemeForm;
