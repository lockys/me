import React from 'react';
import { SCTitle as _SCTitle } from './styled-comps';
import styled from 'styled-components';

const SCTitle = styled(_SCTitle)`
  font-family: 'Lato-Regular', sans-serif;
  font-weight: normal;
`;

const Kudos = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <SCTitle>(K)udos</SCTitle>
      <br />
      <section>
        <ol>
          <li>
            - Fonts are from{' '}
            <a target={'_blank'} href={'https://fontstruct.com/fontstructions/show/2047444/ndot-45-inspired-by-nothing-1'} rel="noreferrer">
              NDOT 47
            </a>{' '}
            and{' '}
            <a target={'_blank'} href={'https://larsenwork.com/monoid/'} rel="noreferrer">
              Monoid
            </a>
          </li>
          <li>
            - Wing image is from{' '}
            <a target={'_blank'} href={'https://www.shutterstock.com/'} rel="noreferrer">
              shutterstock
            </a>
          </li>
          <li>
            - Good old school gif is from{' '}
            <a target={'_blank'} href={'https://cyber.dabamos.de/88x31/index.html'} rel="noreferrer">
              cyber.dabamos.de
            </a>
          </li>
        </ol>
      </section>
      <br />
      <SCTitle>(L)icense</SCTitle>
      <br />
      This portfolio page is released under{' '}
      <a href={'https://github.com/lockys/me/blob/master/license'} target={'_blank'} rel="noreferrer">
        MIT
      </a>
      .
    </div>
  );
};

export default Kudos;
