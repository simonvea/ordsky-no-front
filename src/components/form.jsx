import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import countWords from '../services/text';
import createCloud from '../services/cloud';
import { addWords } from '../reducers/wordsReducer';
import { addCloud } from '../reducers/cloudsReducer';


function Form(props) {
  const [text, setText] = useState('');

  const onChange = ({ target }) => {
    setText(target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const countedWords = await countWords({ text });
    props.addWords(countedWords);

    const cloud = await createCloud({ words: countedWords });
    props.addCloud(cloud);

    props.toggleDisplay();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            name="text"
            className="form-control"
            rows="5"
            placeholder="Lim inn tekst her"
            value={text}
            onChange={onChange}
          />
        </div>
        <div>
          <button type="submit" id="klikk-meg" className="button">Generer ordsky</button>
          <Link to="/" className="button btn-outline">Tilbake</Link>
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
