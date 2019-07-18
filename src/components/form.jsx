import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import countWords from '../services/text';
import createCloud from '../services/cloud';
import { addWords } from '../reducers/wordsReducer';
import { addCloud } from '../reducers/cloudsReducer';
import { addLoadingMessage, removeLoading } from '../utils/domfunc';


function Form(props) {
  const [text, setText] = useState('');
  const [notification, setNotification] = useState('');
  const submitButton = document.querySelector('#klikk-meg');

  const toggleNotification = (message, seconds) => {
    setNotification(message);
    setTimeout(() => setNotification(''), seconds * 1000);
  }

  const onChange = ({ target }) => {
    setText(target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!text) {
      toggleNotification('Du må legge inn tekst før du kan generere en ordsky.', 10);
      return;
    }

    try {
      
      addLoadingMessage('Teller ord...', submitButton);

      const countedWords = await countWords({ text });
      props.addWords(countedWords);

    addLoadingMessage('Lager ordsky...', submitButton);

      const cloud = await createCloud({ words: countedWords });
      props.addCloud(cloud);

      props.toggleDisplay();
      removeLoading(submitButton);
    } catch (error) {
      console.error(error);
      setNotification('Noe gikk galt, vennligst prøv igjen.');
      removeLoading(submitButton);
      setTimeout(() => setNotification(''), 5000);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          name="text"
          className="form-control"
          rows="5"
          placeholder="Lim inn tekst her"
          value={text}
          onChange={onChange}
        />
        <div className="notification">
          {notification || null}
        </div>
        <div>
          <button type="submit" id="klikk-meg" className="button">Generer ordsky</button>
          <Link to="/" className="button btn-outline">Til forsiden</Link>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = {
  addWords,
  addCloud,
};

export default connect(null, mapDispatchToProps)(Form);
