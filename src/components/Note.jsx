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
    <NoteContainer data-testid="note">
      Notes are still building. <br />
      <br />
      <NoteImage data-testid="note-image" src="https://media3.giphy.com/media/11ikeVaUfcXLWM/giphy.gif" />
    </NoteContainer>
  );
};

export default Note;
