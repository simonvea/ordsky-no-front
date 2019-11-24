import React from 'react';

function SingleWord({
  text, setText, number, setNumber,
}) {
  const onTextChange = ({ target }) => {
    setText(target.value);
  };
  const onNumberChange = ({ target }) => {
    setNumber(target.value);
  };
  return (
    <div className="flex-container">
      <input type="text" value={text} onChange={onTextChange} />
      <input type="number" value={number} onChange={onNumberChange} />
    </div>
  );
}

export default SingleWord;
