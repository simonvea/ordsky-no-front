import React, { useState } from 'react';
import Cloud from './cloud';
import Form from './form';

function Display() {
  const [display, setDisplay] = useState(false);

  const toggleDisplay = () => setDisplay(!display);
  return (
    <div>
      {display && <Cloud toggleDisplay={toggleDisplay} />}

      {!display && <Form toggleDisplay={toggleDisplay} />}
    </div>
  );
}

export default Display;
