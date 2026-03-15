import React from 'react';
import styled from 'styled-components';

const NoteContainer = styled.div`
  text-align: center;
`;

const NoteImage = styled.img`
  border-radius: 5px;
  width: 100%;
`;

const Note = () => {
  return (
    <NoteContainer>
      Notes are still building. <br />
      <br />
      <NoteImage src="https://media3.giphy.com/media/11ikeVaUfcXLWM/giphy.gif" />
    </NoteContainer>
  );
};

export default Note;
