import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './components/colors';
import Counter from './components/Counter' ;
import InlineForm from './components/InlineForm' ;
import CommonForm from './components/CommonForm' ;
import DemoForm3 from './components/DemoForm3' ;
import DemoForm4 from './components/DemoForm4' ;
import DemoForm5 from './components/DemoForm5' ;
import DemoForm6 from './components/DemoForm6' ;
import DemoForm7 from './components/DemoForm7' ;
import DemoForm8 from './components/DemoForm8' ;

//import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
export class App extends Component {
  constructor(props){
    super(props) ;
    this.state = {
        date:'',
        text:''
    } ;
  }
  handleChange(date){
    message.info('你选择的日期是 : ' + date.toString()) ;
    this.setState({date}) ;
  }
  handleInputName (e){
    var value = e.target.value;
    this.setState({text:value}) ;
    console.info(value) ;
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
