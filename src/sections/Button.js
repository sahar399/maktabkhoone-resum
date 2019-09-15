import React from 'react';
import { render } from 'react-dom';
import Random from 'react-random';

 class Button extends React.Component {


  render() {
    return <Random  className='tem'  />
  }
};

render(
  <Button />,
  document.getElementById('app')
);   


export default  Button;