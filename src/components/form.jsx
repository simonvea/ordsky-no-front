import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


function TextForm({
  message, onSubmit, loading, savedText,
}) {
  const [text, setText] = useState(savedText);
  const [notification, setNotification] = useState('');
  const history = useHistory();

  const toggleNotification = (notif, seconds) => {
    setNotification(notif);
    setTimeout(() => setNotification(''), seconds * 1000);
  };

  const onChange = ({ target }) => {
    setText(target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!text) {
      toggleNotification('Du må legge inn tekst før du kan generere en ordsky.', 10);
      return;
    }
    onSubmit(text);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <textarea
          name="text"
          className="form__textarea"
          rows="5"
          placeholder="Lim inn tekst her"
          value={text}
          onChange={onChange}
        />
        <div className="notification">
          {notification || null}
        </div>
        <div className="flex-container">
          <button type="button" className="button button--outline" onClick={() => setText('')}>Tøm</button>
          <button type="submit" id="submit" className="button" disabled={loading}>{message || 'Generer ordsky'}</button>
          <button type="button" className="button button--outline" onClick={() => history.goBack()}>Tilbake</button>
        </div>
      </form>
    </div>
  );
}

export default TextForm;
