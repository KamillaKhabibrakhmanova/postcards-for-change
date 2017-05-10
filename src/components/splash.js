import React from 'react';
import { Link } from 'react-router';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className='splash-body'>
        Hello world
      </header>
    );
  }
}