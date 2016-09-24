import React from 'react';
import {render} from 'react-dom';

import {Draggable, Droppable} from '../src';
import comp from './comp';

class Component extends React.Component {

  dropped() {
    return comp;
  }

  render() {
    return (
      <div>
        <Droppable dropped={this.dropped}/>
        <Draggable elem="comp"/>
      </div>
    );
  }
}

render(
  <Component />,
  document.getElementById('app')
);
