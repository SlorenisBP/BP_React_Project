import React from 'react';
import MemeForm from './MemeForm';

const AddMemes = ({ onAddMeme }) => {
  const handleAddMeme = (newMeme) => {
    onAddMeme(newMeme);
  };

  return (
    <div>
      <MemeForm onAddMeme={handleAddMeme} />
    </div>
  );
};
export default AddMemes;