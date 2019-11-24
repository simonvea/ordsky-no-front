import React from 'react';

// This should be in the store!!

export default function TypeExplanation({ type }) {
  const explanations = {
    words: `For å legge inn egendefinerte ord så skriv ordet komma og vekt.
    Leg et nytt ord på hver linje.
    For eksempel:
    Foo, 3
    Bar, 10`,
    websites: `explanation of websites
     inpyt`,
    text: `explanation of text 
    input`,
  };

  return (
    <div>
      {explanations[type]}
    </div>
  );
}
