import React from 'react';

import { Container, Jonas } from './styles';
import jonasimg from '../../Assets/jonas-pic.png';

function Landing() {
  return (
    <Container>
      <Jonas src={jonasimg} />
      <div className='hello-texts'>
        <strong>
          Hello,
          <br />I am Jonas Estevam
        </strong>
        <br />
        <p>A Javascript developer Focused on NodeJS and React</p>
      </div>
    </Container>
  );
}

export default Landing;
