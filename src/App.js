import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';
import Counter from './counter.js' ;
import Demo01 from './demo01.js' ;
//import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

export class App extends Component {
  constructor(props){
    super(props) ;
  }

  render() {
    return (
        <div>
          <Counter increment={1} color={NICE} />
          <Counter increment={5} color={SUPER_NICE} />
          <Demo01 />
        </div>
    );
  }
}
