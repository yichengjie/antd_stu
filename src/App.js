import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './components/colors';
import Demo01 from './demo01.js' ;
import Counter from './components/Counter' ;
import InlineForm from './components/InlineForm' ;
import CommonForm from './components/CommonForm' ;
import DemoForm3 from './components/DemoForm3' ;
import DemoForm4 from './components/DemoForm4' ;
import DemoForm5 from './components/DemoForm5' ;
import DemoForm6 from './components/DemoForm6' ;
import DemoForm7 from './components/DemoForm7' ;
import DemoForm8 from './components/DemoForm8' ;

export class App extends Component {
  constructor(props){
    super(props) ;
  }

  render() {
    return (
      <div>
        <Counter increment={1} color={NICE} /><br/>
        <Counter increment={5} color={SUPER_NICE} />
        <DemoForm8/>
      </div>
    );
  }
}
